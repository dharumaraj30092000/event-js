/* var hexColor=[0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
var set=document.getElementById("square");
var btn=document.getElementById("click");
var createColor;

function applyColor(){
	createColor=Math.floor(Math.random()*16);
	return hexColor[createColor];
}

btn.addEventListener("click",function (){
	let formColor="#";
	for(let i=0;i<=6;i++){
		formColor+=applyColor();
		square.style.backgroundColor= formColor;
		square.style.padding="20px";
	}
}); */

/*------ event-change-Textcolor ------*/
let input=document.getElementById("input");
var btn=document.getElementById("click");

/*input.addEventListener("mousemove",function(){
	let getValue=input.value;
	input.style.color = getValue;
}) */
let paragraph=document.getElementById("change");

btn.addEventListener("mousemove",function(){
	let getValue=input.value;
	paragraph.style.fontSize= getValue + "px";
	//paragraph.style.color= getValue;
})