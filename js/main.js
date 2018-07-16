//create 3 objects with 4 properties using object literal notation
var litcuteDog1 = {
		breed: "Yorkshire Terrier", 
		hair: "long and silky",
		lifespan: 16,
		image: "https://vetstreet-brightspot.s3.amazonaws.com/46/02/616ec7a14c9b8f6c654863c6a7dc/yorkshire-terrier-ap-0gukfw-645-x-380.jpg",
		//add a method that multiplies two numbers
		multiply: function() {
			return this.lifespan * 7
		}
	}

var litcuteDog2 = {	
		breed: "Chihuahua", 
		hair: "short hair or long hair coat",
		lifespan: 20,
		image: "https://i1.wp.com/www.bordpol.com/wp-content/uploads/chihuahua-3-different-colors.jpg?fit=425%2C282",
		//add a method that multiplies two numbers
		multiply: function() {
			return this.lifespan * 7
		}
	}

var litcuteDog3 = {
		breed: "Pomeranian", 
		hair: "long and thick coat",
		lifespan: 16,
		image: "https://www.pets4homes.co.uk/images/classifieds/2017/10/13/1737851/thumbs/kc-reg-tiny-orange-loving-teddy-bear-pom-for-sale-59e121512c3df.jpg",
		//add a method that multiplies two numbers
		multiply: function() {
			return this.lifespan * 7
		}
	}
console.log(litcuteDog1.multiply(),litcuteDog2.multiply(), litcuteDog3.multiply());

//same 3 objects using constructor notation
function Cutedogs(breed, hair, lifespan, image) {
	this.breed = breed
	this.hair = hair 
	this.lifespan = lifespan
	this.image = image 
	this.multiply = function() {
		return this.lifespan * 7
	};
}

var cuteDog1 = new Cutedogs('Yorkshire Terrier', 'long and silky', 16, 'https://vetstreet-brightspot.s3.amazonaws.com/46/02/616ec7a14c9b8f6c654863c6a7dc/yorkshire-terrier-ap-0gukfw-645-x-380.jpg', 112);

var cuteDog2 = new Cutedogs('Chihuahua', 'short hair or long hair coat', 20, 'https://i1.wp.com/www.bordpol.com/wp-content/uploads/chihuahua-3-different-colors.jpg?fit=425%2C282', 140);

var cuteDog3 = new Cutedogs('Pomeranian', 'long and thick coat', 16, 'https://www.pets4homes.co.uk/images/classifieds/2017/10/13/1737851/thumbs/kc-reg-tiny-orange-loving-teddy-bear-pom-for-sale-59e121512c3df.jpg', 112);

console.log(cuteDog1, cuteDog2, cuteDog3);

//add each object created by the constructor function to an array
var cutedogsArray = [cuteDog1, cuteDog2, cuteDog3];

//loop through the array of objects
for (var i = 0; i < cutedogsArray.length; i++) {
//create an element for each property so you have a place to display each piece of information
	var newDiv = document.createElement("div");
	var newH1 = document.createElement("h1");
	var newH2 = document.createElement("h2");
	var newP = document.createElement("p");
	var newImg  = document.createElement("img");
	var newSpan = document.createElement("span");
	console.log(newDiv, newH1, newH2, newP, newImg, newSpan )
//create individual text nodes for each piece of information
	var newH1Text = document.createTextNode(cutedogsArray[i].breed);
	var newH2Text = document.createTextNode("hair type: " +cutedogsArray[i].hair);
	var newPText = document.createTextNode("maximum life span: " + cutedogsArray[i].lifespan + " years");
	var newSpanText = document.createTextNode("life span in human years: " + cutedogsArray.multiply);
	console.log(newH1Text, newH2Text, newPText, newSpanText);

//add text nodes to the elements you created
	newH1.appendChild(newH1Text);
	newH2.appendChild(newH2Text);
	newP.appendChild(newPText);
	newSpan.appendChild(newSpanText);

//update the source and alt attributes of the image
	newImg.src = cutedogsArray[i].image
	newImg.alt = cutedogsArray[i].breed

//add the contianer to the HTML so the user can view the content
	newDiv.appendChild(newH1);
	newDiv.appendChild(newH2);
	newDiv.appendChild(newP);
	newDiv.appendChild(newSpan);
	newDiv.appendChild(newImg);

	document.getElementById("display").appendChild(newDiv)
}
