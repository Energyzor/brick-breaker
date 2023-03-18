const data = {
    maxLevels: 10,
    initialBrickCount: 2,
    paddleProps: {
        height: 20,
        width: 200,
        x: 900,
        color: "yellow",
    },
    ballObj: {
        x: 500,
        y: 500,
        dx: 5,
        dy: 5,
        rad: 10,
        speed: 2,

    },
    brickObj: {
        x: 0.5,
        y: 0.5,
        height: 20,
        density: 2,
        width: 10,
        colors: ['green', 'yellow', 'red'],
    },
    player: {
        name: 'Energy',

        score: 0,
        level: 1,
    },
    balls: [{
            id: 1,
            x: 500,
            y: 500,
            dx: 5,
            dy: 5,
            rad: 10,
            speed: 2,
            score: 0,

        },
        {
            id: 2,
            x: 450,
            y: 450,
            rad: 10,
            dx: 5,
            dy: 5,
            speed: 2,
            score: 0,
        },
        // Add more balls here...
    ]


};

export default data;