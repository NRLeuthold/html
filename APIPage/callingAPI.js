var name = yourName.value;

var ageUrl = `https://api.agify.io?name=${name}`;
var genderUrl = `https://api.genderize.io?name=${name}`;
var nationalityUrl = `https://api.nationalize.io?name=${name}`;

const age = document.getElementById("age");
const gender = document.getElementById("gender");
const nationality = document.getElementById("nationality");

fetch(ageUrl)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        age = data.age;
        console.log(age);
        age.textContent = age;
    });

fetch(genderUrl)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        gender = data.gender;
        console.log(gender);
        gender.textContent = gender;
    });

fetch(nationalityUrl)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        nationality = data.country;
        console.log(nationality);
        nationality.textContent = nationality;
    });

//APIOutput.textContent = `AI thinks you are ${age} years old, ${gender}, and from ${nationality}.`;
