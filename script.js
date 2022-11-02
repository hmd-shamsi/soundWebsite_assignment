// Loading the soundpiece's audios to avoid delays while playing them

var bedroomAudio = new Audio("Bedroom Audio.mp3");
var bathroomAudio = new Audio("Bathroom Audio.mp3");
var classroomAudio = new Audio("Classroom Audio.mp3");
var diningHallAudio = new Audio("Dining Hall Audio.mp3");
var libraryCafeAudio = new Audio("Library Cafe Audio.mp3");
var footballFieldAudio = new Audio("Football Field Audio.mp3");
var snackRoomAudio = new Audio("Snack Room Audio.mp3");
var bedtimeAudio = new Audio("Bedtime Audio.mp3");

// -------------------------------------------------- \\

var numberOfAudios = 8;
var labels = ["bedroom", "bathroom", "classroom", "dining-hall", "library-cafe", "football-field", "snack-room", "bedtime"];
var audios = [bedroomAudio, bathroomAudio, classroomAudio, diningHallAudio, libraryCafeAudio, footballFieldAudio, snackRoomAudio, bedtimeAudio];
var messages = ["Click your alarm clock to get ready!",
				"Click your phone to go to class!",
				"Click the professor to go for lunch!",
				"Click your food to go to library cafe!",
				"Click your laptop to go play football!",
				"Click the football to go grab a snack!",
				"Click the TV to go back to your room!",
				"Click your alarm clock to sleep!"];
var playingAudio = bedroomAudio;

for (let i=0; i<numberOfAudios-1; i++) {

	let currentAudio = audios[i];
	let currentSVG = document.getElementById(labels[i] + "-drawing");
	let currentClick = document.getElementById(labels[i] + "-click");
	let currentUncolored = document.getElementById(labels[i] + "-uncolored");
	let currentEmoji = document.getElementById(labels[i] + "-emoji");
	let currentMessage = document.getElementById("message");
	//let startMessage = document.getElementById("start-message");
	//let currentMessage = document.getElementById(labels[i] + "-message");

	currentAudio.addEventListener("ended", function () {
		currentUncolored.classList.add("drawing-fade-out");
		currentMessage.classList.replace("message-fade-in", "message-fade-out");
		setTimeout(function () { 
			currentMessage.classList.replace("message-fade-out", "message-fade-in"); 
			currentMessage.innerHTML = messages[i]; 
		}, 1.4*1000);
		//startMessage.classList.replace("message-fade-in", "message-fade-out");
		//currentMessage.classList.add("message-fade-in");
		//currentMessage.innerHTML = messages[i];
	});

	currentClick.addEventListener("click", function () {
		let soundpiece = document.getElementById("soundpiece");
		soundpiece.classList.replace("page-fade-in", "page-fade-out");

		setTimeout(function () { 
			currentSVG.style.visibility = "hidden";
			currentEmoji.style.visibility = "hidden";

			let nextSVG = document.getElementById(labels[i+1] + "-drawing");
			let nextEmoji = document.getElementById(labels[i+1] + "-emoji");
			nextSVG.style.visibility = "visible";
			nextEmoji.style.visibility = "visible";

			currentMessage.innerHTML = "Press play to continue your day!";

			if (i == 6) {
				currentMessage.innerHTML = "Press play to finish your day!";
			}

			playingAudio = audios[i+1];

			soundpiece.classList.replace("page-fade-out", "page-fade-in");
		}, 2.8*1000);
	});

}

// -------------------------------------------------- \\

var lastClick = document.getElementById("bedtime-click");
var lastAudio = audios[7];
var lastUncolored = document.getElementById("bedtime-uncolored");
var lastMessage = document.getElementById("message");

lastAudio.addEventListener("ended", function () {
	lastUncolored.classList.add("drawing-fade-out");
	lastMessage.classList.replace("message-fade-in", "message-fade-out");
	setTimeout(function () { 
		lastMessage.classList.replace("message-fade-out", "message-fade-in"); 
		lastMessage.innerHTML = messages[7]; 
	}, 1.4*1000);
});

lastClick.addEventListener("click", function () {
	let soundpiece = document.getElementById("soundpiece");
	soundpiece.classList.replace("page-fade-in", "page-fade-out");

	setTimeout(function () { 
		//currentMessage.innerHTML = "Press play to finish your day!";
		//playingAudio = audios[i+1];
		window.location.reload();
	}, 1.4*1000);
});

// -------------------------------------------------- \\

function playAudio() { playingAudio.play(); }

function pauseAudio() { playingAudio.pause(); }

function replayAudio() { playingAudio.currentTime = 0; }
