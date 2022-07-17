var name = yourName.value;

var ageUrl = `https://api.agify.io?name=${name}`;
var genderUrl = `https://api.genderize.io?name=${name}`;
var nationalityUrl = `https://api.nationalize.io?name=${name}`;

var age;
var gender;
var nationality;

fetch(ageUrl)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        age = data.age;
        APIOutput.textContent = age;
    });

fetch(genderUrl)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        gender = data.gender;
        APIOutput.textContent = gender;
    });

fetch(nationalityUrl)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        nationality = data.country;
        APIOutput.textContent = nationality;
    });

APIOutput.textContent = `AI thinks you are ${age} years old, ${gender}, and from ${nationality}.`;
