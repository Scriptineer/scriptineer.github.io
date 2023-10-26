var objImage = null;
function init() {
    objImage = document.getElementById("image1");
    objImage.style.position = "relative";
    objImage.style.left = "0px";
    objImage.style.top = "0px";
}
function getKeyAndMove(e) {
    var key_code = e.which || e.keyCode;
    switch (key_code) {
        case 65: //left arrow key
            moveLeft();
            break;
        case 87: //Up arrow key
            moveUp();
            break;
        case 68: //right arrow key
            moveRight();
            break;
        case 83: //down arrow key
            moveDown();
            break;
    }
}
function moveLeft() {
    objImage.style.left = parseInt(objImage.style.left) - 5 + "px";
}
function moveUp() {
    objImage.style.top = parseInt(objImage.style.top) - 5 + "px";
}
function moveRight() {
    objImage.style.left = parseInt(objImage.style.left) + 5 + "px";
}
function moveDown() {
    objImage.style.top = parseInt(objImage.style.top) + 5 + "px";
}
window.onload = init;

        function startMove(direction) {
            if (moveInterval) {
                clearInterval(moveInterval);
            }
            moveInterval = setInterval(() => {
                if (direction === 'left') moveLeft();
                if (direction === 'up') moveUp();
                if (direction === 'right') moveRight();
                if (direction === 'down') moveDown();
            }, 50); // Adjust the speed as needed
        }

function stopMove() {
  if (moveInterval) {
      clearInterval(moveInterval);
  }
}

document.addEventListener('keydown', (event) => {
  switch (event.keyCode) {
      case 65: // A key
          startMove('left');
          break;
      case 87: // W key
          startMove('up');
          break;
      case 68: // D key
          startMove('right');
          break;
      case 83: // S key
          startMove('down');
          break;
  }
});

document.addEventListener('keyup', (event) => {
  stopMove();
});