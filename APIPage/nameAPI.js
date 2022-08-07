useNameAPI.addEventListener("click", () => {
    if (yourName.value == "") {
        nameAPIOutput.style.display = "none";
        nameAPIOutputERR.style.display = "inline";
        return;
    }
    callAPIs();
    nameAPIOutput.style.display = "inline";
    nameAPIOutputERR.style.display = "none";
});

yourName.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        if (yourName.value == "") {
            nameAPIOutput.style.display = "none";
            nameAPIOutputERR.style.display = "inline";
            return;
        }
        callAPIs();
        nameAPIOutput.style.display = "inline";
        nameAPIOutputERR.style.display = "none";
    }
});

let regionNames = new Intl.DisplayNames(['en'], {type: 'region'});

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
            age.textContent = data.age + " year old,";
        })
        .catch((error) => {
            console.log(error);
        });

    fetch(genderUrl)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            gender.textContent = data.gender;
        })
        .catch((error) => {
            console.log(error);
        });

    fetch(nationalityUrl)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            nationality.textContent = " from " + regionNames.of(data.country[0].country_id) + ".";
        })
        .catch((error) => {
            console.log(error);
        });
}
