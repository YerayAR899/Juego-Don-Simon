let state= "press-key";
let patron= [];

const start=document.getElementById('comienzaJuego');
let level=0;
const red=document.getElementById('rojo');
const green=document.getElementById('verde');
const blue=document.getElementById('azul');
const yelow=document.getElementById('amarillo');
let button=[red,green,blue,yelow];
let indexPatron=0


function starGame(){
 
   if (state =="press-key" ){
    newLevel()
   }
 
}

function botonInicio(){
    level= level+1;
    start.innerText='Nivel '+level;
    let nextColor=Math.floor(Math.random()*4);
    let nextButton=button[nextColor];
    glitterRed(nextButton)
    patron.push(nextButton);
    state="waitingPlayer"

}

function glitterRed(){
    button.classList.add('activoRojo')
    setTimeout(() => {e.target.classList.remove('activoRojo')
      
    }, 200);
}
function newLevel(){
    state="waitingPatron"
    setTimeout(()=>{
    {botonInicio()}
    },500);
    }
function buttonPress(event){
    if (state=="waitingPlayer"){
        let button=event.target
        if (button==patron[indexPatron]){
            indexPatron=indexPatron+1;
            newLevel();
        }
        else{
            state="Game-Over";
           document.getElementById("comienzaJuego").innerText="Game-Over";
        }
    }
}



function darRojo(e){
    e.target.classList.add('activoRojo')
  setTimeout(() => {e.target.classList.remove('activoRojo')
    
  }, 200);
}

function darAzul(e){
    e.target.classList.add('activoAzul')
    setTimeout(() => {e.target.classList.remove('activoAzul')
    
  }, 200);
 }

 function darVerde(e){
    e.target.classList.add('activoVerde')
    setTimeout(() => {e.target.classList.remove('activoVerde')
    
  }, 200);
 }
 function darAmarillo(e){
    e.target.classList.add('activoAmarillo')
    setTimeout(() => {e.target.classList.remove('activoAmarillo')
    
  }, 200);
 }

document.addEventListener('keypress', starGame);
document.addEventListener('click', darRojo);
document.addEventListener('click', darAzul);
document.addEventListener('click', darAmarillo);
document.addEventListener('click', darVerde);

red.addEventListener('click', buttonPress);
green.addEventListener('click', buttonPress);
blue.addEventListener('click', buttonPress);
yelow.addEventListener('click', buttonPress);
