const boxes = [
    { name: 'a', sound: 'sounds/green.mp3' },
    { name: 'b', sound: 'sounds/red.mp3' },
    { name: 'c', sound: 'sounds/blue.mp3' },
    { name: 'd', sound: 'sounds/yellow.mp3' },
]

// making the Queue for boxes to click
let boxesQueue = []
let index = 0
let level = 0
let gameOn = false
document.querySelector('h1').addEventListener('click', () => {
    if (!gameOn) {
        startGame()
    }
})

document.querySelectorAll('.box').forEach((elem) => {

    elem.addEventListener('click', () => {
        
        switch (elem.id) {
            case 'a':
                const sound1 = new Audio(boxes[0].sound)
                sound1.play()
                break;
            case 'b':
                const sound2 = new Audio(boxes[1].sound)
                sound2.play()
                break;
            case 'c':
                const sound3 = new Audio(boxes[2].sound)
                sound3.play()
                break;
            case 'd':
                const sound4 = new Audio(boxes[3].sound)
                sound4.play()
                break;
            default:
                break;
        }

        elem.classList.add('clickAnimation')

        setTimeout(() => {
            elem.classList.remove('clickAnimation')
        }, 500)

        gameLogic(elem.id, boxesQueue[index])
    })
    
})

document.querySelector('.okay').addEventListener('click', () => {
    document.querySelector('.intruction').style.display = 'none'
})


function getRandomBox() {
    const randomNum = Math.floor(Math.random() * 4)
    const box = document.querySelector(`#${boxes[randomNum].name}`) //select the box i.e. (a, b, c, d)

    box.classList.add('boxAnimation')
    
    setTimeout(() => {
        box.classList.remove('boxAnimation')
    }, 500);

    boxesQueue.push(boxes[randomNum].name)
}

function gameover() {
    const worng = new Audio('sounds/wrong.mp3')
    worng.play()

    document.querySelector('.mainHeading').innerHTML = 'Game Over !! Click Here To Start Again'
    
    index = 0
    boxesQueue = []
    level = 0
    document.querySelector('.level').innerHTML = `Level ${level}`

    document.querySelector('body').style.backgroundColor = 'red'
    setTimeout(() => {
        document.querySelector('body').style.backgroundColor = '#011F3F'
    }, 1000);

    gameOn = false

}


function startGame() {
    document.querySelector('.mainHeading').innerHTML = 'Keep Going'
    gameOn = true
    getRandomBox()
}


function gameLogic(id, boxesQueueIndex) {
    if (id !== boxesQueueIndex) {
        gameover()
    } else {
        if (index === boxesQueue.length - 1) {
            level += 1
            document.querySelector('.level').innerHTML = `Level ${level}`
            index = 0
            getRandomBox()
        } else {
            index+=1
        }
    }
}
            
