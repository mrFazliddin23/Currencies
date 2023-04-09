const money = document.querySelector(".input_money"),
    cureency = document.querySelector(".selectedCurrency"),
    dollar = document.querySelector(".dollar"),
    euro = document.querySelector(".euro"),
    rubl = document.querySelector(".rubl"),
    frank = document.querySelector(".frank"),
    btn = document.querySelector(".hisobla_btn"),
    box = document.querySelector(".box");

btn.addEventListener("click", function() {

    if (cureency.value === dollar.value) {
        return (box.innerText = (money.value / 11310).toFixed(2));
    } else if (cureency.value === euro.value) {
        return (box.innerText = (money.value / 11500).toFixed(2));
    } else if (cureency.value === rubl.value) {
        return (box.innerText = (money.value / 150).toFixed(2));
    } else if (cureency.value === frank.value) {
        return (box.innerText = (money.value / 11750).toFixed(2));
    } else if (isNaN(money)) {
        return box.innerText = "Please enter a number";
    }

});