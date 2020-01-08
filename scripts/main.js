let myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';
/*document.querySelector('html').onclick = function(){
	alert("别戳我，我怕疼。")
}
*/
var myImage = document.querySelector('img');
myImage.onclick = function(){
	var mySrc = myImage.getAttribute('src');
	if(mySrc == 'images/a.png'){
		myImage.setAttribute('src','images/b.png');
	}else{
		myImage.setAttribute('src','images/a.png');
	}
}
var myButton = document.querySelector('button');
function setUserName(){
	var myName = prompt('请输入你的名字');
	if(!myName || myName===null){
		setUserName();
	}
	localStorage.setItem('name',myName);
	myHeading.textContent = 'Mozilla 酷毙了，' + myName;

}
if(!localStorage.getItem('name')){
	setUserName();
}else{
	var storedName = localStorage.getItem('name');
	myHeading.textContent = 'Mozilla 酷毙了，' +storedName;
}
myButton.onclick = function(){
	setUserName();
}