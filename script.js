const student = "Останина Анастасия Анатольевна"; 

document.getElementById("student").innerHTML = student;

let team1R = prompt("Введите реальный счёт первой команды");

let team2R = prompt("Введите реальный счёт второй команды");

let team1P = prompt("Введите предполагаемый счёт первой команды");

let team2P = prompt("Введите предполагаемый счёт второй команды");

if ((team1R==team1P) && (team2R==team2P)) {
    alert ("Счёт был угадан верно!");
}
else if (
    (team1R>team2R) && (team1P>team2P)
    ||
    (team1R==team2R) && (team1P==team2P)
    ||
    (team1R<team2R) && (team1P<team2P)
)   {
alert ("Счёт не угадали, но исход угадали");
} else {
alert ("Ни счёта, ни исхода не угадали");
}
