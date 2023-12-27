---
layout: wiki
learn: true
title: A Python Crash Course
tags: ["Coding"]
---

- [Google Colab](#google-colab)
- [Variables](#variables)
- [Data Types](#data-types)
- [String Formatting](#string-formatting)
- [Lists, Tuples, and Dictionaries](#lists-tuples-and-dictionaries)
- [Flow Control](#flow-control)
  - [If Statements and Expressions](#if-statements-and-expressions)
  - [Loops](#loops)
- [List/Dictionary Comprehension](#listdictionary-comprehension)
- [Functions](#functions)
- [Classes](#classes)
- [Using Libraries](#using-libraries)
- [Data Formats](#data-formats)

## Google Colab
The easiest way to run Python code is through [Google Colab](https://colab.research.google.com). Normally, Python programs are text files you edit and run on your computer. Colab uses notebooks where you write code in a series of cells. All data is shared between cells, but you can run or rerun cells in any order. Notebooks can also include cells for headings and text, but we’ll stick with just code cells.

Type this in a Colab cell and run it with `Shift + Enter`:

```python
print("baseball data")
```

The output should show `baseball data`.
Typing `Shift + Enter` runs the cell and moves to the next one. Use `Ctrl + Enter` to run a cell without moving to the next one.

## Variables
Variables store data in Python. To create a variable, we give it a name and assign a value.

```python
plate_appearances = 490
```

Here we create a variable and give it the integer value 490.

Use descriptive variable names with all lowercase letters. Separate words with an underscore. Once we assign a value, we can use the variable throughout our code:

```python
print(plate_appearances)
on_base_percentage = 100 / plate_appearances
print(on_base_percentage)
```

## Data Types
The data that goes into variables always has a data type associated with it. The most basic data types are integers (whole numbers), floats (decimal values), booleans (True or False), and strings (text).

It’s possible to define custom data types. We won’t do this much ourselves, but often we will use new data types defined by third-party code.

```python
first_str = "This is a literal string."
second_str = "I added this at the end."
print(first_str + " " + second_str)
strikeout_rate = 0.14
is_left_handed = True
```

## String Formatting

We often want to print out messages that include both text and variable values.
We use "f-strings" to format this output.

```python
name = "Matthew"
homeruns = 21

print(f"{name} hit {homeruns} HR.")
```

Notice the first quotation mark as `f` in front of it!

We can also control how values are formatted
by putting a format specifier after a colon inside the curly braces.
We could print just the first three decimal places:

```python
accuracy = 36 / 47

print(f"acc = {accuracy:.3f}")
```

We could print an integer with three leading zeros:

```python
value = 42

print(f"without format spec: {value}")
print(f"with format spec: {value:03d}")
```

## Lists, Tuples, and Dictionaries
Sometimes we have a collection of data. The most common collections are lists and dictionaries. Lists store an ordered sequence of values.

```python
outcomes = ["strikeout", "walk", "flyout"]
outcomes.append("strikeout")
print(outcomes)
outcomes.remove("walk")
print(outcomes)
```

To access parts of a list, we index it. We can index with a single value, a range (slice), or negative values. Positive indices reference values starting at the beginning of the list. Negative indices reference from the end of the list. The first item has index of 0 not 1!

```python
print(outcomes[0])
print(outcomes[-1])
print(outcomes[1:3])
print(outcomes[1:-1])
```

A "tuple" is an immutable list. Once we create it, we can't add or remove values.
To create a literal tuple, we can use `()` instead of `[]` around the items:

```python
outcomes_tuple = ("strikeout", "walk", "flyout")
```

We will likely use tuples if we want to pair a few values together
when we pass them to different parts of our code.

Dictionaries store a mapping between keys and values.

```python
stat_line = {"bb": 30, "so": 50, "1b": 90}
print(stat_line)
print(stat_line["so"])
stat_line["2b"] = 10 stat_line["bb"] = 20 del stat_line["bb"] print(stat_line)
```

## Flow Control

Python gives us a few ways to control flow through our code.

### If Statements and Expressions
We can use `if` statements to switch which code block gets run:

```python
value = 0.0

if value != 0:
    print(1 / value)
else:
    print("Can't divide by zero!")
```

Python has several comparison operators to use when writing the expressions
that control flow:

|Operator|Description|Example|
|-|-|-|
|`==`|Check if two values are equal| `name == "Jim"`|
|`!=`|Check if two values are not equal| `name != "Sam"`|
|`>`|Check if the first value is greater than the second| `age > my_age` |
|`<`|Check if the first value is less than the second| `cash_flow < 0` |
|`>=`|Check if the first value is greater than or equal to the second| `money >= 0` |
|`<=`|Check if the first value is less than or equal to the second| `homeruns <= 50` |
|`not`|Invert the expression| `not (sb > 30)`|
|`in`| Check if an item is in a collection| `"Sue" in names`|

We can combine multiple expressions to check with `and` and `or`:

```python
homeruns = 32
stolen_bases = 25

if homeruns >= 30 and stolen_bases >= 30:
    print("In the 30-30 club!")
else:
    print("Not in the 30-30 club.")
```

### Loops
We use loops to repeat blocks of code.
A `for` loop repeats the block for each element in an "iterable".
Lists and dictionaries are examples of iterables.

```python
for i in range(10):
    print(i**2)

my_list = ["Twins", "Tigers", "Guardians", "White Sox", "Royals"]

for team in my_list:
    print("The", team, "is in the AL Central")
```

Sometimes we don't know exactly how many times the block should run.
In that case, we can use a `while` loop.
It repeats the indented code while the expression is `True`.

```python
choice = -1
while choice < 1 or choice > 10:
    choice = int(input("Enter a number from 1 to 10: "))
```

## List/Dictionary Comprehension

Python has a handy feature that let's us build lists and dictionaries
from compressed `for` loops.
We basically stick a `for` loop inside our brackets (for lists) or curly braces (for dictionaries):

```python
my_values = range(10)

squared = [x**2 for x in my_values]
print(squared)

names = ["Matthew", "Sam", "Emma"]
name_length = {name: len(name) for name in names}
print(name_length)

wins = {"NYA": 84, "LAN": 101}
win_pct = {team: wins / 162 for team, wins in wins.items()}
# The `.items()` method of a dictionary returns an iterable
# where the elements are tuples of each (key, value) pair 
# in the dictionary.
print(win_pct)
```

This can be confusing at first but is very powerful.

<aside>
<div>
<p>An advanced use of list comprehension is "flat mapping" a list of lists&mdash;turning
a nested list into a single list:</p>
<pre class="highlight"><code class="language-python">grid = [["0", "1"], ["2", "3"]]
flattened = [x for row in grid for x in row]
print(flattened)
</code></pre>
</div>
</aside>

## Functions
Functions let us group code into a reusable chunk. Each function has a name and a list of arguments representing external values we can provide the function when it starts.

```python
def compute_woba(ubb, hbp, b1, b2, b3, hr, ab, bb, ibb, sf):
    numerator = (
        0.690 * ubb + 0.722 * hbp + 0.888 * b1
        + 1.271 * b2 + 1.616 * b3 + 2.101 * hr
    )
    denominator = ab + bb - ibb + sf + hbp
    return numerator / denominator
```

The return line determines what value is given as the function’s output.

We use functions by calling them with values for each argument. We can assign the returned value to a variable.

```python
woba = compute_woba(29, 20, 93, 27, 5, 15, 557, 32, 3, 3)
print(woba)
```

Sometimes it helps to specify the arguments as keyword arguments:

```python
woba = compute_woba(
  ubb=29,
  hbp=20,
  b1=93,
  b2=27,
  b3=5,
  hr=15,
  ab=557,
  bb=32,
  ibb=3,
  sf=3
)
print(woba)
```

The keyword arguments don’t have to be in a specific order. The function itself works exactly the same.

## Classes
Sometimes a group of variables and functions go together. A class let’s us package them together in a reusable way. We won’t need classes that often, but here’s an example:

```python
class StatCalculator:
    def __init__(self, name, ab, b1, b2, b3, hr, bb, ibb, so, hbp, sf):
        super().__init__()
        self.name = name
        self._ab = ab
        self._b1 = b1
        self._b2 = b2
        self._b3 = b3
        self._hr = hr
        self._bb = bb
        self._ibb = ibb
        self._so = so
        self._hbp = hbp
        self._sf = sf
    def get_woba(self): 
        numerator = (
            0.690 * (self._bb - self._ibb)
            + 0.722 * self._hbp + 0.888 * self._b1
            + 1.271 * self._b2 + 1.616 * self._b3
            + 2.101 * self._hr
        )
        denominator = self._ab + self._bb - self._ibb + self._sf + self._hbp
        return numerator / denominator
```
This is a template that specifies what a `StatCalculator` is. We can create multiple `StatCalculator` instances or objects from this template. Each instance is independent. They could represent `StatCalculator`s for different players.

Notice that each function has `self` as the first argument. This `self` is a reference to the data for a given instance (like a player). It’s a scratchpad we can use to store variables. Variables inside `self` are called attributes.

Functions inside classes are called methods. Our StatCalculator class has two methods.
The `__init__` method is called when we create a new instance, like for a new player. We take all the arguments and assign them as attributes in self. We can use these attributes in other methods. Our `get_woba` method uses the attributes to compute wOBA.

Here’s how we use our class:

```python
andres_gimenez = StatCalculator(
    "Andres Gimenez", 557, 93, 27, 5, 15, 32, 3, 122, 20, 3
)
```

This automatically calls our `__init__` method with the arguments we pass in.

```python
print(andres_gimenez.get_woba())
```

Notice that we don’t have to provide an argument for `self`. That’s because Python knows to fill in the `self` with the scratchpad for each instance.
Some attributes we gave a name that started with an underscore. We use this to mark that they shouldn’t directly access those attributes. The `name` attribute doesn’t have this underscore, so accessing it is expected. 

```python
print(andres_gimenez._bb)   # Works, but not encouraged
print(andres_gimenez.name)
```

## Using Libraries
We will use a few libraries (or “packages”) to load and work with data. All the libraries we need should already be installed in Google Colab. To use them, we import them:

```python
import numpy
```

Sometimes we want to use a short name to reference a library:

```python
import numpy as np
```

We can also import specific classes or methods from a library:

```python
from sklearn.linear_model import LinearRegression
```

## Data Formats
The most common data format we will use is Comma Separate Values (CSV). CSV files are an easy way to store tabular data. For example, here is a table of data:

|Name|Phone Number|Email|
|-|-|-|
|Matthew|000-111-2222|someone@example.com
|Seth|111-222-3333|other@job.com

Here is the same table in CSV:

```
Name,Phone Number,Email
Matthew,000-111-2222,someone@example.com
Seth,111-222-3333,other@job.com
```

