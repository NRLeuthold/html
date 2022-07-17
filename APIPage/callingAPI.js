var name = yourName.value;

var ageUrl = `https://api.agify.io?name=${name}`;
var genderUrl = `https://api.genderize.io?name=${name}`;
var nationalityUrl = `https://api.nationalize.io?name=${name}`;

var age = document.getElementById("age");
var gender = document.getElementById("gender");
var nationality = document.getElementById("nationality");

fetch(ageUrl)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        age = data.age;
        age.textContent = age;
    });

fetch(genderUrl)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        gender = data.gender;
        gender.textContent = gender;
    });

fetch(nationalityUrl)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        nationality = data.country;
        nationality.textContent = nationality;
    });

//APIOutput.textContent = `AI thinks you are ${age} years old, ${gender}, and from ${nationality}.`;
