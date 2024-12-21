
function init(){
    canvas = document.getElementById("snake-canvas");
    pen = canvas.getContext("2d");
    cs = 66;
    snake = {
        init_len : 5,
        color : "blue",
        cells: [],
        direction : "right",

        createSnake: function() {
            for (var i = this.init_len; i > 0; i--) {
                this.cells.push({ x: i, y: 0 });
            }
        },

        draw_snake: function() {
            for(var i = 0; i < this.init_len; i++) { 
                pen.fillStyle = this.color;
                pen.fillRect(this.cells[i].x*cs, this.cells[i].y*cs, cs - 2, cs - 2);
            }
        },

        update_snake: function() {
            console.log("updating snake...");
            this.cells.pop();
            var headX = snake.cells[0].x;
            var headY = snake.cells[0].y;
            if(snake.direction === "right") headX++;
            else if(snake.direction === "left") headX--;
            else if(snake.direction === "up") headY--;
            else if(snake.direction === "down") headY++;
        
            this.cells.unshift({x: headX, y: headY});

        }
    };

    snake.createSnake();

    function moveByKey(e) {
        // console.log(e.key);
        if(e.key === "ArrowRight") snake.direction = "right";
        else if(e.key === "ArrowLeft") snake.direction = "left";
        else if(e.key === "ArrowUp") snake.direction = "up";
        else if(e.key === "ArrowDown") snake.direction = "down";
        else return; 
    }
 
    // Adding a event listener on the document object
    document.addEventListener('keydown', moveByKey);
}

function draw() {
    pen.clearRect(0, 0, canvas.width, canvas.height);

    snake.draw_snake();
}

function update() {
    snake.update_snake();
   
}

function gameloop() {
    draw();
    update();
}

init();
var game = setInterval(gameloop, 100);