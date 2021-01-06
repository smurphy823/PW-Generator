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
    document.getElementById("lastNums").innerHTML += password + "<br/>";
}