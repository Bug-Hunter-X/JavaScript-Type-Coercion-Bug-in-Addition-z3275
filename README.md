# JavaScript Type Coercion Bug
This repository demonstrates a common yet subtle bug in JavaScript related to type coercion during addition.  The `foo` function appears to perform simple addition, but it unexpectedly concatenates strings when a string is provided as input.

## Bug Description
The issue lies in JavaScript's automatic type conversion. When one operand is a string and the other is a number, JavaScript converts the number to a string before performing string concatenation instead of mathematical addition.

## Solution
The solution involves explicit type checking or conversion to ensure both operands are numbers before performing the addition operation.
