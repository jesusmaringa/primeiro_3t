function inicialize() {
   document.getElementById("capital").focus();
}
function arredondar(n) {
   //return (Math.round(n * 100) / 100).toFixed(2).replace(".", ",");
   return n.toLocaleString("pt-BR", {
      // Ajustando casas decimais
      minimumFractionDigits: 2,  
      maximumFractionDigits: 2
    });
}
function calcula() {
   document.getElementById("resultado").innerHTML +arredondar(0);
   let c = document.getElementById("capital").value;
   let j = document.getElementById("juros").value;
   if (isNaN(Number(c))) {
      document.getElementById("errorC").innerHTML = "Digite apenas número.";
      document.getElementById("capital").focus();
      return
   }
   if (isNaN(Number(j))) {
      document.getElementById("errorJ").innerHTML = "% de juros, acima de 0.";
      document.getElementById("juros").focus();
      return
   }
   document.getElementById("resultado").innerHTML = arredondar(c * (j / 100));
   inicialize();
}
