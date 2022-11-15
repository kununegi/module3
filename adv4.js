function debounce(func, ms) {
    let timeout;
    return function () {
      clearTimeout(timeout);
      timeout = setTimeout(() => func.apply(this, 
        arguments), ms);
    }}
  
  let f = debounce(console.log, 1000);
  f("a"); //this was called first //in the debounce ready to be called after 1 sec
  
  setTimeout( () => f("b"), 200); //this was called instantly after f"a"
  setTimeout( () => f("c","d"), 500); //this was called instantly as well
  
  
  setInterval(console.log, 1000, "hello")
  
  console.log("hello")
  