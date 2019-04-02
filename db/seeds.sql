


create table botinv (
item_id SERIAL NOT NULL PRIMARY KEY,
item_type varchar(255),
item_cost INTEGER,
item_name varchar(255),
item_hp INTEGER,
item_speed INTEGER,
attack INTEGER,
purchased BOOLEAN
)

