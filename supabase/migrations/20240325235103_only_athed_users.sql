drop policy "Enable insert for users based on user_id" on "public"."course_outline";

alter table "public"."course_outline" enable row level security;

create policy "Allow authenticated users to create course outline."
on "public"."course_outline"
as permissive
for insert
to public
with check ((auth.uid() = user_id));



