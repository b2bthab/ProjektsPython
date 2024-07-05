function atjaunotIetvaru(which) {
  document.getElementById("lapas_saturs").innerHTML = '<'+'object id="lapas" type="text/html" data="'+which.href+'"></'+'object>';
}

window.onload = function() {

    var navLinks = document.querySelectorAll('.topnav a');
    navLinks.forEach(function(link) {
      link.addEventListener('click', function() {
        navLinks.forEach(function(link) {
          link.classList.remove('active');
        });
        this.classList.add('active');
      });
    });
  }

function zimetuzcanva() {
  var kanva = document.getElementById("zimejums");
  var ctx = kanva.getContext("2d");
  ctx.fillStyle = "green";
  ctx.fillRect(30, 30, 400, 350); 
}

function zimetuzcanva2() {
  var kanva = document.getElementById("zimejums");
  var ctx = kanva.getContext("2d");
  ctx.strokeStyle = "blue";
  ctx.strokeRect(0, 0, 300, 350); 
}

function aplis() {
  var kanva = document.getElementById("zimejums");
  var ctx = kanva.getContext("2d");
  ctx.beginPath();
  ctx.arc(120, 120, 80, 0, 2 * Math.PI);
  ctx.lineWidth = 5;
  ctx.fillStyle = "red"; //aizpildījuma krāsa
  ctx.strokeStyle = "blue"; //līnijas krāsa
  ctx.fill();
  ctx.stroke();
}
function linija() {
  var kanva = document.getElementById("zimejums");
  var ctx = kanva.getContext("2d");
  ctx.beginPath();
  ctx.moveTo(75, 57);
  ctx.lineTo(300, 350);
  ctx.lineWidth = 5;
  ctx.strokeStyle = "blue";
  ctx.stroke();
}
function teksts() {
  var kanva = document.getElementById("zimejums");
  var ctx = kanva.getContext("2d");
  ctx.font = "30px Arial";
  ctx.fillStyle = "purple";
  ctx.fillText("Sveiki, pasaule!", 190, 85); 
}
function aprekins() {
let vards = document.getElementById("vards").value;
let num1 = parseFloat(document.getElementById("a").value);
let num2 = parseInt(document.getElementById("b").value);
if (vards ==="" || vards ===" " || !vards.match(/^\S[a-zA-Zā-žĀ-Ž\s]+$/)) {
    alert("Kļūda ievadē!");
    return;
  }
if (isNaN(num1) || isNaN(num2)) {
  alert("Ievadi skaitli!");
  return;
}
  if (!Number.isInteger(Number(num1)) || !Number.isInteger(Number(num2))) { 
    alert("Ievadi veselu skaitli");
    return;
    }
let sum = num1 * num2;
console.log("Tevi sauc " + vards + "Atbilde ir: " + sum);
document.getElementById("rezultats").innerHTML = "<br>Tevi sauc " + vards + "<br>Atbilde ir: " + sum;
}
let age = 100;
if (age < 18) {
  console.log("Nepilngadīgs");
} else if (age >= 18 && age < 65) {
  console.log("Pilngadīgs");
}
else {
  console.log("Cits gadijums")
}
for (let i = 0; i <= 10; i++) {
  console.log(i);
  if (i==5) {
  console.log(i);
}
}
let j = 0;
while (j<=10) {
  console.log(j);
  j++;
}