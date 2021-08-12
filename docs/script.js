const calculo = () => {
 const km = document.getElementById("kmARecorrer").value;
 const rd = document.getElementById("rendimiento").value;
 const gas = document.getElementById("tipo").value;
 const x = km/rd;
 const y = Math.round(x*gas);
console.log(y);

 document.getElementById("result").innerHTML=y+"$"+" pesos";
}