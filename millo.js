let hello = {
    'Tester Board': {
        'To Do': ['Laundry', 'Buy Apples', 'Pay Phone Bill'],
        'Doing': ['Laundry', 'Studying Javascript', 'Studying HTML', 'Studying Ruby'],
        'Done': ['Laundry']
    },
    'Dreams': {
        'Wish List': ['Conquer the Seven Kingdoms', 'Get my baby back', 'My hand needs to chill'],
    }
};

function listBoards() {
    let counter = 1;
    for (let board in hello) {
        if (counter === 1) {
            console.log(`------------------`)
        }
        console.log(`${counter}- ${board}\n------------------`);
        counter += 1;
    }

};

function createBoard(boardName) {
    for (let check in hello) {
        if (check == boardName) {
            return "Board already exists";
        }
    }

    hello[boardName] = {}
    return `Board "${boardName}" was created`;
};

function removeBoard(boardName) {
    for (let check in hello) {
        if (check == boardName) {
            delete hello[boardName];
            return `Board ${boardName} was removed`;
        }
    }
    return "Board does not exist";
};