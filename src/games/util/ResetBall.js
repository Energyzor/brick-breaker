import data from "../../data";
import ResetBall from "./ResetBall";

export default function AllBroken(bricks, player, canvas, balls) {
    let { brickObj, paddleProps } = data;
    let total = 0;
    for (let i = 0; i < bricks.length; i++) {
        if (bricks[i].broke === true) {
            total++;
        }
    }
    if (total === bricks.length) {
        player.level++;
        for (let i = 0; i < balls.length; i++) {
            ResetBall(balls[i], canvas, paddleProps);
        }
        brickObj.y = 1;
    }
}