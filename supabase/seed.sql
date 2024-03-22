insert into auth.users (id, email)
values
  ('550e8400-e29b-41d4-a716-446655440000', 'user@example.com');

insert into course_outline (id, title, content, user_id)
values 
    ('f47ac10b-58cc-4372-a567-0e02b2c3d479', 'Mathematics', 'Vector quantities \n Algebra \n Two sums', '550e8400-e29b-41d4-a716-446655440000' )