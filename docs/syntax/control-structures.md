Here's a **comprehensive tutorial on C++ Control Structures**, progressing from fundamental concepts to advanced usage. This will help you master decision-making and flow control in C++ programs.

---

# 🔀 C++ Control Structures: From Fundamentals to Advanced

**Data Matters Series – Volume 2**
*A complete guide to program flow and decision-making in C++*

---

## 📚 Table of Contents

1. [Introduction](#introduction)
2. [Fundamentals](#fundamentals)

   * [What are Control Structures?](#what-are-control-structures)
   * [Sequential Flow](#sequential-flow)
   * [Conditional Statements](#conditional-statements)

     * [`if`, `else if`, `else`](#if-else-if-else)
     * `switch` Statement
   * [Loops](#loops)

     * `while` Loop
     * `do-while` Loop
     * `for` Loop
     * Range-based `for` Loop
3. [Intermediate Concepts](#intermediate-concepts)

   * [Break and Continue](#break-and-continue)
   * [Goto Statement](#goto-statement)
   * [Nested Control Structures](#nested-control-structures)
   * [Using `enum` with `switch`](#using-enum-with-switch)
4. [Advanced Topics](#advanced-topics)

   * [Loop Optimization Tips](#loop-optimization-tips)
   * [State Machines Using Switch](#state-machines-using-switch)
   * [Simulating Pattern Matching with `std::variant`](#simulating-pattern-matching-with-stdvariant)
   * [Structured Bindings and Range Loops (C++17)](#structured-bindings-and-range-loops-c17)
   * [Lambda in Control Structures (C++11/14/17/20)](#lambda-in-control-structures)
5. [Best Practices](#best-practices)
6. [Conclusion](#conclusion)

---

## 🔰 Introduction

Control structures are fundamental elements in C++ that determine the flow of execution in a program. They include decision-making (e.g., `if` statements), loops (`for`, `while`), and branching (`break`, `continue`, `goto`).

Mastery of control structures leads to clean, maintainable, and efficient code.

---

## 🧱 Fundamentals

### What are Control Structures?

Control structures allow a program to:

* **Make decisions** (`if`, `switch`)
* **Repeat actions** (`for`, `while`, `do-while`)
* **Branch execution** (`break`, `continue`, `goto`)

---

### Sequential Flow

C++ executes statements **line by line**, unless a control structure alters the flow.

```cpp
int a = 10;
a += 5;
std::cout << a; // Output: 15
```

---

### Conditional Statements

#### `if`, `else if`, `else`

```cpp
int x = 10;

if (x > 0) {
    std::cout << "Positive";
} else if (x < 0) {
    std::cout << "Negative";
} else {
    std::cout << "Zero";
}
```

##### Notes:

* `if` evaluates a Boolean expression.
* Braces `{}` are optional for single-line blocks, but **always recommended**.

---

#### `switch` Statement

```cpp
int choice = 2;

switch (choice) {
    case 1:
        std::cout << "Option 1";
        break;
    case 2:
        std::cout << "Option 2";
        break;
    default:
        std::cout << "Invalid";
}
```

##### Notes:

* Works with `int`, `char`, `enum`, not `float` or `std::string`.
* `break` prevents fall-through.
* Use `default` for handling unknown cases.

---

### Loops

#### `while` Loop

```cpp
int i = 0;
while (i < 5) {
    std::cout << i << " ";
    i++;
}
```

#### `do-while` Loop

Executes the body **at least once**.

```cpp
int i = 0;
do {
    std::cout << i << " ";
    i++;
} while (i < 5);
```

#### `for` Loop

```cpp
for (int i = 0; i < 5; ++i) {
    std::cout << i << " ";
}
```

#### Range-based `for` Loop (C++11+)

```cpp
std::vector<int> nums = {1, 2, 3, 4};
for (int n : nums) {
    std::cout << n << " ";
}
```

Use `const` or `auto` for better flexibility:

```cpp
for (const auto& item : container) { ... }
```

---

## ⚙️ Intermediate Concepts

### Break and Continue

#### `break`: Exits the innermost loop or switch.

```cpp
for (int i = 0; i < 10; ++i) {
    if (i == 5) break;
    std::cout << i << " ";
}
```

#### `continue`: Skips current iteration.

```cpp
for (int i = 0; i < 10; ++i) {
    if (i % 2 == 0) continue;
    std::cout << i << " ";
}
```

---

### `goto` Statement

Avoided in modern C++ but exists:

```cpp
goto skip;
std::cout << "This won’t print";

skip:
std::cout << "Skipped ahead";
```

⚠️ **Use only when absolutely necessary** (e.g., error handling in legacy code).

---

### Nested Control Structures

Control structures can be nested:

```cpp
for (int i = 0; i < 3; ++i) {
    if (i % 2 == 0) {
        std::cout << i << " is even";
    }
}
```

---

### Using `enum` with `switch`

```cpp
enum Direction { UP, DOWN, LEFT, RIGHT };

Direction d = LEFT;

switch (d) {
    case UP: std::cout << "Up"; break;
    case DOWN: std::cout << "Down"; break;
    case LEFT: std::cout << "Left"; break;
    case RIGHT: std::cout << "Right"; break;
}
```

---

## 🧠 Advanced Topics

### Loop Optimization Tips

* Avoid expensive function calls in loop headers.
* Prefer pre-increment (`++i`) in loops for iterators.
* Use `reserve()` in vectors to avoid reallocations in loop insertions.

---

### State Machines Using Switch

```cpp
enum State { START, RUNNING, STOP };

State state = START;

while (true) {
    switch (state) {
        case START: 
            std::cout << "Starting...\n"; 
            state = RUNNING; 
            break;
        case RUNNING:
            std::cout << "Running...\n"; 
            state = STOP;
            break;
        case STOP:
            std::cout << "Stopped.\n"; 
            return 0;
    }
}
```

---

### Simulating Pattern Matching with `std::variant` (C++17)

```cpp
#include <variant>
#include <iostream>

std::variant<int, float, std::string> data = "hello";

std::visit([](auto&& val) {
    std::cout << val;
}, data);
```

---

### Structured Bindings and Range Loops (C++17)

```cpp
std::map<int, std::string> m = {{1, "one"}, {2, "two"}};

for (auto& [key, value] : m) {
    std::cout << key << ": " << value << "\n";
}
```

---

### Lambda in Control Structures

C++11+ supports lambdas inside or as part of control logic:

```cpp
auto isEven = [](int x) { return x % 2 == 0; };

for (int i = 0; i < 10; ++i) {
    if (isEven(i)) continue;
    std::cout << i << " ";
}
```

---

## ✅ Best Practices

* Always use `{}` braces even for single-line blocks.
* Minimize nesting by returning early in functions.
* Prefer `switch` for many discrete cases over long `if-else` chains.
* Avoid `goto` unless working in low-level or legacy code.
* Use range-based `for` and STL algorithms (`std::for_each`, `std::transform`) for cleaner loops.

---

## 🏁 Conclusion

Control structures are the backbone of any C++ program. From basic `if` statements to advanced control flow using state machines and lambdas, a solid understanding enables you to write concise, efficient, and robust code.

Understanding the strengths and caveats of each structure gives you the flexibility to model complex logic while maintaining readability and performance.
