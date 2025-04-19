const prompt = require("prompt-sync")();


// data.name=name
// data.email=email

// function Users(){
    let users=[]
    for(i=0;i<=users.length;i++){
        
        let name=prompt('Enter your name: ')
        let email=prompt('Enter your email: ')
        let data={name:name,email:email,}
        users[users.length]=data
        console.log(users);
        // break
    }
    
// }
// Users()
