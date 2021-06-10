
// Part A:
// Exercise 1

//1.
//Promise.resolve('Resolve Value')//.then(res=>{console.log(res)});
//2.
// Promise.reject('Reject Value')//.catch(err=>{console.log(err)});


/* // Exercise 2

//1. + 2.
function constructorPromise(cond) {
    let promise = new Promise(function (resolve, reject) {
        if (cond) {
            resolve('Success');
        } else {
            reject(new Error('Error'));
        }
        
    });

    return promise;
}

//test
constructorPromise(true)
    .then(res => console.log(res))
    .catch(err => { console.log(err.message) }); */


//3.
/* function constructorPromise(cond) {
    let promise = new Promise(function (resolve, reject) {
        setTimeout(() => {
            if (cond) {
                resolve('Success');
            } else {
                reject(new Error('Error'));
            }
        }, 3000)
        
    });

    return promise;
}

//test
constructorPromise(true)
    .then(res => console.log(res))
    .catch(err => { console.log(err.message) }); */



// Part B

// Exercise 1
//1.
//console.log(Promise.resolve('test'));
//2.
/* 
    Since the Promise is not consumed in line 60, therefore it return the Promise instance with pending state.
    If we consume the Promise instance, it will wait untill the state changed to fulfilled or rejected
*/


// Exercise 2
//1.
/* let promise = new Promise(function (resolve, reject) {
    setTimeout(() => {
        
        resolve('resolve value')
    }, 3000);
});

promise.then(res => console.log(res)); */


//2.
/* let promise = new Promise(function (resolve, reject) {
  setTimeout(() => {

      resolve("resolve value");
  }, 3000);
});

async function testPromise () {
    let result = await promise;
    console.log(result);
}

testPromise() */


// Part C

// Exercise 1
let promise_1 = new Promise(function (resolve, reject) {
    setTimeout(() => {
        resolve('1')
    }, 1000)
});

let promise_2 = new Promise(function (resolve, reject) {
    setTimeout(() => {
        resolve('2')
    }, 2000)
});

let promise_3 = new Promise(function (resolve, reject) {
    setTimeout(() => {
        resolve('3')
    }, 3000)
});

/* //chaining
promise_3.then((res3) => {
    console.log(res3);
    return promise_2
}).then((res2) => {
    console.log(res2);
    return promise_1
}).then((res1) => {
    console.log(res1);
})
 */


 let promise_3 = new Promise(function (resolve, reject) {
    setTimeout(() => {
        resolve('3')
    }, 3000);
}).then((res3) => {
    console.log(res3);
    
    //promise_2
    new Promise(function (resolve, reject) {
        setTimeout(() => {
            resolve('2')
        }, 2000);
    }).then((res2) => {
        console.log(res2);

        //promise_1
        new Promise(function (resolve, reject) {
            setTimeout(() => {
                resolve('1')
            }, 1000);
        }).then((res1) => {
            console.log(res1);

        })
    })
})  

