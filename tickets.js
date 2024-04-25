const numOfadultInput = document.getElementById("adult_tix");
const priceOfAdult = document.getElementsByClassName("adult_tix_price")[0].innerText;
const total_cost = document.getElementById("cost");
const total_tax = document.getElementById("tax");

const numOfchildInput = document.getElementById("child_tix");
const priceOfChild = document.getElementsByClassName("child_tix_price")[0].innerText;

function displayTotalPrice() {
  const numOfAdult = +numOfadultInput.value;
  const numOfChild = +numOfchildInput.value;
  let totaltax = numOfAdult * +priceOfAdult * 0.1 + numOfChild * +priceOfChild * 0.1;
  total_tax.innerText = "$" + totaltax;
  let total = numOfAdult * +priceOfAdult + numOfChild * +priceOfChild;
  total_cost.innerText = "$" + total;
}

numOfadultInput.addEventListener("input", displayTotalPrice);
numOfchildInput.addEventListener("input", displayTotalPrice);
displayTotalPrice();



function validateForm() {
    const name =
        document.getElementById("name").value;
    const address =
        document.getElementById("address").value;
    const email =
        document.getElementById("email").value;
    const credit =
        document.getElementById("credit").value;
	const CVC =
        document.getElementById("CVC").value;
	const exp =
        document.getElementById("exp").value;

    const nameError =
        document.getElementById("name-error");
    const addressError = document.getElementById(
        "address-error"
    );
    const emailError = document.getElementById(
        "email-error"
    );
    const creditError = document.getElementById(
        "credit-error"
    );
	const CVCError = document.getElementById(
        "CVC-error"
    );
	const expError = document.getElementById(
        "exp-error"
    );

    nameError.textContent = "";
    addressError.textContent = "";
    emailError.textContent = "";
    creditError.textContent = "";
	CVCError.textContent = "";
	expError.textContent = "";

    let isValid = true;

	if (name === "" || /\d/.test(name)) {
        nameError.textContent =
            "Please enter your name properly.";
        isValid = false;
    }

    if (address === "") {
        addressError.textContent =
            "Please enter your address.";
        isValid = false;
    }

    if (email === "" || !email.includes("@")) {
        emailError.textContent =
            "Please enter a valid email address.";
        isValid = false;
    }

    if (credit === "" || credit.length < 16) {
        creditError.textContent =
            "Please enter a credit card number with at least 16 numbers.";
        isValid = false;
    }

	if (CVC === "" || CVC.length < 3) {
        CVCError.textContent =
            "Please enter a CVC.";
        isValid = false;
    }

	if (exp === "" || exp.length < 5) {
        expError.textContent =
            "Please enter an expiration date.";
        isValid = false;
    }


    return isValid;
}