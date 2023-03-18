export default function PaddleHit(data, paddleProps) {
    data.balls.forEach((ball) => {
        if (
            ball.x < paddleProps.x + paddleProps.width &&
            ball.x > paddleProps.x &&
            paddleProps.y + paddleProps.height > ball.y + ball.rad &&
            ball.y - ball.rad > paddleProps.y - paddleProps.height / 2
        ) {
            // CHECK WHERE THE ballObj HIT THE paddleProps
            let collidePoint = ball.x - (paddleProps.x + paddleProps.width / 2);

            // NORMALIZE THE VALUES
            collidePoint = collidePoint / (paddleProps.width / 2);

            // LIMIT THE COLLIDE POINT VALUE
            collidePoint = Math.max(Math.min(collidePoint, 0.7), -0.7);

            // CALCULATE THE ANGLE OF THE ballObj
            let angle = (collidePoint * Math.PI) / 3;

            ball.dx = ball.speed * Math.sin(angle);
            ball.dy = -ball.speed * Math.cos(angle);
        }
    });
}