# Boolean Algebra

The boolean is a branch of Algebra but the values are only truth ou false (also denoted 1 or 0) and the root operators are OR, AND and NOT. Boolean algebra was introduced by George Boole in 1847. This algebra has been fundamental in the development of digital electronics, and is provided for in all modern programming languages.

Please see [Wikipedia](https://en.wikipedia.org/wiki/Boolean_algebra) for further details.


# Tables of thruth

| **a** 	| **b** 	| **a OR b** 	| **a AND b** 	| **a XOR b** 	|
|:-----:	|:-----:	|:----------:	|:-----------:	|:-----------:	|
|   0   	|   0   	|      0     	|      0      	|      0      	|
|   0   	|   1   	|      1     	|      0      	|      1      	|
|   1   	|   0   	|      1     	|      0      	|      1      	|
|   1   	|   1   	|      1     	|      1      	|      0      	|

| **a** 	| **NOT a** 	|
|:-----:	|:---------:	|
|   0   	|     1     	|
|   1   	|     0     	|


# Standard boolean operations

``` sql
  NOT NOT a = a

  NOT a AND a = 0

  NOT a OR a = 1

  NOT (a OR b) = NOT a AND NOT b

  NOT (a AND b) = NOT a OR NOT b

  a XOR b = (a AND NOT B) OR (NOT a AND B)
```