create table houses(
id serial primary key,
name varchar(30),
address varchar(100),
city varchar(100),
state VARCHAR(2),
zip integer,
img text,
mortgage decimal,
rent decimal
);

INSERT INTO houses (name, address, city, state, zip) VALUES ('Beach prop', '1 beach way', 'Santa Monica', 'CA', 90210);
INSERT INTO houses (name, address, city, state, zip) VALUES ('Mountain prop', '10 mountain way', 'Salt Lake City', 'UT', 84044);