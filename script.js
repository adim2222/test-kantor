{
    const amount = document.querySelector(".amount");
    const value = document.querySelector(".value");
    const display = document.querySelector(".display");
    const form = document.querySelector(".form");

    const onFormSubmit = (event) => {
        event.preventDefault();
        let rawResult = amount.value * value.value;
        let result = rawResult.toFixed(2);

        display.innerHTML = `${result}PLN`;
    }

    form.addEventListener("submit", onFormSubmit);
}