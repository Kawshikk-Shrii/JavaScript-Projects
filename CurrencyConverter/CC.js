
const base_url = "https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_Drj2n8IMMxUg0PwmkL8quCumZG1NeilbHfE2YoFf&currencies=USD&base_currency=INR"

const dropdowns = document.querySelectorAll(".dropdown select")
const fromVal=document.querySelector(".from select")
const toVal=document.querySelector(".to select")
const button = document.querySelector("button")
const inputs= document.querySelector("input")
const display = document.querySelector(".display")

for(let select of dropdowns){
    for(code in countryList){
        let newOption = document.createElement("option");
        newOption.innerText=code;
        newOption.value=code;
        if(select.name == "from" && code == "USD"){
            newOption.selected ="selected"
        }
        else if(select.name == "to" && code == "INR"){
            newOption.selected ="selected"
        }
        select.append(newOption)
    }
    select.addEventListener(("change"),(evt)=>{
        changeLogo(evt.target);
    })
}

let changeLogo = (element)=>{
    let currcode = element.value;
    let countryCode = countryList[currcode];
    let image = element.parentElement.querySelector("img");
    image.src = `https://flagsapi.com/${countryCode}/flat/64.png`
}

button.addEventListener(('click'),async (evt)=>{
    evt.preventDefault()
    let amount = inputs.value
    if(amount ==='' || amount <0){
        alert("Enter valid amount !!")
        amount=1;
        inputs.value=1;
    }
    let url = `https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_Drj2n8IMMxUg0PwmkL8quCumZG1NeilbHfE2YoFf&currencies=${toVal.value}&base_currency=${fromVal.value}`
    let response = await fetch(url);
    let result = await response.json();
    rate = result.data[toVal.value];

    display.innerText = `${amount} ${fromVal.value} = ${amount*rate} ${toVal.value} `
})


