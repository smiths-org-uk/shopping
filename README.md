# shopping

```sql
create table shopping.items
(
    title    varchar(255) not null,
    quantity varchar(20)  not null,
    notes    varchar(255) null,
    constraint items_title_uindex
        unique (title)
);

alter table shopping.items
    add primary key (title);
```

```sql

```