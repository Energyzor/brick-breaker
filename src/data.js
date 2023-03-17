const data = {
    maxLevels: 10,
    initialBrickCount: 2,
    paddleProps: {
        height: 20,
        width: 200,
        x: 550,
        color: "yellow",
    },
    ballObj: {
        x: 500,
        y: 500,
        dx: 5,
        dy: 5,
        rad: 10,
        speed: 2,
        ballCount: 1,
        imgSrc: 'http://www.wpclipart.com/toys/balls/red_snooker_ball.png',
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
        lives: 5,
        score: 0,
        level: 1,
    },
    ballData: [{
            user: 'John',
            image: 'ball1.png',
            id: 1,
            points: 0,
        },
        {
            user: 'Sarah',
            image: 'ball2.png',
            id: 2,
            points: 0,
        },
        {
            user: 'Mike',
            image: 'ball3.png',
            id: 3,
            points: 0,
        },
    ],
};

export default data;