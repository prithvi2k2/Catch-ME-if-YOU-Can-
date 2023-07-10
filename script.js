document.getElementById('tooltip').addEventListener('click', function (event){
    event.stopPropagation();
    console.log ('Pranked!');
});


function RandomGif(max, min = 0) {
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}
var MaxGif = 7;

var gifIndex = RandomGif(MaxGif);
var gifPath = 'resources/randGif/' + (gifIndex) + '.gif';
console.log(gifPath)
document.getElementById("rand").src = gifPath;