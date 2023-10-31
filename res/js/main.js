const point = document.getElementById("point")
const startgame = document.getElementById("startgame")

let pointInterval;

startgame.onclick = ( ) => {
    startgame.style.display = "none"
startPointInterval();

}
const movePoint = (element, x, y) => {
element.style.top = `${y}px`;
element.style.left = `${x}px`;

}
const startPointInterval = () => {
    clearInterval(pointInterval)
    setPointClick(point);
    pointInterval = setInterval(()=>{
        setSize(point, getRandomNumber(50,70));
        movePoint(point, getRandomNumber(100,600), getRandomNumber(100,600));
    },700);
}

const getRandomNumber = (minimum, maximum) => Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
const setPointClick = (element) => {
    element.onclick = () => {
        element.innerText++;

    }
}
const setSize = (element, size) => {
element.style.width = `${size}px`;
element.style.height = `${size}px`;
}

