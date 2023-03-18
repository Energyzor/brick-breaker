export default function BrickCollision(ball, bricks) {
    for (let i = 0; i < bricks.length; i++) {
        const brick = bricks[i]; // Change "brick" to "bricks[i]"
        const distanceX = Math.abs(ball.x - brick.x - brick.width / 2);
        const distanceY = Math.abs(ball.y - brick.y - brick.height / 2);

        if (distanceX > brick.width / 2 + ball.rad) {
            continue;
        }

        if (distanceY > brick.height / 2 + ball.rad) {
            continue;
        }

        if (distanceX <= brick.width / 2) {
            return {
                hit: true,
                axis: "Y",
                id: brick.id,
                brick: brick, // Add the brick object to the return value
            };
        }

        if (distanceY <= brick.height / 2) {
            return {
                hit: true,
                axis: "X",
                id: brick.id,
                brick: brick, // Add the brick object to the return value
            };
        }

        const dx = distanceX - brick.width / 2;
        const dy = distanceY - brick.height / 2;

        if (dx * dx + dy * dy <= ball.rad * ball.rad) {
            return {
                hit: true,
                axis: "C",
                id: brick.id,
                brick: brick, // Add the brick object to the return value
            };
        }
    }

    return {
        hit: false,
        axis: null,
        id: null,
        brick: null, // Add the brick object to the return value
    };
}