//generating random password
function generate(){

    //password length and complexity
    let complexity = document.getElementById("slider").value;

    //Password values
    let values = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()_+";

    let password = "";

    //loop to chose pw characters
    for(var i = 0; i <= complexity; i++){
        password = password + values.charAt(Math.floor(Math.random() * Math.floor(values.length - 1)));
    }

    //add pw to text box
    document.getElementById("display").value = password;

    //add pw to generated pw section
    document.getElementById("lastPasswords").innerHTML += password + "<br/>";
}

//length display of 20
document.getElementById("length").innerHTML = "Length: 20";

document.getElementById("slider").oninput = function(){
    if(document.getElementById("slider").value > 0){
        document.getElementById("length").innerHTML = "Length" + document.getElementById("slider").value;
    }
    else{ 
        document.getElementById("length").innerHTML = "Length: 1";
    }
}

//copy clip board function
function copyPassword(){
    document.getElementById("display").select();

    document.execCommand("copy");

    alert("Password copied successfully");
}