---
layout: wiki
learn: true
title: A Pandas Crash Course
tags: ["Coding"]
requires:
    - topic/python.md
---

<aside><p>This library comes pre-installed on Google Colab</p></aside>

The Python library `pandas` has many utilities for working with tabular data (data in the form of a table).
In `pandas`, a table of data is called a `DataFrame` and each column is a `Series`.
Each column has a label, and an "index" is used to identify rows (often just the row number).

We can create a simple dataframe using a dictionary where the keys are the column names and the values are lists of column data:

```python
import pandas as pd

df = pd.DataFrame({
    "team": ["NYA", "BAL", "NYN", "ATL"],
    "division": ["AL-E", "AL-E", "NL-E", "NL-E"],
    "wins": [82, 101, 75, 104]
})
print(df)
```
```
  team division  wins
0  NYA     AL-E    82
1  BAL     AL-E   101
2  NYN     NL-E    75
3  ATL     NL-E   104
```

### Sorting

We can sort by a column:

```python
df = df.sort_values("wins")
print("Ascending ↗️")
print(df)
df = df.sort_values("wins", ascending=False)
print("Descending ↘️")
print(df)
```
```
Ascending ↗️
  team division  wins
2  NYN     NL-E    75
0  NYA     AL-E    82
1  BAL     AL-E   101
3  ATL     NL-E   104
Descending ↘️
  team division  wins
3  ATL     NL-E   104
1  BAL     AL-E   101
0  NYA     AL-E    82
2  NYN     NL-E    75
```

### Working with the Index

Notice how the index on the left side kept the same row indices as before the sort.
If we want to get rid of this, we can reset the index:

```python
print(df.reset_index())
```
```
  index team division  wins
0      3  ATL     NL-E   104
1      1  BAL     AL-E   101
2      0  NYA     AL-E    82
3      2  NYN     NL-E    75
```

If we don't want the old index to show up as a new column,
we can tell pandas to drop it when resetting the index.

```python
print(df.reset_index(drop=True))
```
```
  team division  wins
0  ATL     NL-E   104
1  BAL     AL-E   101
2  NYA     AL-E    82
3  NYN     NL-E    75
```

### Grouping

We can group the data.