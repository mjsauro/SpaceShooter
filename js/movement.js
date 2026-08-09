//event listeners
//keys
window.addEventListener('keydown', function (e) {
    myGameArea.keys = (myGameArea.keys || []);
    myGameArea.keys[e.keyCode] = true;
});
window.addEventListener('keyup', function (e) {
    myGameArea.keys[e.keyCode] = false;
    stopMove();
});

function processPlayerMovement(){
    myGamePiece.speedX = 0;
	myGamePiece.speedY = 0;
    //keys
    //left
    if (myGameArea.keys && (myGameArea.keys[37] || myGameArea.keys[65])) {myGamePiece.speedX = -3; }
    //right
    if (myGameArea.keys && (myGameArea.keys[39] || myGameArea.keys[68])) {myGamePiece.speedX = 2; }
    //up 
    if (myGameArea.keys && (myGameArea.keys[38] || myGameArea.keys[87])) {myGamePiece.speedY = -2; }
    //down
    if (myGameArea.keys && (myGameArea.keys[40] || myGameArea.keys[83])) {myGamePiece.speedY = 2; }
}


//function to stop movement
function stopMove() {
    myGamePiece.speedX = 0;
    myGamePiece.speedY = 0;
}