let amount = document.querySelector(".amount");
let value = document.querySelector(".value");
let display = document.querySelector(".display");
let form = document.querySelector(".form");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    
    let rawResult = amount.value * value.value;
    let result = rawResult.toFixed(2);

    display.innerHTML = `${result}PLN`;
});