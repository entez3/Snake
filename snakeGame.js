const snakeboard = document.getElementById("gameCanvas");
const snakeboard_ctx = gameCanvas.getContext("2d");

// snake coordinates
let snake = [
    {x: 200, y: 200},
    {x: 190, y: 200},
    {x: 180, y: 200},
    {x: 170, y: 200},
    {x: 160, y: 200}
  ]
// inital colors
const board_background = "#353535";
const snake_col = '#c7a900';
const snake_border = '#000';


main();
    
    // main function called repeatedly to keep the game running
    function main() {
        clearCanvas();
        drawSnake();
    }
    
    // draw a border around the canvas
    function clearCanvas() {
      //  Select the colour to fill the drawing
      snakeboard_ctx.fillStyle = board_background;
      //  Select the colour for the border of the canvas
    //   snakeboard_ctx.strokestyle = board_border;
      // Draw a "filled" rectangle to cover the entire canvas
      snakeboard_ctx.fillRect(0, 0, snakeboard.width, snakeboard.height);
      // Draw a "border" around the entire canvas
    //   snakeboard_ctx.strokeRect(0, 0, snakeboard.width, snakeboard.height);
    }
    
      // Draw each part
    function drawSnake() {
      snake.forEach(drawSnakePart)
    }
    
    // Draw one snake part
    function drawSnakePart(snakePart) {
      snakeboard_ctx.fillStyle = snake_col;
      snakeboard_ctx.strokestyle = snake_border;
 
      snakeboard_ctx.fillRect(snakePart.x, snakePart.y, 10, 10);
      snakeboard_ctx.strokeRect(snakePart.x, snakePart.y, 10, 10);
    }
    

