
let workers=[]
let worker = {}

let workerArrived =()=>{
    workers.push()
}


let workerEntry=()=>{
  const today = new Date();
  let hour = today.getHours();
  let minutes = today.getMinutes();
  
  
  let realTime = hour.toString() + ":" + minutes.toString();
  
    let name = document.getElementById("input").value;

    worker.name = name;
    worker.realTime = realTime

    workers.push(worker)
    document.getElementById("input").value = "";

    document.getElementById("display").innerHTML =
        workers.map((worker)=>{

      return `<li>${worker.name} arived at ${worker.realTime}</li>`;
        }
    
        )

        worker = {}
};

let workerExit=()=>{
  let name = document.getElementById("input").value;
  
  const today = new Date();
  let hour = today.getHours();
  let minutes = today.getMinutes();
  
  
  let realTime = hour.toString() + ":" + minutes.toString();
  
    

    worker.name = name;
    worker.realTime = realTime

    
  if (workers.indexOf(name) > -1) {

    workers.push(worker)
    document.getElementById("input").value = "";

    document.getElementById("display2").innerHTML =
        workers.map((worker)=>{

      return `<li>${worker.name} left at ${worker.realTime}</li>`;
        }
    
        )

        worker = {}
}else {}
;}
