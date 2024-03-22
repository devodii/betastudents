create table "public"."course_outline" (
    "created_at" timestamp with time zone not null default now(),
    "deleted_at" timestamp with time zone,
    "updated_at" timestamp with time zone,
    "title" text not null,
    "content" text not null,
    "user_id" uuid not null default auth.uid(),
    "id" uuid not null default gen_random_uuid()
);


CREATE UNIQUE INDEX course_outlines_pkey ON public.course_outline USING btree (id);

alter table "public"."course_outline" add constraint "course_outlines_pkey" PRIMARY KEY using index "course_outlines_pkey";

alter table "public"."course_outline" add constraint "public_course_outlines_user_id_fkey" FOREIGN KEY (user_id) REFERENCES auth.users(id) not valid;

alter table "public"."course_outline" validate constraint "public_course_outlines_user_id_fkey";

grant delete on table "public"."course_outline" to "anon";

grant insert on table "public"."course_outline" to "anon";

grant references on table "public"."course_outline" to "anon";

grant select on table "public"."course_outline" to "anon";

grant trigger on table "public"."course_outline" to "anon";

grant truncate on table "public"."course_outline" to "anon";

grant update on table "public"."course_outline" to "anon";

grant delete on table "public"."course_outline" to "authenticated";

grant insert on table "public"."course_outline" to "authenticated";

grant references on table "public"."course_outline" to "authenticated";

grant select on table "public"."course_outline" to "authenticated";

grant trigger on table "public"."course_outline" to "authenticated";

grant truncate on table "public"."course_outline" to "authenticated";

grant update on table "public"."course_outline" to "authenticated";

grant delete on table "public"."course_outline" to "service_role";

grant insert on table "public"."course_outline" to "service_role";

grant references on table "public"."course_outline" to "service_role";

grant select on table "public"."course_outline" to "service_role";

grant trigger on table "public"."course_outline" to "service_role";

grant truncate on table "public"."course_outline" to "service_role";

grant update on table "public"."course_outline" to "service_role";

create policy "Enable insert for users based on user_id"
on "public"."course_outline"
as permissive
for insert
to public
with check (true);



