
let game = function(){
    let name = prompt("Wat is je naam?");
    alert("Hallo " + name);
    alert("Klaar op een spelletje te spelen?");
    alert("Top! Je moet het nummer raden tussen 0 en 25");
    alert("Oke succes!");
    const random = Math.floor(Math.random() * 26);
    let userNumb = prompt(name + " gok maar!");
    let i = 0;
    while (userNumb != random && i < 4) {
        userNumb = prompt("Dat is niet correct");
        i++;
    } if (userNumb == random) {
        alert("Gefeliciteerd je hebt gewonnen");
        alert("Dag " + name);
    } else if (userNumb != random) {
    alert("Jammer");
    alert("Dag " + name);
    }
}
alert(game());