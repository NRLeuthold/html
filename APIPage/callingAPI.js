var name = "noah";

var ageUrl = `https://api.agify.io?name=${name}`;
var genderUrl = `https://api.genderize.io?name=${name}`;
var nationalityUrl = `https://api.nationalize.io?name=${name}`;

var age = 16;
var gender = "male";
var nationality = "US";

fetch(ageUrl)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        // Work with JSON data here
        console.log(data.age);
    })
    .catch((err) => {
        // Do something for an error here
    });

fetch(genderUrl)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        // Work with JSON data here
        console.log(data.gender);
    })
    .catch((err) => {
        // Do something for an error here
    });

fetch(nationalityUrl)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        // Work with JSON data here
        console.log(data.country);
    })
    .catch((err) => {
        // Do something for an error here
    });

APIOutput.textContent = `AI thinks you are ${age} years old, ${gender}, and from ${nationality}.`;

