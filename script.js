
let game = function(){
    let name = prompt("Wat is je naam?");
    alert("Hallo " + name);
    alert("Klaar op een spelletje te spelen?");
    alert("Top! Je moet het nummer raden tussen 0 en 25");
    alert("Oke succes!");
    let random = Math.floor(Math.random() * 26);
    let userNumb = prompt(name + " gok maar! " + random);
    if (userNumb != random) {
        prompt("Dat is niet correct " + random);
    } 
        alert("Gefeliciteerd je hebt gewonnen");
        alert("Dag " + name);
}
alert(game())