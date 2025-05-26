# Syntax
The C++ syntax is the set of rules that defines the combinations of symbols that are considered to be correctly structured programs in the C++ programming language. It includes keywords, operators, data types, control structures, and more.
# Basic Syntax
C++ syntax is similar to C, with some enhancements. Here are some basic elements:

- **Comments**: Use `//` for single-line comments and `/* ... */` for multi-line comments.
- **Variables**: Declare variables with a type, e.g., `int x = 10;`.
- **Data Types**: Common data types include `int`, `float`, `double`, `char`, and `bool`.
- **Operators**: C++ supports arithmetic (`+`, `-`, `*`, `/`), relational (`==`, `!=`, `<`, `>`), logical (`&&`, `||`, `!`), and bitwise operators (`&`, `|`, `^`, `~`).
- **Control Structures**: Use `if`, `else`, `switch`, `for`, `while`, and `do-while` for control flow.
# Example Code
```cpp
#include <iostream>
using namespace std;
int main() {
    // Declare a variable
    int number = 5;

    // Conditional statement
    if (number > 0) {
        cout << "Number is positive." << endl;
    } else {
        cout << "Number is not positive." << endl;
    }

    // Looping through numbers
    for (int i = 0; i < number; i++) {
        cout << "Count: " << i << endl;
    }

    return 0;
}
```
# Functions
Functions in C++ are blocks of code that perform a specific task and can be reused. They can take parameters and return values.
# Function Syntax
```cpp
return_type function_name(parameter_list) {
    // function body
    return value; // optional
}
```