(function () {
  "use strict";

  let form = document.getElementById("formcontact");

  form.addEventListener(
    "submit",
    function (event) {
      Array.from(form.elements).forEach((input) => {
        if (input.type !== "submit") {
          if (!validateFields(input)) {
            event.preventDefault();
            event.stopPropagation();

            input.classList.remove("is-valid");
            input.classList.add("is-invalid");
            input.nextElementSibling.style.display = "block";
          } else {
            input.nextElementSibling.style.display = "none";
            input.classList.remove("is-invalid");
            input.classList.add("is-valid");
          }
        }
      });
    },
    false
  );
})();

// Validation des conditions des inputs --------------------------------

// Validation d'un champ REQUIRED
function validateRequired(input) {
  return !(input.value == null || input.value == "");
}

// Validation du nombre de caractère min et max
function validateLength(input, minLength, maxLength) {
  return !(input.value.length < minLength || input.value.length > maxLength);
}

// Validation des caractères : latin et lettres
function validateText(input) {
  return input.value.match("^[A-Za-z]+$");
}

// Validation de l'email
function validateEmail(input) {
  let EMAIL = input.value;
  let POSAT = EMAIL.indexOf("@");
  let POSDOT = EMAIL.lastIndexOf(".");

  return !(POSAT < 1 || POSDOT - POSAT < 2);
}

// Validation d'un checkbox
function validateTerms(input) {
  return input.checked;
}

// Validation des champs --------------------------------
function validateFields(input) {
  let fieldName = input.name;

  // input NOM
  if (fieldName == "inputname") {
    if (!validateRequired(input)) {
      return false;
    }
    if (!validateLength(input, 2, 20)) {
      return false;
    }
    if (!validateText(input)) {
      return false;
    }

    return true;
  }

  // input PRENOM
  if (fieldName == "inputfirstname") {
    if (!validateRequired(input)) {
      return false;
    }
    if (!validateLength(input, 2, 20)) {
      return false;
    }
    if (!validateText(input)) {
      return false;
    }

    return true;
  }

  // input EMAIL
  if (fieldName == "inputmail") {
    if (!validateRequired(input)) {
      return false;
    }
    if (!validateEmail(input)) {
      return false;
    }

    return true;
  }

  // input TEXTAREA
  if (fieldName == "inputmessage") {
    if (!validateRequired(input)) {
      return false;
    }
    if (!validateLength(input, 2, 1000)) {
      return false;
    }

    return true;
  }

  // input CHECKBOX
  if (fieldName == "gridCheck") {
    if (!validateTerms(input)) {
      return false;
    }

    return true;
  }
}
