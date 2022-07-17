useNameAPI.addEventListener("click", () => {
    if (yourName.value == "") {
        APIOutput.style.display = "none";
        APIOutputERR.style.display = "inline";
        console.log("ERROR");
        return;
    }
    callAPIs();
    APIOutput.style.display = "inline";
    APIOutputERR.style.display = "none";
});

function callAPIs() {
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
            age.textContent = data.age;
        });

    fetch(genderUrl)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            gender.textContent = data.gender;
        });

    fetch(nationalityUrl)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            nationality.textContent = data.country[0].country_id;
            console.log(data);
        });
}
