
//words to use
var words =[
	"sonar",
	"navy",
	"shipyard",
	"naval",
	"boat",
	"fleet",
	"dock",												
	"dockyard",
	"diving",
	"pressure",
	"sea",
	"harbor",
	"hull",
	"nuclear"
]
			
			//variables
			let answer = "";
			let wrong = 0;										
			let loose = 8;
			let guessed = [];
			let wordstatus = null;
			
	//generate random word
	function randomword() {						
	answer = words[Math.floor(Math.random() * words.length)];
}

//generate letters to chose from
function generatebutton() {
  let buttonsHTML = 'abcdefghijklmnopqrstuvwxyz'.split('').map(letter =>
    `
      <button style="font-size:2vw;"
        class="btn btn-lg btn-primary m-2"
        id='` + letter + `'
        onClick="handleguess('` + letter + `')"			
      >														
        ` + letter + `
      </button>
    `).join('');		
	document.getElementById('keyboard').innerHTML = buttonsHTML;
}	

//put guessed letters in word and prevent letters from being selected
function handleguess(chosenletter){
	guessed.indexOf(chosenletter) == -1 ? guessed.push(chosenletter) : null;
	document.getElementById(chosenletter).setAttribute('disabled', true);	
	if (answer.indexOf(chosenletter) >= 0) {
		guessedword();
	}
}

//reset button
function reset() {
	guessed = [];
	randomword();
	guessedword();
	generatebutton()
}

//Display guessed word
function guessedword() {
	wordstatus = answer.split('').map(letter => (guessed.indexOf(letter) >=0 ? letter :" _ ")).join('');
	document.getElementById('wordspot').innerHTML = wordstatus;
}

	
	
	
	randomword();
	generatebutton();
	guessedword();
