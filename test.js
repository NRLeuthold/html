function getData() {
    const response = await fetch('https://ghibliapi.herokuapp.com/films')
    const data = await response.json()
    return data;
}

console.log(getData());
console.log("TESTING");