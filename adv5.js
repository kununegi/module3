const prompt = require("prompt-sync")()
function askPassword(ok, fail){
    let password = prompt("Password?",'');
    if (password == "rockstar"){
        ok()}
        else {
            fail()
        };
}

let user = {
    name : "john",
    login (result){
        console.log(this.name + (result ? 'logged In' :'failed to log In'));
    }
};

askPassword(()=> user.login(true), () => user.login(false));