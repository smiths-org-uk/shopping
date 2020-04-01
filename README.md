# shopping

```sql
create table shopping.items
(
    title      varchar(255) not null,
    quantity   varchar(20)  not null,
    notes      varchar(255) null,
    regularity int          not null,
    constraint items_title_uindex
        unique (title)
);

alter table shopping.items
    add primary key (title);
```

```sql
INSERT INTO items VALUES ('Bio Yoghurt', '2 Large Pots', '', 1);
INSERT INTO items VALUES ('Cholesterol Lowering Drinks', '1 pack', '', 1);
INSERT INTO items VALUES ('Whole Milk', '2 pints', '', 1);
INSERT INTO items VALUES ('Semi-skimmed Milk', '1 pint', '', 1);
INSERT INTO items VALUES ('Soda Water', '2 Bottles', '', 1);
INSERT INTO items VALUES ('Ginger Ale Mini Cans', '1 pack', '', 1);
INSERT INTO items VALUES ('Butter', 'Half a lb', '', 1);
INSERT INTO items VALUES ('RTE plums', '1 pack', '', 1);
INSERT INTO items VALUES ('Avocado', '1', '', 1);
INSERT INTO items VALUES ('Red Grapes', '1 pack', '', 1);
INSERT INTO items VALUES ('Banana(s)', '2', '', 1);
INSERT INTO items VALUES ('Easy-peel Oranges', '3', '', 1);
INSERT INTO items VALUES ('Crumpets', '1 pack', '', 1);
INSERT INTO items VALUES ('Malt Loaf', '1', '', 1);
INSERT INTO items VALUES ('Sliced Wholemeal Loaf', '1 small', '', 1);
INSERT INTO items VALUES ('Ready Meals for 1', '2', '', 1);

INSERT INTO items VALUES ('Instant Coffee', '1 jar', 'Not decaf', 2);
INSERT INTO items VALUES ('Cheddar Cheese', '1 pack', '', 2);
INSERT INTO items VALUES ('Large Eggs', '6', '', 2);
INSERT INTO items VALUES ('Bacon', 'Half a lb', 'Dry cured, unsmoked', 2);
INSERT INTO items VALUES ('Pork Sausages', '1 pack', '', 2);
INSERT INTO items VALUES ('Onions', '3 or 4', '', 2);
INSERT INTO items VALUES ('Whisky', '1 litre', '', 2);
INSERT INTO items VALUES ('Washing Up Liquid', '1 bottle', '', 2);
INSERT INTO items VALUES ('Toothpaste', '1 tube', '', 2);
INSERT INTO items VALUES ('Toilet rolls', '1 pack', '', 2);
INSERT INTO items VALUES ('Blackcurrent Jam', '1 jar', '', 2);
INSERT INTO items VALUES ('Weetabix', '1 pack', '', 2);
INSERT INTO items VALUES ('Kitchen Paper', '1 pack', '', 2);
INSERT INTO items VALUES ('Anti histamine tablets', '1 pack', '', 2);
INSERT INTO items VALUES ('Condensed Chicken / Mushrrom Soup', 'A few tins', '', 2);

INSERT INTO items VALUES ('Frozen Peas', '1 pack', '', 3);
INSERT INTO items VALUES ('Ice cream', '1 pack', '', 3);
INSERT INTO items VALUES ('Sugar', '1 pack', '', 3);
INSERT INTO items VALUES ('Cereals', '1 pack', '', 3);
INSERT INTO items VALUES ('Bleach', '1 bottle', '', 3);
INSERT INTO items VALUES ('Flash', '1 bottle', '', 3);
INSERT INTO items VALUES ('Pasta', '1 pack', '', 3);
INSERT INTO items VALUES ('Rice', '1 pack', '', 3);
INSERT INTO items VALUES ('Flour', '1 pack', '', 3);
INSERT INTO items VALUES ('Salt', '1 pack', '', 3);
INSERT INTO items VALUES ('Cod liver oil capsules', '1 pack', '', 3);
INSERT INTO items VALUES ('Cif cream cleaner', '1 bottle', '', 3);
```