function delay(ms){
  return new Promise(function(resolve,reject){
      setTimeout(()=>resolve("pizza is Ready"),3000)
      })

}
 delay() .then((result) =>{console.log(result)})