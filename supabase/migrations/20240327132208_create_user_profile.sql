create table "public"."profile" (
    "created_at" timestamp with time zone not null default now(),
    "updated_at" timestamp with time zone default now(),
    "deleted_at" timestamp with time zone default now(),
    "country" character varying not null,
    "education_level" character varying not null,
    "school_name" text,
    "photo_url" text,
    "graduation_year" bigint,
    "user_id" uuid not null default auth.uid(),
    "handle" character varying not null,
    "id" uuid not null default gen_random_uuid()
);


alter table "public"."profile" enable row level security;

CREATE UNIQUE INDEX profile_id_key ON public.profile USING btree (id);

CREATE UNIQUE INDEX profile_pkey ON public.profile USING btree (id);

alter table "public"."profile" add constraint "profile_pkey" PRIMARY KEY using index "profile_pkey";

alter table "public"."profile" add constraint "profile_id_key" UNIQUE using index "profile_id_key";

alter table "public"."profile" add constraint "public_profile_user_id_fkey" FOREIGN KEY (user_id) REFERENCES auth.users(id) not valid;

alter table "public"."profile" validate constraint "public_profile_user_id_fkey";

grant delete on table "public"."profile" to "anon";

grant insert on table "public"."profile" to "anon";

grant references on table "public"."profile" to "anon";

grant select on table "public"."profile" to "anon";

grant trigger on table "public"."profile" to "anon";

grant truncate on table "public"."profile" to "anon";

grant update on table "public"."profile" to "anon";

grant delete on table "public"."profile" to "authenticated";

grant insert on table "public"."profile" to "authenticated";

grant references on table "public"."profile" to "authenticated";

grant select on table "public"."profile" to "authenticated";

grant trigger on table "public"."profile" to "authenticated";

grant truncate on table "public"."profile" to "authenticated";

grant update on table "public"."profile" to "authenticated";

grant delete on table "public"."profile" to "service_role";

grant insert on table "public"."profile" to "service_role";

grant references on table "public"."profile" to "service_role";

grant select on table "public"."profile" to "service_role";

grant trigger on table "public"."profile" to "service_role";

grant truncate on table "public"."profile" to "service_role";

grant update on table "public"."profile" to "service_role";

create policy "Allow authenticated users to create a profile"
on "public"."profile"
as permissive
for insert
to public
with check ((auth.uid() = user_id));


create policy "Allow everyone to view a profile"
on "public"."profile"
as permissive
for select
to public
using (true);


create policy "Allow profile owners to delete their profile"
on "public"."profile"
as permissive
for delete
to public
using ((auth.uid() = user_id));



