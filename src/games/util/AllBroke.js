import data from "../../data";
import ResetBall from "./ResetBall";
import Brick from "../Brick";
export default function AllBroken(bricks, player, canvas, ballObj, ctx) {
    let { brickObj, paddleProps } = data;
    let total = 0;
    for (let i = 0; i < bricks.length; i++) {
        if (bricks[i].broke === true) {
            total++;
        }
    }
    if (total === bricks.length) {
        if (player.level === 10) {
            alert("You Win! Press OK to restart");
            player.level = 1;
            player.lives = 5;
            player.score = 0;
            ResetBall(ballObj, canvas, paddleProps, brickObj);
            bricks.length = 0;
            brickObj.y = 10;
            Brick(player.level, bricks, canvas, brickObj, ctx);
        } else {
            player.level++;
            ResetBall(ballObj, canvas, paddleProps, brickObj);
            brickObj.y = 10;
            Brick(player.level, bricks, canvas, brickObj, ctx);
        }
    }
}