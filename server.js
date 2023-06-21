var objPeople = [
    {
        user: "admin",
        password: "admin",
        email: "admin@mail.com"
    },
    {
        user: "test",
        password: "test",
        email: "test@mail.com"
    }
]
function login(){
let user = document.getElementById("user").value;
let password = document.getElementById("password").value;

for(i = 0; i < objPeople.length; i++){
    if(user == objPeople[i].user && password == objPeople[i].password){
        window.location.href= "index.html";
        return
    }
    else {
        alert("datos incorrectos");
        return
    }
}
}
function signUp(){
    let registerUser = document.getElementById("newUser").value;
    let registerPassword = document.getElementById("newPassword").value;
    let registerEmail = document.getElementById("newEmail").value;

    var newUser = {
        user: registerUser,
        password: registerPassword,
        email: registerEmail
    };

    for(i = 0; i < objPeople.length; i++){
        if(registerUser == objPeople[i].user){
            alert("usuario ya en uso utiliza otro");
            return
        } else {
            alert("usuario registrado");
            window.location.href= "index.html";
            return
        }
    }
    // objPeople.push(newUser);
    objPeople.push(newUser);
    fs.writeFileSync('data.json', JSON.stringify(jsonData));
}
