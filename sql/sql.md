# Structured Query Language
 *writing in progress*
 
## Brief history

## Transaction
Transaction is a statement to control process and data manipulation and permit to validate or invalidate the data processing.


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
    GROUP BY
    
## CONDITION IN GROUP
    HAVING

## RANKING
    RANK OVER ... PARTITION BY
    
    
    
## TRUNCATE
```sql
  TRUNCATE TABLE tableName
```


## Functions
[PostgreSQL official documentation for functions](https://www.postgresql.org/docs/current/functions.html)


## External links
[French SQL Course](https://sql.sh/cours)
