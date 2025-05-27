Great! Below are two things to help you get started quickly:

---

## 📜 1. Bash Script for Building C++ Projects

Save this as `build.sh` inside your C++ project folder.

```bash
#!/bin/bash

# CONFIGURATION
SRC_DIR="src"
BUILD_DIR="build"
BIN_DIR="bin"
OUTPUT_NAME="app"

# CREATE FOLDERS IF NEEDED
mkdir -p "$BUILD_DIR"
mkdir -p "$BIN_DIR"

# COMPILE .cpp FILES INTO .o OBJECTS
echo "Compiling source files..."
for file in $SRC_DIR/*.cpp; do
    filename=$(basename "$file" .cpp)
    g++ -std=c++20 -Wall -Wextra -g -c "$file" -o "$BUILD_DIR/$filename.o"
    if [ $? -ne 0 ]; then
        echo "Compilation failed on $file"
        exit 1
    fi
done

# LINK OBJECT FILES
echo "Linking..."
g++ "$BUILD_DIR"/*.o -o "$BIN_DIR/$OUTPUT_NAME"
if [ $? -eq 0 ]; then
    echo "Build succeeded: $BIN_DIR/$OUTPUT_NAME"
else
    echo "Linking failed"
fi
```

### How to use it:

1. Place all `.cpp` and `.hpp` files in the `src/` folder.
2. Run the script:

```bash
chmod +x build.sh
./build.sh
```

3. The binary will be placed in `bin/app`.

---

## 📁 2. Project Template Structure (Zip-ready)

```
my_cpp_project/
├── build.sh
├── src/
│   ├── main.cpp
│   ├── app.cpp
│   └── app.hpp
├── build/
└── bin/
```

### Sample `main.cpp`

```cpp
#include <iostream>
#include "app.hpp"

int main() {
    say_hello();
    return 0;
}
```

### Sample `app.hpp`

```cpp
#pragma once

void say_hello();
```

### Sample `app.cpp`

```cpp
#include <iostream>
#include "app.hpp"

void say_hello() {
    std::cout << "Hello from app module!" << std::endl;
}
```

---

Would you like me to generate a downloadable `.zip` with this full project?
