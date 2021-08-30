// Task 3
// Implement a program that displays 
// -  the message "I was pressed!" when you click the button, 
// -  displays the message "Mouse on me!" when you hover the button, 
// -  displays the message "Mouse is not on me!" when you move the mouse cursor.

// function funcClick(){
// let elems = document.getElementsByClassName('press');
// // console.log(elems[0].innerText);
// let newLi = document.createElement('li');
// // console.log(newDiv);
// newLi.innerText = 'I was pressed!';
// list.prepend(newLi);
// }


// function funcClick(){
// let elems = document.getElementsByClassName('div');
// // console.log(elems[0].innerText);
// let newLi = document.createElement('li');
// // console.log(newDiv);
// newLi.innerText = 'I was pressed!';
// list.prepend(newLi);
// }

// var articleDiv = document.querySelector("div.article");
// // создаем элемент
// var elem = document.createElement("input");
// // создаем для него текст
// var elemText = document.createTextNode("Привет мир");
// // добавляем текст в элемент в качестве дочернего элемента
// elem.appendChild(elemText);
// // добавляем элемент в блок div
// articleDiv.appendChild(elem);


// function buttonClick() {
// 	var input = document.getElementById('input');
// 	document.write(input.value);
// }

function funcClick(){
	var infoPublished = document.getElementById('addFanInfo');
	// alert(infoPublished.value);
	// console.log(elems[0].innerText);
var newP = document.createElement('p.newPclass');
console.log(newP);
newP.innerText = infoPublished.value;
publishInfo.prepend(newP);
}


function funcClear(){
	let infoClear = document.getElementById('addFanInfo');
	var removableNode = document.querySelectorAll("div.publishInfo p")[0];
	infoClear.removeChild(removableNode);
}
