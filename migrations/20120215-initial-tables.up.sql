create table customer(
  id serial primary key,

  shopify_id int,
  access_token varchar(100),
  shop varchar(100),
  shop_owner varchar(100),

  country_code varchar(5),
  country_name varchar(100),
  city varchar(100),

  address1 text,
  address2 text,
  zip varchar(50),
  timezone varchar(500),
  currency varchar(50),

  language varchar(200),


  email varchar(100),
  phone varchar(50),

  shopify_creation date,


  charge_id varchar(20),
  plan varchar(100),
  activation date,

  creation date,
  modification date,
  deletion date
);

create table report(
  id serial primary key,
  customer serial,
  creation date
);

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

