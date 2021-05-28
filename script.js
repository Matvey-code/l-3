function Check()

{

d=document

var admin, name;

name = "Матвей";

admin = name;

alert( admin );
}

function Age()

{

d=document

let age = +prompt('Введите ваш возраст');

var result = confirm('Вы уверены, что вам '+age);

if (result == true)

{

alert ('Хорошо')

}

else

{

age = +prompt('Введите ваш возраст');

alert ('ОК')

}

}









var secondname = " ";

document.getElementById('btn').addEventListener("click", Rename);

function Rename(){
    secondname = document.getElementById('_secondname').value;

document.getElementById('secondname').innerText = "Фамилия: " + secondname;

}