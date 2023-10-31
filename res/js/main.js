const point = document.getElementById("point")
const startgame = document.getElementById("startgame")
const timeInfo = document.getElementById("timeInfo")

let pointInterval;

startgame.onclick = () => {
    startgame.style.display = "none"
    startPointInterval();


};
const movePoint = (element, x, y) => {
    element.style.top = `${y}px`;
    element.style.left = `${x}px`;

};
const startPointInterval = () => {
    clearInterval(pointInterval);
    setPointClick(point);
    pointInterval = setInterval(() => {
        setSize(point, getRandomNumber(40, 70));
        movePoint(point, getRandomNumber(parseFloat(point.style.width), window.innerWidth - parseFloat(point.style.width)), getRandomNumber(parseFloat(point.style.height), window.innerHeight - parseFloat(point.style.height)));
    }, 600);
};

const getRandomNumber = (minimum, maximum) =>
    Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;


let timeStart = 0;
const setPointClick = (element) => {
    element.onclick = () => {
if (timeStart ==0) {
    timeStart = performance.now();
}else {
    let timeEnd = performance.now();
    let result = timeEnd - timeStart;
    timeInfo.innerText = `Time: ${result}ms`
    timeStart = performance.now();
}
        element.innerText++;
        movePoint(point, getRandomNumber(parseFloat(point.style.width), window.innerWidth - parseFloat(point.style.width)), getRandomNumber(parseFloat(point.style.height), window.innerHeight - parseFloat(point.style.height)));
    };
};
const setSize = (element, size) => {
    element.style.width = `${size}px`;
    element.style.height = `${size}px`;
};

