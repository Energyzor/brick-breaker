export function BallMovement(ctx, data) {
    data.balls.forEach((ball) => {
        ball.x += ball.dx;
        ball.y += ball.dy;




        // Draw the ball
        let balls = new Ball(ball.x, ball.y, ball.rad, ball.dx, ball.dy);
        balls.draw(ctx);
    });
}


class Ball {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.dx = 5;
        this.dy = 5;
        this.rad = 10;

    }

    draw(ctx) {
        ctx.beginPath();
        ctx.fillStyle = "red";
        ctx.arc(this.x, this.y, this.rad, 0, 2 * Math.PI);
        ctx.strokeStyle = "black";
        ctx.lineWidth = 2;
        ctx.fill();
        ctx.stroke();
    }
}