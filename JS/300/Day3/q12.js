/** Which of the following resolves when all promises are fulfilled, or rejects as soon as one promise is rejected? */

/**
 * a. Promise.race()
 * b. Promise.any()
 * c. Promise.all()
 * d. Promise.resolve()
 */

// Promise.all() is useful if we want the execution to wait until all promises resolve (or any fail)

// EXAMPLE
const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((res, rej) => {
  setTimeout(res, 2000, 'foo')
});

Promise.all([promise1, promise2, promise3])
  .then(val => {
    console.log("PROMISE ALL RETURNS", val);
  });
