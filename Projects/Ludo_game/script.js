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
	dice.forEach(function(dee){
		dee.classList.add("shake");
	});
    let diceRollSound = new Audio('audio/dice-roll-sound.mp3'); // Replace with your sound file

    // Play the sound when the animation starts
        diceRollSound.onerror = function() {
            console.error("Error loading sound file.");
        };
        diceRollSound.play();
    //timeout to remove animation
    setTimeout(function(){
        dice.forEach(function(dee){
            dee.classList.remove("shake");
        });
        //initiate random value 1 to 6
		let deeValueOne = Math.floor(Math.random()*6) + 1;
		let deeValueTwo = Math.floor(Math.random()*6) + 1;
		console.log(deeValueOne,deeValueTwo);
		document.querySelector("#die-1").setAttribute("src", images[deeValueOne -1]);
		document.querySelector("#die-2").setAttribute("src", images[deeValueTwo -1]);
		document.querySelector("#total").innerHTML = ` your socre is   ${((deeValueOne)) +  ((deeValueTwo))}` ;
        // if (deeValueOne == 6) {
        //     document.querySelector("#win").innerHTML = ` Player One is the winner !!!`;
        // }
        // if (deeValueTwo == 6) {
        //     document.querySelector("#win").innerHTML = ` Player Two is the winner !!!`; 
            
        // }
        // else{
        //     document.querySelector("#total").innerHTML = ` your socre is   ${((deeValueOne)) +  ((deeValueTwo))}` ;
        // }

        //to 
        // if(deeValueOne>deeValueTwo){

        // }
        // Create an audio element for the sound
    
        
        
        
    },
    1000
);
	
    

    
}