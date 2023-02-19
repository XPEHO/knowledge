# Structured Query Language
 *writing in progress*
 
## Brief history
Structured Query Language is a programming language useful in handling structured data and is a standard of ANSI since 1986.
Please read the [Wikipedia](https://en.wikipedia.org/wiki/SQL) page for further information.


## Transaction
Transaction is a statement to control process and data manipulation and permit to validate or invalidate the data processing.
The acceptance of the transaction is a  __commit__  and the reject of the transation is a  __rollback__ .
The best practice is to not use  __autocommit__ .


##  Comparission Operators

| **Operator** |                           **Description**                           | **Exemple**                           |
|:-------------|:--------------------------------------------------------------------|---------------------------------------|
| =            | equal                                                               | name = 'my name'                      |
| <>           | not equal                                                           | name <> 'my name'                     |
| !=           | not equal                                                           | name != 'my name'                     |
| >            | superior                                                            | age > 18                              |
| >=           | superior or equal                                                   | age >= 18                             |
| <            | inferior                                                            | age < 18                              |
| <=           | inferior or equal                                                   | age <= 18                             |
| IN           | is in a list of                                                     | firstname IN ('Charles', 'Elisabeth') |
| BETWEEN      | is between two values                                               | age BETWEEN 13 and 19                 |
| LIKE         | is like something<br>% replace many letters<br>? replace one letter | fistname LIKE '%sab?th'               |
| IS NULL      | is null                                                             | firstname IS NULL                     |
| IS NOT NULL  | is nul null                                                         | firstname IS NOT NULL                 |


##  Logic Operators (also named boolean operators)

| **Operator** |               **Description**              | **Exemple**                    |
|:------------:|:------------------------------------------:|--------------------------------|
| NOT          | boolean NOT                                | NOT a                          |
| OR           | boolean OR                                 | a OR b                         |
| NOT OR       | boolean NOT OR                             | NOT a OR b                     |
| AND          | boolean AND                                | a AND b                        |
| NOT AND      | boolean NOT AND                            | NOT a AND b                    |
| XOR          | boolean Exclusive OR<br>**doesn't exists** | (a AND NOT b) OR (b AND NOT a) |


[ More information about Boolean Algebra](../boolean_algebra.md)

## SELECT

```sql
  SELECT T.column0, T.column1, ..., T.columnN FROM tableName T
```

## CONDITION


```sql
  SELECT T.column0, T.column1, ..., T.columnN FROM tableName T
    WHERE T.column0 like '%data%'
```

## INSERT

```sql
  INSERT INTO tableName(column0, T.column1, ..., T.columnN)
    VALUES ('data0', 'data1', ..., 'dataN')
```

## UPDATE
```sql
  UPDATE tableName
    SET column1='data1', ..., columnN='dataN'
    WHERE column0='data0'
```

## DELETE
```sql
  DELETE FROM tableName
    WHERE column0='data0'
```

## MERGE

## JOINS
### INNER JOIN
```sql
  SELECT A.*, B.* FROM tableA A
    INNER JOIN  tableB B ON A.key=B.key
```

<img alt="logo" src="./img/inner-join.gif" />

### LEFT JOIN
```sql
  SELECT A.*, B.* FROM tableA A
    LEFT JOIN  tableB B ON A.key=B.key
```

<img alt="logo" src="./img/left-join-.gif" />

### LEFT OUTER JOIN
```sql
  SELECT A.*, B.* FROM tableA A
    LEFT OUTER JOIN  tableB B ON A.key=B.key
```

<img alt="logo" src="./img/left-join+.gif" />


### RIGHT JOIN
```sql
  SELECT A.*, B.* FROM tableA A
    RIGHT JOIN  tableB B ON A.key=B.key
```

<img alt="logo" src="./img/right-join-.gif" />

### RIGHT OUTER JOIN
```sql
  SELECT A.*, B.* FROM tableA A
    RIGHT OUTER JOIN  tableB B ON A.key=B.key
```

<img alt="logo" src="./img/right-join+.gif" />


### FULL OUTER JOIN
```sql
  SELECT A.*, B.* FROM tableA A
    FULL OUTER JOIN  tableB B ON A.key=B.key
```


<img alt="logo" src="./img/full-outer.gif" />


```sql
  SELECT A.*, B.* FROM tableA A
    FULL OUTER JOIN  tableB B ON A.key=B.key
    WHERE A.key IS NULL OR B.key IS NULL 
```

<img alt="logo" src="./img/full-outer-.gif" />


## GROUPING
The use some aggregate function like: avg, count, min, max, ...  you have to use grouping

```sql
    GROUP BY
```
    
## CONDITION IN GROUP
To add a condition on grouped data

```sql
    HAVING
```

## RANKING

```sql
    RANK OVER ... PARTITION BY
```
    
    
    
## TRUNCATE
The truncate command erase all the content of a table and it shoudn't be rollbacked.

```sql
  TRUNCATE TABLE tableName
```

## WITH
The WITH instruction is used to split complex business request to have a easier and most readable request.
```sql

  -- this query permits to set in a same row, the current and the previous stock (lag function)
  with update_diff as (
   SELECT 
    sku, avail_stock, update_date,
    -- stock from the previous row
    lag(avail_stock) over(partition by sku order by  sku, updatedDate)  as prev_stock

   FROM T_STORE

   ORDER BY  
   -- order is mandatory to apply "lag" function (SQL-2022 standard)
    sku, updatedDate
  )

  -- sample request implements a basic count for sku that the stock had evolve
  SELECT count(*)
  FROM
     update_diff
  WHERE 
    avail_stock <> prev_stock
```



## Functions
[PostgreSQL official documentation for functions](https://www.postgresql.org/docs/current/functions.html)


## External links
[French SQL Course](https://sql.sh/cours)
