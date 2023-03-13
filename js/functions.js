function updateScore(){
    let scoreP1 = document.getElementById('scorePlayer1');
    let birdsP1 = parseInt(document.getElementById('birdsPlayer1').value);
    let bonusP1 = parseInt(document.getElementById('bonusPlayer1').value);
    let goalsP1 = parseInt(document.getElementById('goalsPlayer1').value);
    let eggsP1 = parseInt(document.getElementById('eggsPlayer1').value);
    let foodP1 = parseInt(document.getElementById('foodPlayer1').value);
    let tuckedP1 = parseInt(document.getElementById('tuckedPlayer1').value);

    let scoreP2 = document.getElementById('scorePlayer2');
    let birdsP2 = parseInt(document.getElementById('birdsPlayer2').value);
    let bonusP2 = parseInt(document.getElementById('bonusPlayer2').value);
    let goalsP2 = parseInt(document.getElementById('goalsPlayer2').value);
    let eggsP2 = parseInt(document.getElementById('eggsPlayer2').value);
    let foodP2 = parseInt(document.getElementById('foodPlayer2').value);
    let tuckedP2 = parseInt(document.getElementById('tuckedPlayer2').value);

    let scoreP3 = document.getElementById('scorePlayer3');
    let birdsP3 = parseInt(document.getElementById('birdsPlayer3').value);
    let bonusP3 = parseInt(document.getElementById('bonusPlayer3').value);
    let goalsP3 = parseInt(document.getElementById('goalsPlayer3').value);
    let eggsP3 = parseInt(document.getElementById('eggsPlayer3').value);
    let foodP3 = parseInt(document.getElementById('foodPlayer3').value);
    let tuckedP3 = parseInt(document.getElementById('tuckedPlayer3').value);

    let scoreP4 = document.getElementById('scorePlayer4');
    let birdsP4 = parseInt(document.getElementById('birdsPlayer4').value);
    let bonusP4 = parseInt(document.getElementById('bonusPlayer4').value);
    let goalsP4 = parseInt(document.getElementById('goalsPlayer4').value);
    let eggsP4 = parseInt(document.getElementById('eggsPlayer4').value);
    let foodP4 = parseInt(document.getElementById('foodPlayer4').value);
    let tuckedP4 = parseInt(document.getElementById('tuckedPlayer4').value);

    let scoreP5 = document.getElementById('scorePlayer5');
    let birdsP5 = parseInt(document.getElementById('birdsPlayer5').value);
    let bonusP5 = parseInt(document.getElementById('bonusPlayer5').value);
    let goalsP5 = parseInt(document.getElementById('goalsPlayer5').value);
    let eggsP5 = parseInt(document.getElementById('eggsPlayer5').value);
    let foodP5 = parseInt(document.getElementById('foodPlayer5').value);
    let tuckedP5 = parseInt(document.getElementById('tuckedPlayer5').value);

    scoreP1.value = birdsP1 + bonusP1 + goalsP1 + eggsP1 + foodP1 + tuckedP1;
    scoreP2.value = birdsP2 + bonusP2 + goalsP2 + eggsP2 + foodP2 + tuckedP2;
    scoreP3.value = birdsP3 + bonusP3 + goalsP3 + eggsP3 + foodP3 + tuckedP3;
    scoreP4.value = birdsP4 + bonusP4 + goalsP4 + eggsP4 + foodP4 + tuckedP4;
    scoreP5.value = birdsP5 + bonusP5 + goalsP5 + eggsP5 + foodP5 + tuckedP5;
}