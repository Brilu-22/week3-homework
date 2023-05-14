let users = ["Jim", "Mike", "Dave", "Josh", "Tim", "Jane", "Susan", "Haley","Steve", "Matthew", "John", "Spencer", "Stephan", "Mable", "Jacob", "Ruby", "Adam", "Bruce"];
let stevePresent = false; 

for(let i = 0; i < users.length; i++){
    if(users[i] === "Steve"){
        stevePresent = true;
    }
}

if(stevePresent === true){
    console.log("Yes, steve is present")
}else{
    console.log("No, steve is not present")
}

let computers = [600, 1000, 400, 300, 600, 200, 100, 400, 500];
let requiredPower = 3500; 
let totalPower = 0;

for(let i = 0; i < computers.length; i++ ){
    totalPower += computers[i];
    console.log(totalPower)
}

console.log("The total is:" + totalPower)

if(totalPower >= requiredPower){
    console.log("There is enough power!")
}else{
    console.log("There is not enough power!")
}

for(let i = 0; i < 100; i++){
    if(i % 2 !==0){
        console.log(i)
    }
}




