//--------------------------------------------------------------------------------//
//                                                                                //
//    created by Shinya Sakurai (Twitter:@sakurai_sinya)                          //
//                                                                                //
//                             TextRandomAnimation.js                             //
//                                                                                //
//                                                         version 1.0            //
//                                                                                //
//    (Warning) Doesn't work IE.                                                  //
//                                                                                //
//--------------------------------------------------------------------------------//

//-----Customize block-----//

const randomChars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
const animationClassName = "animation-text";
const animationSpeed = 50;//ms

//-----Customize block end-----//

var elements = document.getElementsByClassName(animationClassName);
var elementTexts = [];
var displayedTextIndex = [];
var maxLength=0;
for(var i = 0;i<elements.length;i++){
	elementTexts.push(elements.item(i).innerHTML);
	if(elements.item(i).innerHTML.length>maxLength){
		maxLength=elements.item(i).innerHTML.length;
	}
	displayedTextIndex.push(0);
	elements.item(i).innerHTML=" ";
}
var loop = setInterval(function(){
	for(var i=0;i<elements.length;i++){
		var str="";
		for(var j=0;j<(elementTexts[i].length-displayedTextIndex[i]);j++){
			str+=generateChar();
		}
		elements.item(i).innerHTML=elementTexts[i].substring(0,displayedTextIndex[i]+1)+str;
		displayedTextIndex[i]++;
		if(i==maxLength){
			clearInterval(loop);
		}
	}
},animationSpeed);

function generateChar(){
	return randomChars.charAt(Math.random()*randomChars.length)
}