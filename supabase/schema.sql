-- Riesegui questo file in Supabase: SQL Editor → Run

create table if not exists public.reviews (
  id uuid primary key default gen_random_uuid(),
  name text not null check (char_length(name) between 1 and 80),
  place text check (place is null or char_length(place) <= 80),
  message text not null check (char_length(message) between 1 and 1200),
  photos text[] not null default '{}',
  approved boolean not null default true,
  created_at timestamptz not null default now()
);

alter table public.reviews
  alter column approved set default true;

grant usage on schema public to anon, authenticated;
grant select, insert on table public.reviews to anon, authenticated;

alter table public.reviews enable row level security;

drop policy if exists "read approved reviews" on public.reviews;
drop policy if exists "insert pending reviews" on public.reviews;
drop policy if exists "anyone can read reviews" on public.reviews;
drop policy if exists "anyone can insert reviews" on public.reviews;

create policy "anyone can read reviews"
  on public.reviews for select
  to anon, authenticated
  using (true);

create policy "anyone can insert reviews"
  on public.reviews for insert
  to anon, authenticated
  with check (true);

insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values (
  'review-photos',
  'review-photos',
  true,
  5242880,
  array['image/jpeg', 'image/png', 'image/webp', 'image/gif']
)
on conflict (id) do update set
  public = true,
  file_size_limit = 5242880,
  allowed_mime_types = array['image/jpeg', 'image/png', 'image/webp', 'image/gif'];

drop policy if exists "public read review photos" on storage.objects;
create policy "public read review photos"
  on storage.objects for select
  to anon, authenticated
  using (bucket_id = 'review-photos');

drop policy if exists "public upload review photos" on storage.objects;
create policy "public upload review photos"
  on storage.objects for insert
  to anon, authenticated
  with check (bucket_id = 'review-photos');

create or replace function public.verify_review_admin(admin_password text)
returns boolean
language plpgsql
security definer
set search_path = public
as $$
begin
  return admin_password = 'Ubriaco00!';
end;
$$;

create or replace function public.delete_review(review_id uuid, admin_password text)
returns void
language plpgsql
security definer
set search_path = public
as $$
begin
  if admin_password is distinct from 'Ubriaco00!' then
    raise exception 'unauthorized';
  end if;

  delete from public.reviews where id = review_id;
end;
$$;

revoke all on function public.verify_review_admin(text) from public;
revoke all on function public.delete_review(uuid, text) from public;
grant execute on function public.verify_review_admin(text) to anon, authenticated;
grant execute on function public.delete_review(uuid, text) to anon, authenticated;
