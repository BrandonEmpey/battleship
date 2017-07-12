/**
 * Created by brandonempey on 7/7/17.
 */


function createGrid(x)
{
	var matrix = [];
	for (var rows = 0; rows < x; rows++)
	{
		for (var columns = 0; columns < x; columns++)
		{
			$("#container").append("<div class='grid'></div>");
		}
	}
	$(".grid").width(960/x);
	$(".grid").height(960/x);

	for (var i = 0; i < rows; i++)
	{
		matrix.push( [null] );
	}

	for (var j = 0; j < rows; j++)
	{
		for (var k = matrix[j].length; k < columns; k++)
		{
			matrix[j].push(null);
		}
	}

	console.log(matrix);

}

function clearGrid()
{
	$(".grid").remove();
}

function refreshGrid()
{
	var z = prompt("How large od a battlefield?");
	clearGrid();
	createGrid(z);
}

$(document).ready(function()
{
	createGrid(30);

/*	$(".grid").mouseover(function()
	{
		$(this).css("background-color", "steelblue");
	});*/

/*	$(".grid").mouseout(function()
	{
		$(this).css("background-color", "white");
		$(this).css("border", "1px black thin");
	});*/

$(".newGrid").click(function()
{
		refreshGrid();

		$(".grid").click(function()
		{
			$(this).css("background-color", "black");
		});
	});
});

function placeCruiser ()
{

	var clicks = 0;

	alert('Select the position of your Cruiser (2 tiles in a straight line)');
	$(".grid").click(function (e)
	{
		var position1 = e.pageX;
		var position2 = e.pageX + 15;

		var finalPosition = [position1, position2];

		if(clicks < 2)
		{
			$(this).css("background-color", "lightskyblue");
			clicks++;
		}


		var cruiser = new Cruiser(2, 2, 4, position1, position2, finalPosition);

		console.log(finalPosition);
	});
}

function placeDestroyer ()
{

	var clicks = 0;

	alert('Select the position of your Destroyer (3 tiles in a straight line)');
	$(".grid").click(function (e)
	{
		var position1 = e.pageX;
		var position2 = e.pageX + 15;
		var position3 = e.pageX + 30;

		var finalPosition = [position1, position2, position3];

		if(clicks < 3)
		{
			$(this).css("background-color", "red");
			clicks++;
		}


		var destroyer = new Destroyer(3, 3, 3, position1, position2, position3, finalPosition);

		console.log(finalPosition);
	});
}

function placeCarrier ()
{

	var clicks = 0;

	alert('Select the position of your Carrier (5 tiles in a straight line)');
	$(".grid").click(function (e)
	{
		var position1 = e.pageX;
		var position2 = e.pageX + 15;
		var position3 = e.pageX + 30;
		var position4 = e.pageX + 45;
		var position5 = e.pageX + 60;

		var finalPosition = [position1, position2, position3, position4, position5];

		if(clicks < 5)
		{
			$(this).css("background-color", "green");
			clicks++;
		}

		var cruiser = new Carrier(5, 5, 2, position1, position2, position3, position4, position5, finalPosition);

		console.log(finalPosition);
	});
}

function Cruiser(health, length, speed, position1, position2, finalPosition)
{
	this.health = 2;
	this.length = 2;
	this.speed = 4;
}

function Destroyer(health, length, speed, position1, position2, position3, finalPosition)
{
	this.health = health;
	this.length = length;
	this.speed = speed;
	this.position1 = position1;
	this.position2 = position2;
	this.position3 = position3;
	this.finalPosition = finalPosition;
}

function Carrier(health, length, speed, position1, position2, position3, position4, position5, finalPosition)
{
	this.length = 5;
	this.health = 5;
	this.speed = 2;
}

function fireTorpedo()
{
	$(".grid").click (function ()
	{
		if ($(this).css("background-color") === "red")
		{
			function inflictDamage()
			{
			//	destroyer.health = destroyer.health - 1;
				console.log("Hello");
			}
		}


	});


}









