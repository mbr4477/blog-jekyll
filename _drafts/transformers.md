---
title: Transformers
date: 2023-04-23
---

1. Tokenize the sequence
2. Add the positional encoding
3. Multiply all tokens by the same three matrices to generate the keys, values, and queries
4. For each item in the sequence
   1. Match the item’s query against all the keys to calculate weights at each position
   2. Use the weights for a weighted sum of the values for each position
   3. Add the input back to the value (residual connection)
   4. Send the result through a fully connected network (same for each item in the sequence)
5. Repeat for all the items in the sequence