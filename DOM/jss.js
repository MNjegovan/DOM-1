/**
 * Created by Ucenik on 27.4.2017..
 */
var element = document.getElementById("prvi").innerHTML;
document.getElementById("drugi").innerHTML = element;
function funk() {
    document.getElementById("imeg").src = "truba1.jpg";
}
function funk2() {
    document.getElementById("imeg").src = "truba2.jpg";
}
function promjboje(){
    document.getElementById("prvi").style.backgroundColor = "blue";
}
function prikaz() {
    document.getElementById("div1").style.display = "block";
}
function sakrij() {
    document.getElementById("div1").style.display = "none";
}