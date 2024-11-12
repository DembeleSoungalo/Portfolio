let images = [
    "img/dice-1.svg", "img/dice-2.svg", "img/dice-3.svg", "img/dice-4.svg","img/dice-5.svg", "img/dice-6.svg"
];
// let images = [
//     "img/dice-1.png", "img/dice-2.png", "img/dice-3.png", "img/dice-4.png","img/dice-5.png", "img/dice-6.png"
// ];
let dice = document.querySelectorAll("img");
//for select img elements
function roll(){
    //add animation 
	dice.forEach(function(die){
		die.classList.add("shake");
	});
    let diceRollSound = new Audio('audio/dice-roll-sound.mp3'); // Replace with your sound file

    // Play the sound when the animation starts
        diceRollSound.onerror = function() {
            console.error("Error loading sound file.");
        };
        diceRollSound.play();
    //timeout to remove animation
    setTimeout(function(){
        dice.forEach(function(die){
            die.classList.remove("shake");
        });
        //initiate random value 1 to 6
		let dieOneValue = Math.floor(Math.random()*6);
		let dieTwoValue = Math.floor(Math.random()*6);
		console.log(dieOneValue,dieTwoValue);
		document.querySelector("#die-1").setAttribute("src", images[dieOneValue]);
		document.querySelector("#die-2").setAttribute("src", images[dieTwoValue]);
		document.querySelector("#total").innerHTML = ` your socre is   ${((dieOneValue)+ 1) +  ((dieTwoValue)+ 1)}` ;

        //to 
        // if(dieOneValue>dieTwoValue){

        // }
        // Create an audio element for the sound
    
        
        
        
    },
    1000
);
	
    

    
}