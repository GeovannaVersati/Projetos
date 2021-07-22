function rolarD20(){
    var d20Result= document.getElementById("d20Result");
    var d20= Math.floor(Math.random() *20+1);
    d20Result.innerHTML= d20;
   


};
function rolarDado(evento){
    evento.preventDefault();
    var dadoResult= document.getElementById("dadoResult");
    var tamanhoDado= evento.target.elements.tamanhoDado.value;
    var dado= Math.floor(Math.random() *tamanhoDado+1);
    dadoResult.innerHTML= dado;
    
};
 //dado de tamanho varíavel