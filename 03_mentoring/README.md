# Practice Promises
A Promise is a mechanism frequently used in JavaScript to handle asynchronous processes; that is, promises are how we reason about the business of waiting.

Actually promises are simple state machines with three possible states:

- Pending
- Resolved
- Rejected

Resolved and rejected are ***final*** states, which means that once a promise gets to one of these states, it absolutely cannot go to any other state. Pending can go either way.  
A promise that is either resolved or rejected may also have a ***payload***, a value that it carries.  It's a little like an array that can only contain one value.  It's that the value be `undefined`, but that's still a value.

In this part of exercise we need to make a promise and not interested on consuming the return value.

## Exercise 1

1. Use [Promise.resolve(value)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/resolve) and resolve the value 'Resolve value'. 

2. Use [Promise.reject(error)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/reject) and reject the value /'Reject value/'.


## Exercise 3

You have the outline of a function `makePromiseWithConstructor(itShouldResolve)`

Use the [Promise constructor](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) to create a promise that will:

* resolve if itShouldResolve is truthy
* reject if itShouldResolve is falsy

## Exercise 4

This is a common use of the Promise constructor. If you want to simulate waiting for a value, a common technique is to create a function like the following.  It simply accepts a value, and a delayInMs, then returns a promise that will resolve with that value after that delay.
