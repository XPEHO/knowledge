# PostgreSQL

PostgreSQL is an Open Source [RDBMS](https://en.wikipedia.org/wiki/Relational_database).

## Brief History
 * Firsts development in 1986
 * First open source release in 1997 (version 6.0) 
 * Supports SQL92 in 2000 (version 7.0) 
 * All RDBMS specifications are implemented in 2005 (version 8.0) 
 * Data-Warehouse support in 2008 (version 8.3) 
 * Lots of optimizations and reviews from 2010 to 2016 (version 9.x)
 * Improve performance, JSON support, robustness (version 10 to 14)
 * Implements MERGE in 2022 (version 15)


## Technical organization

### Server configuration
The config files are in */data* folder

  **postgresql.conf**: contains server configuration
  **pg_ident.conf**: is the configuration between system user and database user
  **pg_hba.conf**: is the client network management file

### File System organization
PostgreSQL have 
 * **TABLESPACE** to manage table localization on disk.
 * **SCHEMA** to split easily the tables between users
 
## SQL Queries
 [See SQL page](../sql/sql.md)

## Stored procedures
 *coming soon*
 
## Performances

### Indexes
When you design your database, each primary key and foreign key have an automatic index. But in som cases, you nedd to add another ones for performance.

    By example, we need to query with a WHERE clause on two columns (begin_date and end_date) but this query is slow.
    
    CREATE INDEX idx_people 
        ON people(begin_date, end_date) 
        USING BTREE;
    
PostgreSQL provides many types of index algorithm, BTREE is the most common but you can please read the [official documentation](https://www.postgresql.org/docs/current/indexes-types.html) for further information.

    
### Execution plan
 *coming soon*

### Partitioning
PostgreSQL can natively make some partitions of your data. This case should only be used when a very massive table is present to scale the performance.

    By example, we will imagine a table of all living people on earth and we a a performance trouble 
    when we query on these data by group of economic region. Basically it is easy to imagine 
    that a short table for Europe, North America, Region of China can reduce the data processed 
    where you query one region.
    
    CREATE TABLE people (
        id         long not null,
        name       string not null,
        country    string not null
        ...
    ) PARTITION BY LIST (country);
      
    CREATE TABLE people_eu 
        PARTITION OF people
        FOR VALUES IN ('FR', 'ES', 'IT', 'DE', 'NL' , ...., 'PL');
    
For further information, please read the [official documentation](https://www.postgresql.org/docs/current/ddl-partitioning.html)

## Administration tasks
### Backup
 *coming soon*
### Restore
 *coming soon*
