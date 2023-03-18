import data from "../data";
import { addBrickData } from "./util/BrickData";





export default function Brick(level, bricks, canvas, brick, ctx) {
    const spaceBetween = 1;
    const bricksPerRow = data.initialBrickCount;
    brick.width = (canvas.width - (bricksPerRow - 1) * spaceBetween) / bricksPerRow;
    let newbricks = [];

    if (!bricks) {
        return [];
    }

    if (bricks.length >= data.initialBrickCount * level) {
        return;
    }

    const offset = 50;
    let currentRow = 0;
    let currentColumn = 0;

    const colors = ["green", "yellow", "red"];
    const colorMaxHits = {
        green: 1,
        yellow: 2,
        red: 3,
    };

    for (let i = 0; i < data.initialBrickCount * level; i++) {
        const x = currentColumn * (brick.width + spaceBetween);
        const y = currentRow * (brick.height + spaceBetween) + offset;
        const color = colors[Math.floor(Math.random() * colors.length)];
        const maxHits = colorMaxHits[color];
        let newBrick = new SingleBrick(x, y, brick.width, brick.height, color, maxHits);

        newbricks.push(newBrick);
        addBrickData(newBrick);
        newBrick.draw(ctx);

        currentColumn++;

        if (currentColumn >= bricksPerRow) {
            currentColumn = 0;
            currentRow++;
        }
    }

    return newbricks;
}




// Constructor and case for SingleBrick

export class SingleBrick {
    constructor(x, y, w, h, color, maxHits) {
        this.x = x;
        this.y = y;
        this.width = w;
        this.height = h;
        this.color = color;
        this.maxHits = maxHits;
        this.hits = 0;
        this.broke = false;
    }

    draw(ctx) {
        if (ctx && !this.broke) {
            ctx.beginPath();
            ctx.rect(this.x, this.y, this.width, this.height);
            ctx.fillStyle = this.color;
            ctx.fillRect(this.x, this.y, this.width, this.height);
            ctx.fill();
            ctx.strokeRect(this.x, this.y, this.width, this.height);
            ctx.closePath();

            ctx.canvas.classList.add("brick");
        }
    }

    collide(ball) {
        if (
            ball.x + ball.rad > this.x &&
            ball.x - ball.rad < this.x + this.width &&
            ball.y + ball.rad > this.y &&
            ball.y - ball.rad < this.y + this.height
        ) {
            const dx = ball.x - (this.x + this.width / 2);
            const dy = ball.y - (this.y + this.height / 2);

            const width = ball.rad + this.width / 2;
            const height = ball.rad + this.height / 2;
            const crossWidth = width * dy;
            const crossHeight = height * dx;

            let axis = null;
            if (Math.abs(dx) <= width && Math.abs(dy) <= height) {
                if (crossWidth > crossHeight) {
                    axis = crossWidth > -crossHeight ? "bottom" : "left";
                } else {
                    axis = crossWidth > -crossHeight ? "right" : "top";
                }

                return {
                    hit: true,
                    axis,
                    id: ball.id,
                };
            }
        }
        return { hit: false };
    }

    hit() {
        this.hits++;
        if (this.hits >= this.maxHits) {
            this.broke = true;
            return true;
        } else {
            if (this.maxHits - this.hits === 2) {
                this.color = "yellow";
            } else if (this.maxHits - this.hits === 1) {
                this.color = "red";
            }
            return false;
        }
    }
}