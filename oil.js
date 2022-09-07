// const currencyEl_one=document.getElementById(`currency-one`);
// const amountEl_one=document.getElementById(`amount-one`);

// const currencyEl_two=document.getElementById(`currency-two`);
// const amountEl_two=document.getElementById(`amount-two`);

// const rateEl= document.getElementById('rate');
// const swap =document.getElementById('swap');

// // fetch 
// let currency_one= {
//     USD:'1',
//     BRENTOIL:'90.5',
// }

//   console.log(currency_one)
// let currency_two={1}
//  function calculate(){
// const currency_one=currencyEl_one.value;
// const currency_two=currencyEl_two.value;






//   const rate= [currency_two];



//  rateEl.innerText=`1 =${rate} ${currency_two}`;
//   amountEl_two.value =(amountEl_one.value * rate).toFixed(2);
//  };

// // evnl
// currencyEl_one.addEventListener('change', calculate);
// amountEl_one.addEventListener('input',calculate);



// currencyEl_two.addEventListener('change', calculate);
// amountEl_two.addEventListener('input',calculate);

// // SWAP
// swap.addEventListener('click',() =>{
//     const temp =currencyEl_one.value;
//     currencyEl_one.value= currencyEl_two.value;
//     currencyEl_two.value=temp;
//     calculate();
// })
// calculate();

// fetch(`https://datasource.kapsarc.org/api/records/1.0/search/?dataset=spot-prices-for-crude-oil-and-petroleum-products&q=&facet=period`,{
   

//   }).then(res =>{
//     return res.json()
//   })
//   .then(data => console.log((data))) 
var input = document.getElementById('input');
var result = document.getElementById('result');
var inputType = document.getElementById('inputType');
var resultType = document.getElementById('resultType');
var inputTypeValue,resultTypeValue;

input.addEventListener("keyup",myResult);
inputType.addEventListener("change",myResult);
resultType.addEventListener("change",myResult);




function myResult(){


    inputTypeValue = inputType.value;
    resultTypeValue = resultType.value;

if(inputTypeValue === "USD" && resultTypeValue==="PETROL"){
    result.value = Number(input.value) * 1;
} else if(inputTypeValue === "PETROL" && resultTypeValue==="USD"){
    result.value = Number(input.value) * 102.95;}else if(inputTypeValue === "PETROL" && resultTypeValue==="USD"){

    }




}