function calculateTip(){
    const billAmount = parseFloat(document.getElementById("bill").value);
    const serviceQuality = parseFloat(document.getElementById("service").value);
    const numberOfPeople = parseFloat(document.getElementById("people").value);

    if(isNaN(billAmount)|| billAmount<=0){
        alert("Please enter a valid bill amount");
    }
    if(numberOfPeople < 1){
        alert("Please enter at least 1 person");
    }
    // Calculate the values
    const tipAmount = billAmount * serviceQuality;
    const totalAmount = billAmount + tipAmount;
    const perPerson = totalAmount/numberOfPeople;
    const tipPerPerson = tipAmount/numberOfPeople;
    // Display the results with two decimal places;
    document.getElementById("tipAmount").textContent = `$${tipAmount.toFixed(2)}`;
    document.getElementById("totalAmount").textContent = `$${totalAmount.toFixed(2)}`;
    document.getElementById("perPerson").textContent = `$${perPerson.toFixed(2)}`;
    document.getElementById("tipPerPerson").textContent = `$${tipPerPerson.toFixed(2)}`;
}

// Add event listener

document.getElementById("calculateBtn").addEventListener("click",calculateTip);

const allElements = document.querySelectorAll("input,select").forEach((element)=>{
    element.addEventListener('input',calculateTip);
});
