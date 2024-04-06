create table "public"."hiking" (
    "id" uuid not null default gen_random_uuid(),
    "created_at" timestamp with time zone not null default now(),
    "title" text not null default ''::text,
    "details" text not null,
    "start_time" date not null,
    "duration" numeric,
    "difficulty_level" character varying not null,
    "creator_id" uuid not null default auth.uid(),
    "status" character varying,
    "photo" character varying not null
);


alter table "public"."hiking" enable row level security;

CREATE UNIQUE INDEX hiking_pkey ON public.hiking USING btree (id);


alter table "public"."hiking" add constraint "hiking_pkey" PRIMARY KEY using index "hiking_pkey";

grant delete on table "public"."hiking" to "anon";

grant insert on table "public"."hiking" to "anon";

grant references on table "public"."hiking" to "anon";

grant select on table "public"."hiking" to "anon";

grant trigger on table "public"."hiking" to "anon";

grant truncate on table "public"."hiking" to "anon";

grant update on table "public"."hiking" to "anon";

grant delete on table "public"."hiking" to "authenticated";

grant insert on table "public"."hiking" to "authenticated";

grant references on table "public"."hiking" to "authenticated";

grant select on table "public"."hiking" to "authenticated";

grant trigger on table "public"."hiking" to "authenticated";

grant truncate on table "public"."hiking" to "authenticated";

grant update on table "public"."hiking" to "authenticated";

grant delete on table "public"."hiking" to "service_role";

grant insert on table "public"."hiking" to "service_role";

grant references on table "public"."hiking" to "service_role";

grant select on table "public"."hiking" to "service_role";

grant trigger on table "public"."hiking" to "service_role";

grant truncate on table "public"."hiking" to "service_role";

grant update on table "public"."hiking" to "service_role";


