---
title: C++ (CPP) Overview
description: An overview of C++, its features, and common use cases.
keywords: C++, programming language, object-oriented programming, STL, system software, application software, game development
sidebar_position: 1
slug: /fundamentals/cpp
---

# What is CPP?
# C++ (CPP) Overview
C++ (CPP) is a high-level programming language that is widely used for system and application software development. It is an extension of the C programming language, adding object-oriented features, which allows for better organization and management of complex software projects.
# Key Features of C++
- **Object-Oriented Programming (OOP)**: C++ supports classes and objects, enabling encapsulation, inheritance, and polymorphism.
- **Performance**: C++ is known for its high performance and efficiency, making it suitable for resource-intensive applications.
- **Standard Template Library (STL)**: C++ includes a powerful library of templates for data structures and algorithms, which promotes code reuse and efficiency.
- **Low-Level Manipulation**: C++ allows direct manipulation of hardware and memory, providing fine control over system resources.
# Common Use Cases
- **System Software**: Operating systems, device drivers, and embedded systems.
- **Application Software**: Desktop applications, games, and real-time simulations.
- **Game Development**: C++ is widely used in game engines and graphics programming due to its performance capabilities.
# Learning Resources
- **Books**: "The C++ Programming Language" by Bjarne Stroustrup, "Effective C++" by Scott Meyers.
- **Online Courses**: Platforms like Coursera, Udemy, and edX offer C++ courses ranging from beginner to advanced levels.
- **Documentation**: The official C++ documentation and resources like cppreference.com provide comprehensive information on language features and libraries.


# How it works
C++ works by compiling source code written in C++ into machine code that can be executed by a computer. The compilation process involves several steps:
1. **Preprocessing**: The preprocessor handles directives (like `#include` and `#define`) to prepare the code for compilation.
2. **Compilation**: The compiler translates the preprocessed code into assembly language.
3. **Assembly**: The assembler converts the assembly code into machine code, producing an object file.
4. **Linking**: The linker combines object files and libraries to create the final executable program.
# Example Code
```cpp
#include <iostream>
using namespace std;
class Animal {
public:
    virtual void speak() {
        cout << "Animal speaks" << endl;
    }
};
class Dog : public Animal {
public:
    void speak() override {
        cout << "Dog barks" << endl;
    }
};
int main() {
    Animal* animal = new Dog();
    animal->speak(); // Output: Dog barks
    delete animal;
    return 0;
}
```

