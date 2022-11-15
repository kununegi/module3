function makeCounter() {
    let count = 0;
  
    function counter() {
      return count++;
    }
    counter.increment = () => count = count+5;
  
    counter.set = value => count = value;
  
    counter.decrease = () => count = count-5;
  
    return counter;
  } 
  let myCounter = makeCounter();
  myCounter.set(80);
  myCounter.decrease()
  myCounter();
  // myCounter.increment()
  console.log(myCounter())
  