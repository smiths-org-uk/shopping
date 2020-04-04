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
INSERT INTO items VALUES ('Bio Yoghurt (450g pot)', '2 Large Pots', '', 1, 'dairy');
INSERT INTO items VALUES ('Milk - Whole (2pt)', '2 pints', '', 1, 'dairy');
INSERT INTO items VALUES ('Milk - Semi-skimmed (2pt)', '1 pint', '', 1, 'dairy');
INSERT INTO items VALUES ('Soda Water (1L)', '2 Bottles', '', 1, 'drinks');
INSERT INTO items VALUES ('Schweppes Ginger Ale (12x150ml)', '1 pack', '', 1, 'drinks');
INSERT INTO items VALUES ('Butter (250g)', 'Half a lb', '', 1, 'dairy');
INSERT INTO items VALUES ('Plums - ready-to-eat (400g pk)', '1 pack', '', 1, 'fruit and veg');
INSERT INTO items VALUES ('Avocado (lg)', '1', '', 1, 'fruit and veg');
INSERT INTO items VALUES ('Grapes (80g pk)', '1 pack', '', 1, 'fruit and veg');
INSERT INTO items VALUES ('Bananas (indv)', '2', '', 1, 'fruit and veg');
INSERT INTO items VALUES ('Oranges - easy peel', '3', '', 1, 'fruit and veg');
INSERT INTO items VALUES ('Crumpets (6pk)', '1 pack', '', 1, 'dry goods');
INSERT INTO items VALUES ('Malt Loaf (260g)', '1', '', 1, 'dry goods');
INSERT INTO items VALUES ('Bread - Wholemeal sliced (sm)', '1 small', '', 1, 'dry goods');
INSERT INTO items VALUES ('Ready Meals for 1', '2', '', 1, 'ready meal');

INSERT INTO items VALUES ('Whisky (1L)', '1 litre', '', 2, 'drinks');
INSERT INTO items VALUES ('Coffee - Instant (100g jar)', '1 jar', 'Not decaf', 2, 'dry goods');
INSERT INTO items VALUES ('Yorkshire Teabags (160 box)', '1 jar', 'Not decaf', 2, 'dry goods');
INSERT INTO items VALUES ('Eggs x6 (v.lg)', '6', '', 2, 'dairy');
INSERT INTO items VALUES ('Bacon - back, dry cured (300g)', 'Half a lb', 'Dry cured, unsmoked', 2, 'meat');
INSERT INTO items VALUES ('Pork Suasages (400g)', '1 pack', '', 2, 'meat');
INSERT INTO items VALUES ('Onions (indv)', '3 or 4', '', 2, 'fruit and veg');
INSERT INTO items VALUES ('Soup - c.chick/c.o.mushroom (400g tin)', 'A few tins', '', 2, 'tinned');
INSERT INTO items VALUES ('Blackcurrant Jam (jar)', '1 jar', '', 2, 'toiletries');
INSERT INTO items VALUES ('Weetabix (24 pk)', '1 pack', '', 2, 'dry goods');
INSERT INTO items VALUES ('Kitchen Roll', '1 pack', '', 2, 'toiletries');
INSERT INTO items VALUES ('Toilet Roll', '1 pack', '', 2, 'toiletries');
INSERT INTO items VALUES ('Anti-histamine tablets', '1 pack', '', 2, 'medical');

INSERT INTO items VALUES ('Peas - frozen (bag?)', '1 pack', '', 3, 'frozen');
INSERT INTO items VALUES ('Ice cream (tub?)', '1 pack', '', 3, 'frozen');
INSERT INTO items VALUES ('Sugar', '1 pack', '', 3, 'dry goods');
INSERT INTO items VALUES ('Flour - Self-Raising', '1 pack', '', 3, 'dry goods');
INSERT INTO items VALUES ('Flour - Plain', '1 pack', '', 3, 'dry goods');
INSERT INTO items VALUES ('Rice', '1 pack', '', 3, 'dry goods');
INSERT INTO items VALUES ('Pasta', '1 pack', '', 3, 'dry goods');
INSERT INTO items VALUES ('Salt', '1 pack', '', 3, 'dry goods');
INSERT INTO items VALUES ('Toothpaste', '1 tube', '', 2, 'toiletries');
INSERT INTO items VALUES ('Cod Liver Oil (1000mg max)', '1 pack', '', 3, 'medical');
INSERT INTO items VALUES ('Washing Up Liquid', '1 bottle', '', 2, 'cleaning');
INSERT INTO items VALUES ('Flash', '1 bottle', '', 3, 'cleaning');
INSERT INTO items VALUES ('Bleach', '1 bottle', '', 3, 'cleaning');
INSERT INTO items VALUES ('Cif Cream Cleaner', '1 bottle', '', 3, 'cleaning');

INSERT INTO items VALUES ('Cereals', '1 pack', '', 3, 'dry goods');
INSERT INTO items VALUES ('Cholesterol Lowering Drinks', '1 pack', '', 1, 'drinks');
INSERT INTO items VALUES ('Cheddar Cheese', '1 pack', '', 2, 'dairy');
```

```sql
CREATE USER 'shopping'@'cloudsqlproxy~%' IDENTIFIED BY '';

GRANT SELECT, UPDATE ON shopping.* TO 'shopping'@'cloudsqlproxy~%';
```

```bash
kubectl -n smiths create secret generic shopping-cloudsql-proxy --from-file ./gke/credentials.json
```
