## Answers to Questions

### 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
=> getElementById is works for only one element and the id should be unique. It returns only one item.
=> getElementByClassName is works for same type of various element and we can use the same class in various element. It returns like an array.
=> querySelector is used for both (#id) and (.class). It returns only the first matching elements.
=> querySelectorAll is also used for both (#id) and (.class). But it returns all the matching elements.
### 2. How do you create and insert a new element into the DOM?
=> 1. create element
const div = document.createElement("div");

 2. add content
div.innerText = "Hello developers";

 3. add class
div.classList.add("box");

 4. insert into DOM
document.body.appendChild(div);
### 3. What is Event Bubbling? And how does it work?
=> Event bubbling is a behavior where event goes downward to upward.
=> Event goes from child-parent-grandparent-document.
### 4. What is Event Delegation in JavaScript? Why is it useful?
=> Event delegation is a function where parent can handle child by event listener.
=> It is useful because one can handle dynamic element
### 5. What is the difference between preventDefault() and stopPropagation() methods?
=> PreventDefault() stops browser default action.
=> stopPropagation() stops the event goes to the parents. It stops the event bubbling.
---


**Technology Stack:**
- HTML
- CSS (Vanilla/Tailwind/DaisyUI)
- JavaScript (Vanilla)


--- 

## What to submit: 

1. GitHub Repository Link: https://ssdevcmd.github.io/my-fourth-assignment/
2. Live Site Link: 
