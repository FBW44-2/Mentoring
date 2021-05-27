# Practice Promises
A Promise is a mechanism frequently used in JavaScript to handle asynchronous processes; that is, promises are how we reason about the business of waiting.

Actually promises are simple state machines with three possible states:

- Pending
- Resolved
- Rejected

Resolved and rejected are ***final*** states, which means that once a promise gets to one of these states, it absolutely cannot go to any other state. Pending can go either way.  
A promise that is either resolved or rejected may also have a ***payload***, a value that it carries.  It's a little like an array that can only contain one value.  It's that the value be `undefined`, but that's still a value.

In this part of exercise we need to make a promise and not interested on consuming the return value.