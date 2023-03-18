import React, { useEffect, useRef } from "react";
import { BallMovement } from "./BallMovement";
import data from "../data";
import WallCollision from "./util/WallCollision";
import Paddle from "./Paddle";
import Brick from "./Brick";
import BrickCollision from './util/BrickCollision';
import PaddleHit from "./util/PaddleHit";
import PlayerStats from "./PlayerStats";
import AllBroken from "./util/AllBroke";
import ResetBall from "./util/ResetBall";
import brickData from "./util/BrickData";




let bricks = [];

let numOfBalls = data.balls.lenght;
let { paddleProps, brickObj } = data;
export default function Board() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const render = () => {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");
      paddleProps.y = canvas.height - 30;

      // Assign Bricks

      let newBrickSet = new Brick(data.player.level, bricks, canvas, brickObj);

      if (newBrickSet && newBrickSet.length > 0) {
        bricks = newBrickSet;
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      PlayerStats(ctx, canvas, data);

      // Display Bricks
      bricks.map((brick) => brick.draw(ctx));

      // Handle Ball Movement
      BallMovement(ctx, data);

      // Check all broken

      let allBroken = AllBroken(bricks, canvas, data.balls);
      if (allBroken) {
        // Increment level and reset ball and bricks
        for (let i = 0; i < data.balls.length; i++) {
          ResetBall(data.balls[i], canvas, paddleProps, brickObj);
        }
        bricks.length = 0;
        brickObj.y -= 20;

      }


      // Ball and Wall Collision
      WallCollision(data, canvas, paddleProps);

      // Brick Collision



      // let brickCollision;

      // for (let i = 0; i < bricks.length; i++) {
      //   brickCollision = BrickCollision(balls, bricks[i]);

      //   if (brickCollision.hit && !bricks[i].broke) {
      //     // console.log(brickCollision);
      //     if (brickCollision.axis === "X") {
      //       balls.dx *= -1;
      //       bricks[i].broke = true;
      //     } else if (brickCollision.axis === "Y") {
      //       balls.dy *= -1;
      //       bricks[i].broke = true;
      //     }
      //     player.score += 10;
      //   }
      // }

      // in BrickCollision function

      Paddle(ctx, canvas, paddleProps);

      // Paddle + Ball Collision
      PaddleHit(data, paddleProps);

      requestAnimationFrame(render);
    };
    render();
  }, []);

  return (
    <div style={{ textAlign: "center" }}>
      <h1 className="gameHeader">Breakout Game</h1>
      <canvas
        id="canvas"
        ref={canvasRef}
        onMouseMove={(event) =>
        (paddleProps.x =
          event.clientX -
          (window.innerWidth < 900 ? 10 : (window.innerWidth * 20) / 200) -
          paddleProps.width / 2 -
          10)
        }
        height="500"
        width={
          window.innerWidth < 900
            ? window.innerWidth - 20
            : window.innerWidth - (window.innerWidth * 20) / 100
        }
      />
    </div>
  );
}