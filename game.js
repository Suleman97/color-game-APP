var numSquares = 6;
var colors= generateColor(6);
var squares=document.querySelectorAll(".square");
var pickedcolor= pickColor();
var colorDisplay= document.getElementById("colorDisplay");
var messageDisplay=document.querySelector("#message");
var h1=document.querySelector("h1");
var resetButton=document.querySelector("#reset");
var easyBtn=document.querySelector("#easyBtn");
var hardBtn=document.querySelector("#hardBtn");




easyBtn.addEventListener("click", function(){

	easyBtn.classList.add("selected");
	hardBtn.classList.remove("selected");
	numSquares=3;
	colors= generateColor(3);
	pickedcolor=pickColor();
	colorDisplay.textContent=pickedcolor;

	for(var i=0; i<squares.length; i++)
	{
		if(colors[i])
		{
			squares[i].style.backgroundColor=colors[i];

		}
		else
		{
			squares[i].style.display="none";
		}
	}

});

hardBtn.addEventListener("click", function(){

	hardBtn.classList.add("selected");
	easyBtn.classList.remove("selected");
	numSquares=6;
	colors= generateColor(6);
	pickedcolor=pickColor();
	colorDisplay.textContent=pickedcolor;

	for(var i=0; i<squares.length; i++)
	{
			squares[i].style.backgroundColor=colors[i];
			squares[i].style.display="block";
	}

});

resetButton.addEventListener("click", function(){

	numSquares=6;

	colors= generateColor(6);

	pickedcolor= pickColor();

	colorDisplay.textContent= pickedcolor;

	for(var i=0; i<squares.length; i++)
	{
		squares[i].style.backgroundColor=colors[i];
	}

	h1.style.backgroundColor="steelblue";

});

colorDisplay.textContent = pickedcolor;

for(var i=0; i<squares.length; i++)
{
	squares[i].style.backgroundColor = colors[i];

	squares[i].addEventListener("click" , function(){

		var clickedColor = this.style.backgroundColor;

		if(clickedColor===pickedcolor)
		{
			messageDisplay.textContent= "Correct";
			resetButton.textContent="Play Again?"
			changeColor(clickedColor);
			h1.style.backgroundColor=clickedColor;

		}
		else
		{
			messageDisplay.textContent="try again";
			this.style.backgroundColor="#232323";
		}

	});
}


function changeColor(color)
{

	for(var i=0; i<squares.length; i++)
	{
		squares[i].style.backgroundColor= color;
	}

}


function pickColor()
{

	var random=Math.floor(Math.random() * colors.length);
	return colors[random];


}

function generateColor(num)
{
	var arr=[];

	for(var i=0; i<num; i++)
	{

		arr.push(randomColor());

	}



	return arr;
}

function randomColor()
{
	var r= Math.floor(Math.random() * 256);
	var g= Math.floor(Math.random() * 256);
	var b= Math.floor(Math.random() * 256);

	return "RGB(" +r+ ", "+g+ ", "+b+")";
}












