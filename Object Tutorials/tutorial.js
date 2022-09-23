////////////////getting random number//////////
/*
function getRandomNumber(){
    const randomNumber= Math.floor(Math.random()*12) +1;  
    return randomNumber
}
const rollDiece = getRandomNumber();
console.log(getRandomNumber());

///////////////get multiple returns/////////////////
function isFeildEmpty(){
    const field= document.querySelector("#info");
    if (field.value === ""){ ///if (!field.value) //produces the same result
        return true 
    }else{ return false}
};

const fieldtest= isFeildEmpty();

if (fieldtest === true ){
    alert("Pleae provide your information")

}
console.log(fieldtest)
*//////////passig information to a function//////

function goToTheShop(){
    let buy =document.getElementById("info").value;
    let buy2 =document.getElementById("info1").value;

    alert(`your ${buy} is on the way and we have added some ${buy2}`) 
}
/*
function getRandomNumber(){
    let number =document.getElementById("info").value;
    const randomNumber= Math.floor(Math.random()* number) +1;  
    alert(randomNumber) 
}
const rollDiece = getRandomNumber();
console.log(getRandomNumber());
*/
