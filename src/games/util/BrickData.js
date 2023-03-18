// BrickData.js

const brickData = [];

function addBrickData(brick, level) {
    const data = {
        position: { x: brick.x, y: brick.y },
        color: brick.color,
        maxHits: brick.maxHits,
        level: level,
        id: brickData.length + 1
    };
    brickData.push(data);
}

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

const BrickData = {
    brickData,
    addBrickData,
    updateBrickData,
    logBrickData: () => console.log(brickData)
};
export { addBrickData };
export default BrickData;