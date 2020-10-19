console.log('start') //同步

setTimeout(() => {
    console.log('setTimeout') //宏任务
}, 0)

new Promise((resolve) => {
    console.log('promise') //同步
    resolve()
})
    .then(() => {
        console.log('then1') //微任务
    })
    .then(() => {
        console.log('then2') //微任务
    })

console.log('end') //同步 






process.nextTick(() => { console.log(111); });

setTimeout(() => { console.log(222); }, 0);
setImmediate(() => { console.log(333); });

const promise = Promise.resolve();

promise
    .then(() => {
        console.log(444);
        process.nextTick(() => { console.log(555); });
        setTimeout(() => { console.log(666); }, 0);
    })
    .catch(() => { console.log(777); })
    .then(() => {
        console.log(888);
        setImmediate(() => { console.log(999); });
    })
    .catch(() => { console.log(101010); })





async function async1() {
    console.log('async1 start');
    await async2();
    console.log('async1 end')
}
async function async2() {
    console.log('async2')
}
console.log('script start');
setTimeout(() => {
    console.log('setTimeout')
}, 0);
async1();
new Promise((resolve) => {
    console.log('promise1');
    resolve()
}).then(() => {
    console.log('promise2')
});
console.log('script end')



setTimeout(() => {
    console.log(4);
}, 0);

new Promise(resolve => {
    console.log(1);
    for (let i = 0; i < 10000; i++) {
        i == 9999 && resolve();
    }
    console.log(2)
}).then(() => {
    console.log(5)
})

console.log(3)





// 1  2  9 4 10  13 15 16 5 6 8 7








then(function () { //微1
    
    new Promise(function () {
    }).then(function () {  // wei  a
        console.log('aaaa');
    });

    setTimeout(function () {  //宏1
        console.log(5);
    }, 0);

    setTimeout(function () {  //宏2
        (async function () {
            console.log(6);
            return function () {
                console.log(7);
            };
        })().then(function (fn) {
            console.log(8);
            fn();
        });
    }, 0);
});


then(function () {  // 微2
    new Promise(function (resolve, reject) {

        console.log("bbb");
        reject();
    }).catch(function () { // 微 3
        console.log(13);
    });
});






1 

console.log(1); //
new Promise((res, rej) => {
    console.log(2); //
    res();
}).then(() => {
    console.log(3); //
    Promise.resolve().then(() => {
        console.log(5);
        setTimeout(function () {
            console.log(6); //
            Promise.resolve().then(function () {
                console.log(7);
            });
            setTimeout(function () {
                console.log(8);
            }, 0);
        }, 0);
    });
}).then(() => {
    console.log(4);
});

new Promise((res) => {
    console.log(19); //
    setTimeout(() => {
        console.log(20); //
    }, 0);
});
Promise.resolve().then(() => {
    setTimeout(() => {
        Promise.resolve().then(() => {
            console.log(12);
        });
        console.log(13); //
    }, 0);
});
setTimeout(() => {
    console.log(9); //
    new Promise((res) => {
        res();
        console.log(10);
    }).then(() => {
        console.log(11);
    });
});
setTimeout(() => {
    setTimeout(() => {
        setTimeout(() => {
            Promise.resolve().then(() => {
                console.log(14);
            });
            console.log(15);
        }, 0);
        console.log(16);
    }, 0);
    console.log(17); //
}, 0);