let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('请输入你的名字。');
    localStorage.setItem('name', myName);
    myHeading.textContent = '你好，' + myName;
  }

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = '你好，' + storedName;
}

myButton.onclick = function() {
    setUserName();
 }

let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/杰尼3.jpg') {
      myImage.setAttribute('src', 'images/杰尼2.jpg');
    } else {
      myImage.setAttribute('src', 'images/杰尼3.jpg');
    }
}