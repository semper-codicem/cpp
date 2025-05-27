Here's a **comprehensive guide to building and running C++ projects using only the Command Line Interface (CLI)** — no external tools like IDEs or build systems (e.g., CMake, Makefiles) are used. This guide will take you from compiling **a single file** to managing **multi-file and modular projects** in a clean and efficient way.

---

# 🛠️ Building & Running C++ Projects via CLI (No External Tools)

**For Windows (CMD/PowerShell), Linux, or macOS Terminals**
**Compiler required:** `g++` (GCC) or `clang++`
(*Windows tip: install via [MSYS2](https://www.msys2.org/), [MinGW-w64](http://mingw-w64.org/), or WSL.*)

---

## 📚 Table of Contents

1. [Prerequisites](#prerequisites)
2. [Compile & Run a Simple Program](#simple)
3. [Compiling with Warnings & Standards](#warnings-standards)
4. [Using Header and Source Files](#headers-sources)
5. [Building Multi-File Projects](#multi-file)
6. [Manually Linking Object Files](#object-linking)
7. [Managing Project Folders](#project-structure)
8. [Debugging Tips via CLI](#debugging)
9. [Example: Building a Real Project](#real-project)
10. [Conclusion & Best Practices](#conclusion)

---

<a name="prerequisites"></a>

## 1. ✅ Prerequisites

You need a **C++ compiler** installed and accessible from the terminal.

Check with:

```sh
g++ --version
```

If you get an error, install:

* **Linux/macOS:** `sudo apt install g++` or `brew install gcc`
* **Windows:** Use WSL, MinGW, or MSYS2.

---

<a name="simple"></a>

## 2. 🧁 Compile & Run a Simple Program

**main.cpp**

```cpp
#include <iostream>
int main() {
    std::cout << "Hello, CLI!" << std::endl;
    return 0;
}
```

### Compile

```sh
g++ main.cpp -o main
```

### Run

```sh
./main        # Linux/macOS
main.exe      # Windows
```

---

<a name="warnings-standards"></a>

## 3. ⚙️ Compile with Warnings & Standards

Add useful flags:

```sh
g++ -Wall -Wextra -std=c++17 main.cpp -o main
```

* `-Wall`: basic warnings
* `-Wextra`: extra useful warnings
* `-std=c++17`: compile with C++17 standard (adjust to `c++20`, etc.)

---

<a name="headers-sources"></a>

## 4. 📦 Using Header and Source Files

**project layout:**

```
project/
├── main.cpp
├── math.hpp
└── math.cpp
```

### math.hpp

```cpp
#pragma once
int add(int a, int b);
```

### math.cpp

```cpp
#include "math.hpp"
int add(int a, int b) {
    return a + b;
}
```

### main.cpp

```cpp
#include <iostream>
#include "math.hpp"
int main() {
    std::cout << add(2, 3) << std::endl;
}
```

### Compile and Link

```sh
g++ main.cpp math.cpp -o main
```

---

<a name="multi-file"></a>

## 5. 📂 Building Multi-File Projects

Split compilation into **object files** to optimize rebuilds.

### Compile separately

```sh
g++ -c math.cpp       # -> math.o
g++ -c main.cpp       # -> main.o
```

### Link

```sh
g++ main.o math.o -o main
```

You can now recompile only changed files, e.g., just `math.cpp` if math logic changes.

---

<a name="object-linking"></a>

## 6. 🧱 Manually Linking Object Files

This works well for large projects.

```sh
g++ -c file1.cpp   # file1.o
g++ -c file2.cpp   # file2.o
g++ file1.o file2.o -o my_app
```

---

<a name="project-structure"></a>

## 7. 📁 Managing Project Folders

Example layout for a larger project:

```
my_project/
├── src/
│   ├── main.cpp
│   ├── app.cpp
│   └── app.hpp
├── build/
└── bin/
```

### Build steps:

1. Compile all `.cpp` in `src/`:

```sh
g++ -c src/app.cpp -o build/app.o
g++ -c src/main.cpp -o build/main.o
```

2. Link to binary:

```sh
g++ build/*.o -o bin/my_project
```

3. Run:

```sh
./bin/my_project
```

---

<a name="debugging"></a>

## 8. 🐞 Debugging Tips via CLI

Use debug symbols:

```sh
g++ -g -o app main.cpp
```

Run with GDB (GNU Debugger):

```sh
gdb ./app
```

Inside GDB:

```
(gdb) break main
(gdb) run
(gdb) next
(gdb) print variable
```

---

<a name="real-project"></a>

## 9. 🧪 Example: Real Project (CLI Calculator)

### Structure

```
calculator/
├── main.cpp
├── operations.cpp
└── operations.hpp
```

**operations.hpp**

```cpp
#pragma once
int add(int, int);
int subtract(int, int);
```

**operations.cpp**

```cpp
#include "operations.hpp"
int add(int a, int b) { return a + b; }
int subtract(int a, int b) { return a - b; }
```

**main.cpp**

```cpp
#include <iostream>
#include "operations.hpp"
int main() {
    int a = 10, b = 4;
    std::cout << "Add: " << add(a, b) << "\n";
    std::cout << "Sub: " << subtract(a, b) << "\n";
}
```

### Build and Run

```sh
g++ -c operations.cpp
g++ -c main.cpp
g++ main.o operations.o -o calculator
./calculator
```

---

<a name="conclusion"></a>

## 🏁 Conclusion & Best Practices

### ✅ Best Practices

* Always compile with `-Wall -Wextra -std=c++20` or later.
* Organize source (`.cpp`) and header (`.hpp`) files cleanly.
* Use separate compilation for multi-file projects.
* Add `-g` for debug builds and `-O2` or `-O3` for release.
* No Makefiles needed for small projects — use scripts if needed (`build.sh`, `build.bat`).

---

Would you like a Bash script to automate CLI compilation, or a template project zip to get started quickly?
