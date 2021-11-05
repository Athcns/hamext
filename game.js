const textElement = document.getElementById("current-prompt")
const historicElement = document.getElementById("historic-prompt")
const optionButtonsElement = document.getElementById("option-buttons")
const typeSpeed = 50;

var promptNum = 0;
let state = {}

// Function that creates the typewriter effect for the scenarios
function typewriter(text) {
    // Displays the previous scenarios
    if (promptNum != 0) {
        var tempHistoric = historicElement.innerHTML + "<br>" + textElement.innerHTML;
        historicElement.innerHTML = tempHistoric.replace("<span>|</span>", "");
        textElement.innerHTML = "";
    }
    promptNum++;

    textPosition = 0;
    var loop = setInterval(function() {
        if (textPosition < text.length + 1) {
            textElement.innerHTML = "> " + text.substring(0, textPosition) + "<span>|</span>";
            textPosition++;
        }
        else {
            clearInterval(loop);
        }
    }, typeSpeed)
}

function startGame() {
    state = {}
    showTextNode(1)
}

function showTextNode (textNodeIndex) {
    const textNode = textNodes.find(textNode => textNode.id === textNodeIndex)
    //textElement.innerText = textNode.text
    typewriter(textNode.text)

    while (optionButtonsElement.firstChild) {
        optionButtonsElement.removeChild(optionButtonsElement.firstChild)
    }

    textNode.options.forEach(option => {
        if (showOption(option)) {
            const button = document.createElement("button")
            button.innerText = option.text
            button.classList.add("btn")
            button.addEventListener("click", () => selectOption(option))
            optionButtonsElement.appendChild(button)

        }
    })
}

function showOption(option) {
    return option.requiredState == null || option.requiredState(state)
}

function selectOption(option) {
    const nextTextNodeId = option.nextText
    if (nextTextNodeId <= 0) {
        promptNum = 0;
        historicElement.innerHTML = "";
        return startGame();
    }
    state = Object.assign(state, option.setState)
    showTextNode(nextTextNodeId)
}

const textNodes = [
    {
        id: 1,
        text: "There is a sword left on the ground",
        options: [
            {
                text: "You pick up the sword",
                setState: { swordPickup: true },
                nextText: 2
            },
            {
                text: "You leave the sword alone",
                nextText: 2
            }
        ]
    },
    {
        id: 2,
        text: "A man comes asking for his missing sword",
        options: [
            {
                text: "Give the sword you found to him",
                requiredState: (currentState) => currentState.swordPickup,
                setState: { swordPickup: false, gold: true },
                nextText: 3
            },
            {
                text: "Tell the man you have not found it",
                nextText: 4
            }
        ]
    },
    {
        id: 3,
        text: "The man is thankful and left",
        options: [
            {
                text: "Finished Successfully"
            }
        ]
    },
    {
        id: 4,
        text: "Goblins shortly find you after the man left and killed you.",
        options: [
            {
                text: "Failed, Restart",
                nextText: -1
            }
        ]
    }
]

startGame()