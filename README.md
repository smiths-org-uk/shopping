# shopping

```sql
create table shopping.items
(
    title    varchar(255) not null,
    quantity int          not null,
    notes    varchar(255) null,
    constraint items_title_uindex
        unique (title)
);

alter table shopping.items
    add primary key (title);
```