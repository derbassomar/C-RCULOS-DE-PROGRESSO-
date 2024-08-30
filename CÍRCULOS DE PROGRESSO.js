function go() {
var circle = document.querySelector("#prpgrsso");
var numero = document.querySelector("#numeroProgresso").value; 
document.querySelector(".numero").innerHTML = numero + "%"
circle.style.strokeDashoffset = 440 - (440 * numero ) / 100;

}
