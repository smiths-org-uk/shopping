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
INSERT INTO items VALUES ('Bio Yoghurt (450g pot)', '0', '', 1, 'dairy');
INSERT INTO items VALUES ('Milk - Whole (2pt)', '0', '', 1, 'dairy');
INSERT INTO items VALUES ('Milk - Semi-skimmed (2pt)', '0', '', 1, 'dairy');
INSERT INTO items VALUES ('Soda Water (1L)', '0', '', 1, 'drinks');
INSERT INTO items VALUES ('Schweppes Ginger Ale (12x150ml)', '0', '', 1, 'drinks');
INSERT INTO items VALUES ('Cholesterol Lowering Drinks (6pk)', '0', '', 1, 'drinks');
INSERT INTO items VALUES ('Butter (250g)', '0', '', 1, 'dairy');
INSERT INTO items VALUES ('Plums - ready-to-eat (400g pk)', '0', '', 1, 'fruit and veg');
INSERT INTO items VALUES ('Avocado (lg)', '0', '', 1, 'fruit and veg');
INSERT INTO items VALUES ('Grapes (80g pk)', '0', '', 1, 'fruit and veg');
INSERT INTO items VALUES ('Bananas (indv)', '0', '', 1, 'fruit and veg');
INSERT INTO items VALUES ('Oranges - easy peel', '0', '', 1, 'fruit and veg');
INSERT INTO items VALUES ('Crumpets (6pk)', '0', '', 1, 'dry goods');
INSERT INTO items VALUES ('Malt Loaf (260g)', '0', '', 1, 'dry goods');
INSERT INTO items VALUES ('Bread - Wholemeal sliced (sm)', '0', '', 1, 'dry goods');
INSERT INTO items VALUES ('Ready Meals for 1', '0', '', 1, 'ready meal');

INSERT INTO items VALUES ('Whisky (1L)', '0', '', 2, 'drinks');
INSERT INTO items VALUES ('Coffee - Instant (100g jar)', '0', '', 2, 'dry goods');
INSERT INTO items VALUES ('Yorkshire Teabags (160 box)', '0', '', 2, 'dry goods');
INSERT INTO items VALUES ('Eggs x6 (v.lg)', '0', '', 2, 'dairy');
INSERT INTO items VALUES ('Cheese - Cheddar (350g-ish)', '0', '', 2, 'dairy');
INSERT INTO items VALUES ('Bacon - back, dry cured (300g)', '0', '', 2, 'meat');
INSERT INTO items VALUES ('Pork Suasages (400g)', '0', '', 2, 'meat');
INSERT INTO items VALUES ('Onions (indv)', '0', '', 2, 'fruit and veg');
INSERT INTO items VALUES ('Soup - c.chick/c.o.mushroom (400g tin)', '0', '', 2, 'tinned');
INSERT INTO items VALUES ('Blackcurrant Jam (jar)', '0', '', 2, 'toiletries');
INSERT INTO items VALUES ('Weetabix (24 pk)', '0', '', 2, 'dry goods');
INSERT INTO items VALUES ('Kitchen Roll', '0', '', 2, 'toiletries');
INSERT INTO items VALUES ('Toilet Roll', '0', '', 2, 'toiletries');
INSERT INTO items VALUES ('Anti-histamine tablets', '0', '', 2, 'medical');

INSERT INTO items VALUES ('Peas - frozen (bag?)', '0', '', 3, 'frozen');
INSERT INTO items VALUES ('Ice cream (tub?)', '0', '', 3, 'frozen');
INSERT INTO items VALUES ('Sugar', '0', '', 3, 'dry goods');
INSERT INTO items VALUES ('Flour - Self-Raising', '0', '', 3, 'dry goods');
INSERT INTO items VALUES ('Flour - Plain', '0', '', 3, 'dry goods');
INSERT INTO items VALUES ('Rice', '0', '', 3, 'dry goods');
INSERT INTO items VALUES ('Pasta', '0', '', 3, 'dry goods');
INSERT INTO items VALUES ('Salt', '0', '', 3, 'dry goods');
INSERT INTO items VALUES ('Toothpaste', '0', '', 3, 'toiletries');
INSERT INTO items VALUES ('Cod Liver Oil (1000mg max)', '0', '', 3, 'medical');
INSERT INTO items VALUES ('Washing Up Liquid', '0', '', 3, 'cleaning');
INSERT INTO items VALUES ('Flash', '0', '', 3, 'cleaning');
INSERT INTO items VALUES ('Bleach', '0', '', 3, 'cleaning');
INSERT INTO items VALUES ('Cif Cream Cleaner', '0', '', 3, 'cleaning');

INSERT INTO items VALUES ('Other #1', '0', '', 4, 'other');
INSERT INTO items VALUES ('Other #2', '0', '', 4, 'other');
```

```sql
CREATE USER 'shopping'@'cloudsqlproxy~%' IDENTIFIED BY '';

GRANT SELECT, UPDATE ON shopping.* TO 'shopping'@'cloudsqlproxy~%';
```

```bash
kubectl -n smiths create secret generic shopping-cloudsql-proxy --from-file ./gke/credentials.json
```
