# shopping

```sql
create table shopping.items
(
    title      varchar(255) not null,
    quantity   varchar(20)  not null,
    notes      varchar(255) null,
    regularity int          not null,
    category   varchar(20)  not null,
    constraint items_title_uindex
        unique (title)
);

alter table shopping.items
    add primary key (title);
```

```sql
INSERT INTO items VALUES ('Bio Yoghurt', '2 Large Pots', '', 1, 'dairy');
INSERT INTO items VALUES ('Cholesterol Lowering Drinks', '1 pack', '', 1, 'drinks');
INSERT INTO items VALUES ('Whole Milk', '2 pints', '', 1, 'dairy');
INSERT INTO items VALUES ('Semi-skimmed Milk', '1 pint', '', 1, 'dairy');
INSERT INTO items VALUES ('Soda Water', '2 Bottles', '', 1, 'drinks');
INSERT INTO items VALUES ('Ginger Ale Mini Cans', '1 pack', '', 1, 'drinks');
INSERT INTO items VALUES ('Butter', 'Half a lb', '', 1, 'dairy');
INSERT INTO items VALUES ('RTE plums', '1 pack', '', 1, 'fruit and veg');
INSERT INTO items VALUES ('Avocado', '1', '', 1, 'fruit and veg');
INSERT INTO items VALUES ('Red Grapes', '1 pack', '', 1, 'fruit and veg');
INSERT INTO items VALUES ('Banana(s)', '2', '', 1, 'fruit and veg');
INSERT INTO items VALUES ('Easy-peel Oranges', '3', '', 1, 'fruit and veg');
INSERT INTO items VALUES ('Crumpets', '1 pack', '', 1, 'dry goods');
INSERT INTO items VALUES ('Malt Loaf', '1', '', 1, 'dry goods');
INSERT INTO items VALUES ('Sliced Wholemeal Loaf', '1 small', '', 1, 'dry goods');
INSERT INTO items VALUES ('Ready Meals for 1', '2', '', 1, 'ready meal');

INSERT INTO items VALUES ('Instant Coffee', '1 jar', 'Not decaf', 2, 'dry goods');
INSERT INTO items VALUES ('Cheddar Cheese', '1 pack', '', 2, 'dairy');
INSERT INTO items VALUES ('Large Eggs', '6', '', 2, 'dairy');
INSERT INTO items VALUES ('Bacon', 'Half a lb', 'Dry cured, unsmoked', 2, 'meat');
INSERT INTO items VALUES ('Pork Sausages', '1 pack', '', 2, 'meat');
INSERT INTO items VALUES ('Onions', '3 or 4', '', 2, 'fruit and veg');
INSERT INTO items VALUES ('Whisky', '1 litre', '', 2, 'drinks');
INSERT INTO items VALUES ('Washing Up Liquid', '1 bottle', '', 2, 'toiletries');
INSERT INTO items VALUES ('Toothpaste', '1 tube', '', 2, 'toiletries');
INSERT INTO items VALUES ('Toilet rolls', '1 pack', '', 2, 'toiletries');
INSERT INTO items VALUES ('Blackcurrent Jam', '1 jar', '', 2, 'toiletries');
INSERT INTO items VALUES ('Weetabix', '1 pack', '', 2, 'dry goods');
INSERT INTO items VALUES ('Kitchen Paper', '1 pack', '', 2, 'toiletries');
INSERT INTO items VALUES ('Anti histamine tablets', '1 pack', '', 2, 'medical');
INSERT INTO items VALUES ('Condensed Chicken / Mushrrom Soup', 'A few tins', '', 2, 'tinned');

INSERT INTO items VALUES ('Frozen Peas', '1 pack', '', 3, 'frozen');
INSERT INTO items VALUES ('Ice cream', '1 pack', '', 3, 'frozen');
INSERT INTO items VALUES ('Sugar', '1 pack', '', 3, 'dry goods');
INSERT INTO items VALUES ('Cereals', '1 pack', '', 3, 'dry goods');
INSERT INTO items VALUES ('Bleach', '1 bottle', '', 3, 'toiletries');
INSERT INTO items VALUES ('Flash', '1 bottle', '', 3, 'toiletries');
INSERT INTO items VALUES ('Pasta', '1 pack', '', 3, 'dry goods');
INSERT INTO items VALUES ('Rice', '1 pack', '', 3, 'dry goods');
INSERT INTO items VALUES ('Flour', '1 pack', '', 3, 'dry goods');
INSERT INTO items VALUES ('Salt', '1 pack', '', 3, 'dry goods');
INSERT INTO items VALUES ('Cod liver oil capsules', '1 pack', '', 3, 'medical');
INSERT INTO items VALUES ('Cif cream cleaner', '1 bottle', '', 3, 'toiletries');
```

```sql
CREATE USER 'shopping'@'cloudsqlproxy~%' IDENTIFIED BY '';

GRANT SELECT, UPDATE ON shopping.* TO 'shopping'@'cloudsqlproxy~%';
```

```bash
kubectl -n smiths create secret generic shopping-cloudsql-proxy --from-file ./gke/credentials.json
```
