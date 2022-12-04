let validFirstName = false;
let validLastName = false;
let validAddress = false;
let validCity = false;
let validState = false;
let validZip = false;
let validCell = false;
let validEmail = false;
let validCheckbox = false;
let regExp = /^[a-zA-Z]+$/;

/**
 * Entry point
 */
document.addEventListener("DOMContentLoaded", function(event) {
    initValidation("#myform");
});

/**
 * Uses regEx to validate first name. Can only contain letters, no numbers or special characters.
 * Adds error message if invalid
 * @param element element widget to validate
 * @returns {boolean} returns true if valid, false if invalid
 */
function validateFirst(element) {
    let valid =  validateRegEx(regExp, element);
    if (valid) {
        removeErrorMsg("errFirst");
        return true;
    } else {
        addErrorMsg("Invalid first name", "errFirst");
        return false;
    }
}

/**
 * Uses regEx to validate last name. Can only contain letters, no numbers or special characters.
 * Adds error message if invalid
 * @param element element widget to validate
 * @returns {boolean} returns true if valid, false if invalid
 */
function validateLast(element) {
    let valid =  validateRegEx(regExp, element);
    if (valid) {
        removeErrorMsg("errLast");
        return true;
    } else {
        addErrorMsg("Invalid last name", "errLast");
        return false;
    }
}

/**
 * Uses regEx to validate city. Can only contain letters, no numbers or special characters.
 * Adds error message if invalid
 * @param element element widget to validate
 * @returns {boolean} returns true if valid, false if invalid
 */
function validateCity(element) {
    let valid =  validateRegEx(regExp, element);
    if (valid) {
        removeErrorMsg("errCity");
        return true;
    } else {
        addErrorMsg("Invalid city name", "errCity");
        return false;
    }
}

/**
 * Uses regEx to validate address. Must start with a number.
 * Adds error message if invalid
 * @param element element widget to validate
 * @returns {boolean} returns true if valid, false if invalid
 */
function validateAddress(element) {
    let addressRe = /^\d/;
    let valid = validateRegEx(addressRe, element);
    if (valid) {
        removeErrorMsg("errAddress");
        return true;
    } else {
        addErrorMsg("Invalid address", "errAddress");
        return false;
    }
}

/**
 * Checks if input is a valid state by comparing it to states array.
 * Addes error message if state input is not valid
 * @param element element widget to validate
 * @returns {boolean} returns true if valid, false if invalid
 */
function validateState(element) {
    let states = [ 'AL', 'AK', 'AS', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'DC', 'FM', 'FL', 'GA', 'GU', 'HI', 'ID',
                   'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MH', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE',
                   'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'MP', 'OH', 'OK', 'OR', 'PW', 'PA', 'PR', 'RI', 'SC',
                   'SD', 'TN', 'TX', 'UT', 'VT', 'VI', 'VA', 'WA', 'WV', 'WI', 'WY' ];
    let input = element.value.toUpperCase();
    if (states.includes(input)) {
        element.classList.add("validated");
        element.classList.remove("invalid")
        removeErrorMsg("errState");
        return true;
    } else {
        element.classList.add("invalid");
        element.classList.remove("validated");
        addErrorMsg("Invalid state", "errState");
        return false;
    }
}

/**
 * Uses rexEx to validate zip code. Can be a 5 digit zip or 9 digit zip with dash.
 * Adds error message if invalid
 * @param element element widget to validate
 * @returns {boolean} returns true if valid, false if invalid
 */
function validateZip(element) {
    let zipRe = /(^\d{5}$)|(^\d{9}$)|(^\d{5}-\d{4}$)/;
    let valid =  validateRegEx(zipRe, element);
    if (valid) {
        removeErrorMsg("errZip");
        return true;
    } else {
        addErrorMsg("Invalid zip", "errZip");
        return false;
    }
}

/**
 * Uses regex to validate cell phone. Must be 10 digits only
 * Adds error message if invalid
 * @param element element widget to validate
 * @returns {boolean} returns true if valid, false if invalid
 */
function validateCell(element) {
    let cellRe = /^\d{10}$/;
    let valid = validateRegEx(cellRe, element);
    if (valid) {
        removeErrorMsg("errCell");
        return true;
    } else {
        addErrorMsg("Invalid cell phone", "errCell");
        return false;
    }
}

/**
 * Uses regex to validate email. Must contain @ and .
 * Adds error message if invalid
 * @param element element widget to validate
 * @returns {boolean} returns true if valid, false if invalid
 */
function validateEmail(element) {
    let emailRe = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,5}$/;
    let valid =  validateRegEx(emailRe, element);
    if (valid) {
        removeErrorMsg("errEmail");
        return true;
    } else {
        addErrorMsg("Invalid email address", "errEmail");
        return false;
    }
}

/**
 * Checks if regex is valid. Adds the validated class if valid or invalid class if not valid
 * @param regex regular expression
 * @param element element widget
 * @returns {boolean} return true if regex valid, false if invalid
 */
function validateRegEx(regex, element) {
    if (regex.exec(element.value)) {
        element.classList.add("validated");
        element.classList.remove("invalid")
        return true;
    } else {
        element.classList.add("invalid");
        element.classList.remove("validated");
        return false;
    }
}

/**
 * Adds error message li element to errors ul element
 * @param errorMsg message to display
 * @param id unique id
 */
function addErrorMsg(errorMsg, id) {
    let ul = document.getElementById("errors");
    let li = document.createElement("li");
    li.setAttribute("id", id);
    let msg = document.createTextNode(errorMsg);
    li.appendChild(msg);
    ul.appendChild(li);
}

/**
 * Removes error message li element from errors ul element
 * @param id unique id
 */
function removeErrorMsg(id) {
    let elementExists = document.getElementById(id);
    if (elementExists) {
        elementExists.remove();
    }
}

/**
 * Check if at least one check box is checked
 * @returns {boolean} returns true if at least one checkbox is checked
 */
function isOneChecked() {
    let checkboxes = document.querySelectorAll('input[name="check"]');
    for (let i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
            return true;
        }
    }
    return false;
}

/**
 * Used for validation checking. Acts as a 'main' function
 */
function initValidation() {
    const firstNameWidget = document.getElementById("first-name");
    const lastNameWidget = document.getElementById("last-name");
    const addressWidget = document.getElementById("address");
    const cityWidget = document.getElementById("city");
    const stateWidget = document.getElementById("state");
    const zipWidget = document.getElementById("zip");
    const cellWidget = document.getElementById("cell");
    const emailWidget = document.getElementById("email");
    const submitWidget = document.getElementById("submitBtn");

    // First Name
    firstNameWidget.addEventListener("change", function () {
        validFirstName = validateFirst(firstNameWidget);
    });

    // Last Name
    lastNameWidget.addEventListener("change", function () {
        validLastName = validateLast(lastNameWidget);
    });

    // Address
    addressWidget.addEventListener("change", function() {
        validAddress = validateAddress(addressWidget);
    });

    // City
    cityWidget.addEventListener("change", function() {
        validCity = validateCity(cityWidget);
    });

    // State
    stateWidget.addEventListener("change", function () {
        validState = validateState(stateWidget);
    });

    // Zip
    zipWidget.addEventListener("change", function() {
        validZip = validateZip(zipWidget);
    });

    // Cell
    cellWidget.addEventListener("change", function () {
        validCell = validateCell(cellWidget);
    });

    // Email
    emailWidget.addEventListener("change", function() {
        validEmail = validateEmail(emailWidget);
    });

    // Submit button
    submitWidget.addEventListener("click", function(event) {
        validateForm();
        event.preventDefault();
    });
}

/**
 * Validates the form after submit button is clicked. If valid the form displays
 * a thank you message
 */
function validateForm() {
    validCheckbox = isOneChecked();
    console.log(validCheckbox);
    if (validFirstName && validLastName && validAddress && validCity && validCity && validState
        && validZip && validCell && validEmail && validCheckbox) {
        removeErrorMsg("errForm");
        document.getElementById("thank-you").style.display = "block";
        document.getElementById("formId").style.display = "none";
    }
    else {
        addErrorMsg("Correct errors and resubmit", "errForm");
    }
}
