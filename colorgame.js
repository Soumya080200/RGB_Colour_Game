var numsquares=6;
var colors=generateColors(numsquares);

var squares=document.querySelectorAll(".square");
var pickedcolor=pickcolor();
var colorDisplay=document.getElementById("colorDisplay");
colorDisplay.textContent=pickedcolor;
var messageDisplay=document.querySelector("#message");
var h1=document.querySelector("h1");
var resetbutton=document.querySelector("#reset");
var easyBtn=document.querySelector("#easybtn");
var hardBtn=document.querySelector("#hardbtn");

easyBtn.addEventListener("click",function(){
hardBtn.classList.remove("selected");
easyBtn.classList.add("selected");
numsquares=3;
colors=generateColors(numsquares);
pickedcolor=pickcolor();
colorDisplay.textContent=pickedcolor;
for(var i=0;i<squares.length;i++){
	if(colors[i]){
		squares[i].style.backgroundColor=colors[i];
	}
	else{
		squares[i].style.display= "none";
	}
}
});

hardBtn.addEventListener("click",function(){
hardBtn.classList.add("selected");
easyBtn.classList.remove("selected");
numsquares=6;
colors=generateColors(numsquares);
pickedcolor=pickcolor();
colorDisplay.textContent=pickedcolor;
for(var i=0;i<squares.length;i++){
	squares[i].style.backgroundColor=colors[i];
	squares[i].style.display="block";
}
});

resetbutton.addEventListener("click",function(){
//generate all new colours
colors = generateColors(numsquares);
//pick new random colour from array
pickedcolor=pickcolor();
//change colordisplay
colorDisplay.textContent=pickedcolor;
//change colors of squares
for(var i=0;i<squares.length;i++){
	squares[i].style.backgroundColor = colors[i];
}
h1.style.backgroundColor="steelblue";
messageDisplay.textContent="";
this.textContent="new colours";

});

for(var i=0;i<squares.length;i++){
	//add initial colors
	squares[i].style.backgroundColor = colors[i];

	//addeventlistener
	squares[i].addEventListener("click",function(){
		var clickedColor=this.style.backgroundColor;

	    if(clickedColor===pickedcolor){
	    	changecolors(pickedcolor);
	    	resetbutton.textContent="Play Again";
	    	h1.style.backgroundColor=pickedcolor;
         messageDisplay.textContent="Correct";

	    }
	    else{
	    	this.style.backgroundColor="#232323";
	    	messageDisplay.textContent="try again";
	    }
     
	});
}


function changecolors(color){
	for (var i=0;i<squares.length;i++){
        squares[i].style.backgroundColor=color;
	}	
}
function pickcolor(){
	var random=Math.floor(Math.random()*colors.length);
	return colors[random];
}

function generateColors(num){
	//make an array
	var arr = [];
	//add random colors to array 
	for(var i=0;i<num;i++){
     arr.push(randomColor());
	}
	//return array
	return arr;
}

function randomColor(){
	//pick red from 0 to 255
	var r=Math.floor(Math.random()*256);
	//pick green from 0to255
	var g=Math.floor(Math.random()*256);
	//pick blue
	var b=Math.floor(Math.random()*256);

	return "rgb(" + r + ", " + g + ", " + b + ")"
}



