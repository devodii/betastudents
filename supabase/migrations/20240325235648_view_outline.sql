create policy "Allow users to view their course outline"
on "public"."course_outline"
as permissive
for select
to public
using ((auth.uid() = user_id));



