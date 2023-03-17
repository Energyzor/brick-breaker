import data from "../../data"

export function BrickCollision(ballObj, brick) {
    const ballNextX = ballObj.x + ballObj.dx;
    const ballNextY = ballObj.y + ballObj.dy;

    // Check if ball is colliding with brick
    if (
        ballNextX + ballObj.rad >= brick.x &&
        ballNextX - ballObj.rad <= brick.x + brick.width &&
        ballNextY + ballObj.rad >= brick.y &&
        ballNextY - ballObj.rad <= brick.y + brick.height &&
        !brick.broke
    ) {
        const ballPrevX = ballObj.x - ballObj.dx;
        const ballPrevY = ballObj.y - ballObj.dy;

        const prevCollisionSide = (() => {
            if (ballPrevX >= brick.x + brick.width) return "right";
            if (ballPrevX <= brick.x) return "left";
            if (ballPrevY >= brick.y + brick.height) return "bottom";
            if (ballPrevY <= brick.y) return "top";
        })();

        const nextCollisionSide = (() => {
            if (ballNextX >= brick.x + brick.width) return "right";
            if (ballNextX <= brick.x) return "left";
            if (ballNextY >= brick.y + brick.height) return "bottom";
            if (ballNextY <= brick.y) return "top";
        })();

        const hasCollidedHorizontally =
            (prevCollisionSide === "left" && nextCollisionSide === "right") ||
            (prevCollisionSide === "right" && nextCollisionSide === "left");

        const hasCollidedVertically =
            (prevCollisionSide === "top" && nextCollisionSide === "bottom") ||
            (prevCollisionSide === "bottom" && nextCollisionSide === "top");

        if (hasCollidedHorizontally) {
            ballObj.dx = -ballObj.dx;
        }
        if (hasCollidedVertically) {
            ballObj.dy = -ballObj.dy;
        }

        // Update brick properties based on number of hits
        brick.hits++;
        if (brick.hits >= brick.maxHits) {
            brick.broke = true;
        } else if (brick.hits === 2) {
            brick.color = "yellow";
        } else if (brick.hits === 1) {
            brick.color = "green";
        }

        // Increase player score
        data.player.score += 10;

        // Return information about collision
        return {
            hit: true,
            axis: hasCollidedHorizontally ? "X" : "Y",
        };
    }

    // No collision detected
    return {
        hit: false,
        axis: null,
    };
}