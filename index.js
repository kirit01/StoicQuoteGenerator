var randomQuotes = document.getElementById("myQuotes");

function clicked() {

    var quotes = ["Waste no more time arguing what a good man should be. Be One.", "In your actions, don’t procrastinate. In your conversations, don’t confuse. In your thoughts, don’t wander. In your soul, don’t be passive or aggressive. In your life, don’t be all about business.", "If it is not right, do not do it, if it is not true, do not say it.","Only time can heal what reason cannot.","Most powerful is he who has himself in his own power" ];
    var disQuotes = quotes[Math.floor(Math.random() * quotes.length)];
    randomQuotes.innerHTML = disQuotes;
}

var lightandark=document.querySelector("#toggleonoff");

lightandark.addEventListener("click",function(){

    document.body.classList.toggle("black");

});