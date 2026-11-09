# JavaScript | Variables & Data Types

> Exploring the fundamentals of JavaScript through practical coding exercises.

![JavaScript](https://img.shields.io/badge/Language-JavaScript-yellow?style=flat-square&logo=javascript&logoColor=black)
![Status](https://img.shields.io/badge/Status-Completed-success?style=flat-square)
![Learning](https://img.shields.io/badge/Learning-In%20Progress-blue?style=flat-square)

## Overview

This repository contains my practice work on two fundamental concepts of JavaScript: **Variables** and **Data Types**.

The exercises focus on understanding how JavaScript stores information, how variables behave, and how different types of values are represented in code.

Rather than just learning definitions, I explored these concepts by writing examples and observing their output using `console.log()`.

## What I Explored

<details>
<summary><strong>01 — Variable Declarations</strong></summary>

JavaScript offers three keywords for declaring variables.

| Keyword | Scope | Reassignment | Redeclaration |
|:---:|:---:|:---:|:---:|
| `var` | Function | Yes | Yes |
| `let` | Block | Yes | No |
| `const` | Block | No | No |

**Practical exercises included:**
- Declaring variables and assigning values.
- Storing different types of information.
- Understanding the difference between updating and redeclaring variables.
- Exploring block scope and function scope.

</details>

<details>
<summary><strong>02 — Primitive Data Types</strong></summary>

I practiced the following primitive data types:

| Type | Example |
|---|---|
| String | `"Talha"` |
| Number | `85.5` |
| Boolean | `true` |
| Undefined | `undefined` |
| Null | `null` |
| BigInt | `123456789n` |
| Symbol | `Symbol("rose")` |

</details>

<details>
<summary><strong>03 — Objects</strong></summary>

I also practiced creating JavaScript objects to organize related information into key-value pairs.

**Example:**

```javascript
let Team = {
    Leader: "Talha",
    T_members: 5,
    Members: ["Talha", "Ali", "Ahmed"],
    budget: 100000,
    headquarters: "Bahawalpur"
};

console.log(Team);
```

This exercise helped me understand how multiple values can be grouped into a single object.

</details>

## Code Preview

A small example from my practice:

```javascript
// Variable declaration
let name = "Talha";
let age = 20;
let percentage = 85.5;
let is_Student = true;

console.log(name);
console.log(age);
console.log(percentage);
console.log(is_Student);
```

**Console Output**

```text
Talha
20
85.5
true
```

## Project Structure

```text
javascript-variables-and-data-types/
│
├── script.js
└── README.md
```

| File | Description |
|---|---|
| `script.js` | JavaScript practice examples |
| `README.md` | Project documentation |

## Running the Code

**Requirements:** A browser console or Node.js.

Clone the repository:

```bash
git clone https://github.com/your-username/javascript-variables-and-data-types.git
```

Navigate into the folder:

```bash
cd javascript-variables-and-data-types
```

Run the JavaScript file:

```bash
node script.js
```

Alternatively, open the file in VS Code and run it using your preferred JavaScript environment.

## Key Learnings

- Understanding the purpose of `var`, `let`, and `const`.
- Learning how scope affects variable accessibility.
- Identifying JavaScript's primitive data types.
- Understanding objects and their properties.
- Practicing variable declarations and console output.

## Learning Progress

| Topic | Progress |
|---|---|
| Variables | Completed |
| Data Types | Completed |
| Operators | Upcoming |
| Conditional Statements | Upcoming |
| Loops | Upcoming |
| Functions | Upcoming |

---

**Next Step:** Continue exploring JavaScript fundamentals and apply these concepts in practical projects.

*Documenting my progress, one concept at a time.*

