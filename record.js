
  const today = new Date();
  let hour = today.getHours();
  let minutes = today.getMinutes();  
  
let workerName = document.getElementById("input").value;
let arivalTime = hour.toString() + ":" + minutes.toString();
let departureTime = hour.toString() + ":" + minutes.toString();

let workers=[]
let workers1=[]
let worker={}

let welcomeWorker=()=>{
    if (typeof workerName =="string") {  

  const today = new Date();
  let hour = today.getHours();
  let minutes = today.getMinutes();

worker.workerName = document.getElementById("input").value;
worker.arivalTime = hour.toString() + ":" + minutes.toString();

    workers.push(worker);

    document.getElementById("display").innerHTML =
        workers.map((worker)=>{

      return `<li>${worker.workerName} arrived at ${worker.arivalTime}</li>`;
        }
    
   ) 
   document.getElementById("input").value="";
   worker={};
  }
   }


let exitWorker=()=>{
    if (typeof workerName =="string") {  

  const today = new Date();
  let hour = today.getHours();
  let minutes = today.getMinutes();

worker.workerName = document.getElementById("input").value;
worker.departureTime = hour.toString() + ":" + minutes.toString();

    workers1.push(worker);
    
    document.getElementById("display2").innerHTML =
        workers1.map((worker)=>{

      return `<li>${worker.workerName} left at ${worker.departureTime}</li>`;
        }
    

)}
document.getElementById("input").value="";
worker={};
}

