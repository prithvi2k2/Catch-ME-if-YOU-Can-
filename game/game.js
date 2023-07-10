// Return a random number in range 0(mostly) to provided MAX[both inclusive]
//used for gif manipulation and random target movement
function Random(max, min = 0) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

//Manipulate GIFs
var MaxGif = 7;//available number of gifs-1
document.getElementById("rand").src = `../resources/randGif/${Random(MaxGif)}.gif`;

////AllOtherEvents\\\

const game = document.getElementById("game");
const target = document.getElementById("target");
const core = document.getElementById("core");

function get_win_size() {
    dimension = game.getBoundingClientRect();
    winX = dimension.width;
    winY = dimension.height;
    // console.log(`height:${winY},width:${winX}`);
}
get_win_size();
window.addEventListener('resize', get_win_size);

//target movement
target.addEventListener('mouseover' || 'mousemove', function () {
    target.style.transition = "0.5s ease-out";
    target.style.left = `${Random(winX, 0)}px`;
    target.style.top = `${Random(winY, 0)}px`;
    // console.log(t);
});

// //teleport/respawn
// core.addEventListener('mouseover' || 'mouseenter' || 'mousemove', function teleport() {

// });

//tAsKs
//-->block game on extreme down scale resize []
//-->Add teleport function if possible []
//-->Add some effects, maybe not []
//-->Complete the above tasks lol []