function printnumber(a, b){
    let timerid = setInterval(function(){
        console.log(a);
        if (a > b) {
            a--;
        }else if (b > a){
            a++;
        }else if ( a == b){
            clearInterval(timerid); 
        }
    }, 1000)
    

}printnumber(5,10);
    





// // let current = from;
// let timerid = setInterval(function(){
//     console.log(from);
//     if (from>to ){
//         from-- 
//     }else if(from<to) 
//         from++;
//      else {
    
    
//     (from == to){
//         clearInterval(timerid);
//     }}
//     // current++;
// }, 1000)
// }
// printnumber(15,10);