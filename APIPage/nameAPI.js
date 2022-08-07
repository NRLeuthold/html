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

yourName.addEventListener("keydown", function (event) {
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

let regionNames = new Intl.DisplayNames(["en"], { type: "region" });

function callAPIs() {
    var name = yourName.value;

    var ageUrl = `https://api.agify.io?name=${name}`;
    var genderUrl = `https://api.genderize.io?name=${name}`;
    var nationalityUrl = `https://api.nationalize.io?name=${name}`;

    const age = document.getElementById("age");
    const gender = document.getElementById("gender");
    const nationality = document.getElementById("nationality");

    const ageTransition1 = document.getElementById("ageTransition1");
    const genderTransition1 = document.getElementById("genderTransition1");
    const nationalityTransition1 = document.getElementById(
        "nationalityTransition1"
    );

    const ageTransition2 = document.getElementById("ageTransition2");
    const genderTransition2 = document.getElementById("genderTransition2");
    const nationalityTransition2 = document.getElementById(
        "nationalityTransition2"
    );

    fetch(ageUrl)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            console.log(typeof(data.age));
            if (data.age == "") {
                ageTransition1.textContent = "";
            }

            if (data.age != ""){
                ageTransition1.textContent = " a ";
                ageTransition2.textContent = " year old ";
            }
            age.textContent = data.age;
        })
        .catch((error) => {
            console.log(error);
        });

    fetch(genderUrl)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            console.log(typeof(data.country));

            if (data.gender == "") {
                genderTransition1.textContent = "";
            }

            if (data.gender != ""){
                if (age.textContent == ""){
                    genderTransition1.textContent = " a ";
                }
            }
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
            console.log(typeof(data.country));


            if (data.country == ""){
                nationalityTransition1.textContent = "";
            }

            if (data.country != ""){
                nationalityTransition1.textContent = " from ";
            }
            nationality.textContent =
                regionNames.of(data.country[0].country_id) + ".";
        })
        .catch((error) => {
            console.log(error);
        });
}
