
 //window.onload=console.log("Hola a todos")
 
 
 const NUMERO_MAXIMO=4
 const NUMERO_MINIMO=1
 
 
let auxArray = [];
let auxArray2=[];


for (let i=1;i<=10;i++){
    const numeroAleatorio=parseInt(Math.floor((Math.random() * (NUMERO_MAXIMO - NUMERO_MINIMO + 1)) + NUMERO_MINIMO));
    auxArray.push(numeroAleatorio);
}

for (let j=1;j<=10;j++){
    const numeroAleatorio2=parseInt(Math.floor((Math.random() * (NUMERO_MAXIMO - NUMERO_MINIMO + 1)) + NUMERO_MINIMO));

    auxArray2.push([numeroAleatorio][numeroAleatorio2]);
}



