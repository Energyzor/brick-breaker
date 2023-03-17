// BrickData.js

const brickData = [];

function addBrickData(brick, level) {
    const data = {
        position: { x: brick.x, y: brick.y },
        color: brick.color,
        maxHits: brick.maxHits,
        level: level,
    };
    brickData.push(data);
}
//vine prost max hits asta vione acceasi valoare sau ceva nu recunoaste culoare nu cred ca l-am importat trebuia sa import functia si am importat valoarea
function updateBrickData(brick) {
    const index = brickData.findIndex(
        (data) => data.position.x === brick.x && data.position.y === brick.y
    );
    if (index >= 0) {
        if (brick.hits === brick.maxHits) {
            brickData.splice(index, 1);
        } else {
            brickData[index].color = brick.color;
            brickData[index].maxHits = brick.maxHits;
        }
    }
}

export { brickData, addBrickData, updateBrickData };