let paragraph = document.getElementById("opis");

paragraph.style.fontSize = '20px';
paragraph.style.marginTop = '20px';
paragraph.style.color = 'red';
paragraph.style.fontWeight = 'bold';

let button = document.querySelector('button');
flag = true;

button.addEventListener('click', function () {
  paragraph.innerHTML = `To jest opis produktu, ktory wyswietla sie po kliknieciu w button.`;
});