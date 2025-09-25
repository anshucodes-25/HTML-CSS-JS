function generate(){
    const lowercase = "abcdefghijklmnopqrstuvwxyz";
    const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const symbol = "!@#$%^&*()_+=-";
    const numbers = "0123456789";

    const allChar = lowercase + uppercase + symbol + numbers;

    let password = "";
    let length = 8;

    password += uppercase[Math.floor(Math.random() * uppercase.length)];
    password += lowercase[Math.floor(Math.random) * lowercase.length];
    password += symbol[Math.floor(Math.random() * symbol.length)];
    password += numbers[Math.floor(Math.random() * numbers.length)]

    for(let i = 0; i<length; i++){
        password += allChar[Math.floor(Math.random() * allChar.length)];
    }

    document.getElementById("passwordField").value = password;
}

function reset(){
    document.getElementById("passwordField").value = " "
}