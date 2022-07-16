var ageUrl = "https://api.agify.io?name=noah";
var genderUrl = "https://api.genderize.io?name=noah";
var nationalityUrl = "https://api.nationalize.io?name=noah";
fetch(ageUrl)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        // Work with JSON data here
        console.log(data);
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
        console.log(data);
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
        console.log(data);
    })
    .catch((err) => {
        // Do something for an error here
    });
