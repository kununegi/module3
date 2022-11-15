function makeCounter() {
    let count = 0;
    return function() {
    return count++;
    };
    }
    let counter = makeCounter();
    let counter2 = makeCounter();
    console.log( counter() ); // 0
    console.log( counter() );
    console.log( counter() ); // 1
    console.log( counter2() ); // ?
    console.log( counter2() ); // ?