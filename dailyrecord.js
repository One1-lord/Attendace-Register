
let workers=[""]

let workerArrived =()=>{
    workers.push()
}
const today = new Date();
let month= today.getMonth();
let day = today.getDate();
let hour = today.getHours();
let minutes = today.getMinutes();


let realTime = hour.toString() + ":" + minutes.toString();


let workerEntry=()=>{
    let name = document.getElementById("entry").value;
    
    

    document.getElementById("display").innerHTML =
        workers.map(()=>{

      return `<li>${name} arived at ${realTime}</li>`;
        }
    
        )
};

let workerExit=()=>{
    let name = document.getElementById("exit").value;
    
    

    document.getElementById("display2").innerHTML =
        workers.map(()=>{

      return `<li>${name} left at ${realTime}</li>`;
        }
    
        )
};
