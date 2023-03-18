export default function PlayerStats(ctx, canvas, data) {
    // loop through data.balls array
    data.balls.forEach((ball, index) => {
        // display score for each ball
        ctx.font = "20px Arial";
        ctx.fillStyle = "white";
        ctx.fillText(`Ball ${index + 1} Score: ${ball.score}`, 20, 60 + index * 30);
    });

    // display other player stats as before
    // ...
}