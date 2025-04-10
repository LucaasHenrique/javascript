const div = document.getElementById("meuDiv");
console.log(div.textContent);

const destaques = document.getElementsByClassName("destaque");
console.log(destaques.length);

const divs = document.getElementsByTagName('div');
for (let i = 0; i < divs.length; i++) {
    divs[i].textContent = 'Texto atualizado para div ' + (i + 1);
}

const itemDestaque = document.querySelector('ul li.destaque1');
//console.log(itemDestaque.textContent);

const items = document.querySelectorAll('.lista .item');
items.forEach(item => console.log(item.textContent));

// children childNodes
const div1 = document.getElementById('myDiv');
console.log(div1.children.length);

const div2 = document.getElementById("myDiv1");
console.log(div2.childNodes.length);