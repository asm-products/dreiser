create table checkresult(
  id serial primary key,

  customer serial,
  report serial,
  resource_type varchar(100),
  resource_id int,
  resource_content text,
  prop_name varchar(100),
  prop_value text,
  value text,

  error_msg text,
  error_short_msg text,
  error_offset int,
  error_column int,
  error_end_column int,
  error_line int,
  error_start_pos int,
  error_end_pos int,
  suggestions text,

  creation date,
  modification date,
  deletion date
);

