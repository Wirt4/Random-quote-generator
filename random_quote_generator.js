var quotes = ["Nothing is impossible, the word itself says 'I'm possible' !",
"If opportunity doesn\’t knock, build a door.",
"No act of kindness, no matter how small, is ever wasted.",
"It is in your moments of decision that your destiny is shaped.",
"Change is the end result of all true learning.", 
"In order to succeed, we must first believe that we can.",
"What you do today can improve all your tomorrows.", 
"Accept the challenges so that you can feel the exhilaration of victory.",
"Faith manages.",
"Don’t complain, just work harder.",
"The way to get started is to quit talking and start doing.",
"Things are only impossible until they're not!",
"We cannot change the cards we are dealt, just how we play the game.",
"Experience is what you get when you didn\’t get what you wanted."];

function inspQuote() {
	var rand = quotes[Math.floor(Math.random() * quotes.length)];
	//document.getElementById("quote").innerHTML += rand;
	alert(rand);
}