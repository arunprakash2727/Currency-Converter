fetch('https://api.frankfurter.app/currencies')
.then(response=>response.json())
.then(response=>callDropDown(response))

let select = document.querySelectorAll('.currency')
let btn = document.getElementById('btn')
let input = document.getElementById('input')

function callDropDown(res){
    let currency=Object.entries(res)
    for(let i=0; i<currency.length;i++){
        let option=`<option value="${currency[i][0]}">${currency[i][0]}</option>`
        select[0].innerHTML += option
        select[1].innerHTML += option
    }
}

btn.addEventListener('click',()=>{
    let currency1=select[0].value
    let currency2=select[1].value
    let inputValue=input.value
    if(currency1==currency2){
        alert('Choose Different Currencies')
    }
    else{
        convert(currency1,currency2,inputValue)
    }
})

function convert(curr1,curr2,inValue){
    const host = 'api.frankfurter.app';
    fetch(`https://${host}/latest?amount=${inValue}&from=${curr1}&to=${curr2}`)
    .then(resp => resp.json())
    .then((data) => {
      document.getElementById('result').value = Object.values(data.rates)[0]
  });
}