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

function displayBoard(boardName) {
    let board = hello[boardName];
    if (board === undefined) {
        return "Board not found";
    } else {
        for (let content in board) {
            console.log(`\n--------------\n${content}\n--------------\n`);
            for (let item of board[content]){
                console.log(`> ${item}`);
            }
        }
    }
};

function createList(boardName, listName) {
    let board = hello[boardName];
    if (board === undefined) {
        return "Board not found";
    } else { 
        let list = board[listName];
        if (list === undefined) {
            hello[boardName][listName] = [];
            return `List ${listName} was added to ${boardName}`
        } else {
            return "List name already exists";
        }
    }
}

function createCard(boardName, listName, cardName) {
    let board = hello[boardName];
    if (board === undefined) {
        return "Board does not exist";
    } else {
        let list = board[listName];
        if (list === undefined) {
            return "List does not exist";
        } else {
            hello[boardName][listName].push(cardName);
            return `Card ${cardName} pushed to list ${listName}`;
        }
    }
}

function removeList(boardName, listName) {
    let board = hello[boardName];
    if (board === undefined) {
        return "Board does not exist";
    } else {
        let list = board[listName];
        if (list === undefined) {
            return "List does not exist";
        } else {
            delete board[listName];
            return `List ${listName} was deleted from ${boardName}`;
        }
    }
}

function removeCard(boardName, listName, cardIndex) {
    let board = hello[boardName];
    if (board === undefined) {
        return "Board does not exist";
    } else {
        let list = board[listName];
        if (list === undefined) {
            return "List does not exist";
        } else {
            let cardName = hello[boardName][listName][cardIndex];
            if (cardName === undefined) {
                return "Card does not exist";
            } else {
                hello[boardName][listName].splice(cardIndex,1);
                return `Card ${cardName} was deleted from list ${listName}`;
            }
        }
    }
}

function moveCard(boardName, fromList, toList, fromCardIndex, toCardIndex) {
    let board = hello[boardName];
    if (board === undefined) {
        return "Board does not exist";
    } else {
        let from = board[fromList];
        if (from === undefined) {
            return "fromList does not exist";
        } else {
            let to = board[toList];
            if (to === undefined) {
                return "toList does not exist";
            } else {
                let fromIndex = board[fromList][fromCardIndex];
                if (fromIndex === undefined) {
                    return "fromCardIndex is invalid";
                } else {
                    let toIndex = board[toList][toCardIndex];
                    if (toIndex === undefined) {
                        return "toCardIndex is invalid";
                    } else {
                        let insert = hello[boardName][fromList][fromCardIndex];
                        hello[boardName][fromList].splice(fromCardIndex, 1);
                        hello[boardName][toList].splice(toCardIndex,0,insert);
                        return `Transferred ${insert} from ${fromList} to ${toList}`;
                    }
                }
            }
        }
    }
}