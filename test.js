var request = new XMLHttpRequest();

request.open("GET", "https://passwordwolf.com/api", true);

request.onload = function () {
    var data = JSON.parse(this.response);

    data.forEach((password) => {
        console.log(password);
    });
};

request.send();
