// Goal Parser Interpretation

let command = "G()()()()(al)"

var interpret = function (command) {
    let newStr = ""
    for (let i = 0; i < command.length; i++) {
        if(command[i] == "(" && command[i+1] == ")"){
            newStr+= "o"
        }else if(command[i] == ")" || command[i] == "("){
            continue;
        }else{
            newStr+= command[i]
        }
    }
    return newStr;
};

console.log(interpret(command));