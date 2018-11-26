// We start with our variables that will be essential for our application.
var recettes = [];
var depense = [];
var petitcredit = ["Vous pourriez faire d'autres courses", "Vous pourriez aller boire un verre avec des amis", "Vous pourriez aller au cinema en famille", "Vous pourriez faire un don a une association"];
var moyCredit = ["S'offrir un week-end dans un lieu touristique, ca vous dit ?", "Vous pourriez vous acheter du nouveau mobilier", "Faites vous plaisir, tout simplement"];
var groCredit = ["Vous pourriez rire au nez de votre banquier", "Vous pourriez acheter une PS4 comme Simon", "Vous pourriez lancer des billets a la foule en délire", "Vous pourriez vous habiller comme une Rock-star"];
var sommeRecettes = 0;
var sommeDepenses = 0;
var rdmPticredit = petitcredit[Math.floor(Math.random() * petitcredit.length)];
var rdmMoyCredit = moyCredit[Math.floor(Math.random() * moyCredit.length)];
var rdmGroCredit = groCredit[Math.floor(Math.random() * groCredit.length)];

// Then, we will listen our 2 main buttons, we call them "envoiRecettes" and "envoiDepenses" to figure out that we are sending all the info to our appropriate arrays.

document.getElementById("envoiRecettes").addEventListener("click", function () {


    var valeurEntree1 = document.getElementById("entree1").value;
    var valeurEntree2 = document.getElementById("entree2").value;
    var valeurEntree3 = document.getElementById("entree3").value;
    var valeurEntree4 = document.getElementById("entree4").value;
    var valeurEntree5 = document.getElementById("entree5").value;
    var valeurEntree6 = document.getElementById("entree6").value;


// Here, if the user registers nothing, we tell the input to send us "0" by default, in order to avoid a NaN error.

    if (!valeurEntree1) {

        valeurEntree1 = 0;

    }

    if (!valeurEntree2) {

        valeurEntree2 = 0;

    }

    if (!valeurEntree3) {

        valeurEntree3 = 0;

    }

    if (!valeurEntree4) {

        valeurEntree4 = 0;

    }

    if (!valeurEntree5) {

        valeurEntree5 = 0;

    }

    if (!valeurEntree6) {

        valeurEntree6 = 0;

    }


    // We push the values to the array

    recettes.push(valeurEntree1, valeurEntree2, valeurEntree3, valeurEntree4, valeurEntree5, valeurEntree6);
    console.log(recettes);

    // And we add the values, as long as the array can be, in order to have a total.

    for (var i = 0; i < recettes.length; i++) {

        sommeRecettes += parseFloat(recettes[i]);

    }


    document.getElementById("resultatRev").innerHTML = "Vous avez un total de revenu à " + sommeRecettes + " Euros.";


    document.getElementById("envoiRecettes").disabled = true; // We use a "disabled" property, the user can only click the button one time. This avoids our programm to be messed up.

    console.log(sommeRecettes);

});

// We catch the earnings value and show it a the last container.

    document.getElementById("enEpargne").addEventListener("click", function () {

        var entreeEpargne = document.getElementById("entree7").value;

        if (!entreeEpargne) {

            entreeEpargne = 0;

        }

        document.getElementById("resultatEpargne").innerHTML = "Vous avez une épargne de " + entreeEpargne + " Euros";

        document.getElementById("enEpargne").disabled = true;

        console.log(entreeEpargne);

    });

// We will do the previous operations to "envoiDepenses" as well.

document.getElementById("envoiDepenses").addEventListener("click", function () {


    let valeurDep1 = document.getElementById("depense1").value;
    let valeurDep2 = document.getElementById("depense2").value;
    let valeurDep3 = document.getElementById("depense3").value;
    let valeurDep4 = document.getElementById("depense4").value;
    let valeurDep5 = document.getElementById("depense5").value;
    let valeurDep6 = document.getElementById("depense6").value;
    let valeurDep7 = document.getElementById("depense7").value;
    let valeurDep8 = document.getElementById("depense8").value;
    let valeurDep9 = document.getElementById("depense9").value;
    let valeurDep10 = document.getElementById("depense10").value;

    let valeurDep11 = document.getElementById("depensehebdo1").value * 4;
    let valeurDep12 = document.getElementById("depensehebdo2").value * 4;
    let valeurDep13 = document.getElementById("depensehebdo3").value / 12;
    let valeurDep14 = document.getElementById("depensehebdo4").value * 4;
    let valeurDep15 = document.getElementById("depensehebdo5").value;


    if (!valeurDep1) {

        valeurDep1 = 0;

    }

    if (!valeurDep2) {

        valeurDep2 = 0;

    }

    if (!valeurDep3) {

        valeurDep3 = 0;

    }


    if (!valeurDep4) {

        valeurDep4 = 0;

    }

    if (!valeurDep5) {

        valeurDep5 = 0;

    }

    if (!valeurDep6) {

        valeurDep6 = 0;

    }

    if (!valeurDep7) {

        valeurDep7 = 0;

    }

    if (!valeurDep8) {

        valeurDep8 = 0;

    }

    if (!valeurDep9) {

        valeurDep9 = 0;

    }

    if (!valeurDep10) {

        valeurDep10 = 0;

    }

    if (!valeurDep11) {

        valeurDep11 = 0;

    }

    if (!valeurDep12) {

        valeurDep12 = 0;

    }

    if (!valeurDep13) {

        valeurDep13 = 0;

    }

    if (!valeurDep14) {

        valeurDep14 = 0;

    }

    if (!valeurDep15) {

        valeurDep15 = 0;

    }


    depense.push(valeurDep1, valeurDep2, valeurDep3, valeurDep4, valeurDep5, valeurDep6, valeurDep7, valeurDep8, valeurDep9,
        valeurDep10, valeurDep11, valeurDep12, valeurDep13, valeurDep14, valeurDep15);

    console.log(depense);


    for (var i = 0; i < depense.length; i++) {

        sommeDepenses += parseFloat(depense[i]);

    }

    document.getElementById("resultatDep").innerHTML = "Vous avez un total de dépenses à " + sommeDepenses + " Euros.";

    document.getElementById("envoiDepenses").disabled = true;

    var resultatEuros = sommeRecettes - sommeDepenses; // Here, we declare a variable in order to collect the result, and we send it to the "result" screen.

    document.getElementById("resultat").innerHTML = "Vous avez un bilan financier de " + resultatEuros + " Euros.";

    console.log(sommeDepenses);

    if (resultatEuros > 0 && resultatEuros < 50) {

        document.getElementById("resultat").innerHTML += rdmPticredit;
    }

    else if (resultatEuros > 50 && resultatEuros < 150) {

        document.getElementById("resultat").innerHTML += rdmMoyCredit;
    }

    else if (resultatEuros > 150) {

        document.getElementById("resultat").innerHTML += rdmGroCredit;
    }

});


// We create a function, this will allow the user to obtain new inputs.

function nouvRevenu() {

    var nLabel = document.createElement("label");
    var nInput = document.createElement("input");
    var nBtn = document.createElement("button");
    var nspace = document.createElement("br");

    nLabel.innerHTML = "Veuillez entrer en chiffres votre autre revenu :";
    nInput.placeholder = "Montant en chiffres";
    nInput.type = "number";
    nInput.id = "nouvEntree";
    nBtn.onclick = soumettreTabRev;
    nBtn.id = "bTnRev";
    nBtn.innerHTML = "Ajouter au calcul";

    document.getElementById("container_recettes").appendChild(nLabel);
    document.getElementById("container_recettes").appendChild(nInput);
    document.getElementById("container_recettes").appendChild(nBtn);
    document.getElementById("container_recettes").appendChild(nspace);

}


function nouvDepense() {

    var nLabel = document.createElement("label");
    var nInput = document.createElement("input");
    var nBtn = document.createElement("button");
    var nspace = document.createElement("br");

    nLabel.innerHTML = "Veuillez entrer en chiffres votre autre dépense :";
    nInput.placeholder = "Montant en chiffres";
    nInput.type = "number";
    nInput.id = "nouvDepense";
    nBtn.onclick = soumettreTabDep;
    nBtn.id = "bTnDep";
    nBtn.innerHTML = "Ajouter au calcul";

    document.getElementById("container_depenses").appendChild(nLabel);
    document.getElementById("container_depenses").appendChild(nInput);
    document.getElementById("container_depenses").appendChild(nBtn);
    document.getElementById("container_depenses").appendChild(nspace);


}

console.log(sommeRecettes);
console.log(sommeDepenses);

// We collect the info and send it to our "depense" array.

function soumettreTabDep() {

    var nDepense = document.getElementById("nouvDepense").value;

    depense.push(nDepense);

    console.log(nDepense);

    document.getElementById("bTnDep").disabled = true;
}


function soumettreTabRev() {

    var nEntree = document.getElementById("nouvEntree").value;

    recettes.push(nEntree);

    console.log(nEntree);

    document.getElementById("bTnRev").disabled = true;

}

// And finally, we play with the displays, this will allow the user to navigate between our "containers"

function finalPage() {

    document.getElementById("container_depenses").style.display = "none";
    document.getElementById("container_resultat").style.display = "block";

}

function nouvPage() {

    document.getElementById("container_recettes").style.display = "none";
    document.getElementById("container_depenses").style.display = "block";

}

function retourRec() {
    document.getElementById("container_depenses").style.display = "none";
    document.getElementById("container_recettes").style.display = "block";
    document.getElementById("envoiRecettes").disabled = false;

}

function refresh() {

    window.location.reload();

}

function resetDepense() {
    sommeDepenses = 0;
    document.getElementById("envoiDepenses").disabled = false;
    depense.splice(0, depense.length - 1);
    console.log(depense);

    document.getElementById("depense1").value = "";
    document.getElementById("depense2").value = "";
    document.getElementById("depense3").value = "";
    document.getElementById("depense4").value = "";
    document.getElementById("depense5").value = "";
    document.getElementById("depense6").value = "";
    document.getElementById("depense7").value = "";
    document.getElementById("depense8").value = "";
    document.getElementById("depense9").value = "";
    document.getElementById("depense10").value = "";
    document.getElementById("depensehebdo1").value = "";
    document.getElementById("depensehebdo2").value = "";
    document.getElementById("depensehebdo3").value = "";
    document.getElementById("depensehebdo4").value = "";
    document.getElementById("depensehebdo5").value = "";

}

function resetEntree() {

    sommeRecettes = 0;
    document.getElementById("enEpargne").disabled = false;
    document.getElementById("envoiRecettes").disabled = false;
    recettes.splice(0, recettes.length - 1);
    console.log(recettes);

    console.log(sommeRecettes);

    document.getElementById("entree1").value = "";
    document.getElementById("entree2").value = "";
    document.getElementById("entree3").value = "";
    document.getElementById("entree4").value = "";
    document.getElementById("entree5").value = "";
    document.getElementById("entree6").value = "";
    document.getElementById("entree7").value = "";
}