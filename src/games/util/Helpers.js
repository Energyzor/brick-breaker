import { brickData } from "../util/BrickData.js"

export function getBrickColor(hitCount, level) {
    const data = brickData.find((brick) => brick.level === level);

    if (data) {
        const maxHits = data.maxHits;
        const color = data.brickcolor;

        if (hitCount >= maxHits) {
            return null;
        } else if (color === "green") {
            return "#0dd80d";
        } else if (color === "yellow") {
            return "#f7c808";
        } else if (color === "red") {
            return "#f70505";
        }
    }

    return null;
}