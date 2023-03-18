export default function WallCollision(data, canvas, paddleProps) {
    for (let i = 0; i < data.balls.length; i++) {
        let ball = data.balls[i];
        if (ball.y + ball.rad > canvas.height) {
            // ball hit bottom wall of canvas
            ball.y = canvas.height - ball.rad; // set y-coordinate to bottom of canvas
            ball.dy = -ball.dy; // reverse vertical velocity
        }
        if (ball.y - ball.rad < 0) {
            ball.dy *= -1;
        }
        if (ball.x + ball.rad > canvas.width || ball.x - ball.rad < 0) {
            ball.dx *= -1;
        }
        ball.x += ball.dx;
        ball.y += ball.dy;
    }
}