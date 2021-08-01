const calculate=function(data){
    let totalBill = 0;
    totalBill =+ document.querySelector('.bill').value;
    let tip = (totalBill * data)/100;
    
    if(document.querySelector('.No-of-people').value == 0 || document.querySelector('.No-of-people').value == NaN ){
        let a = document.querySelector('.people-span');
        a.innerHTML = `Can't be zero or empty!`
        a.classList.add('people-span1')
    }
    else{
        let numberPeople =+ document.querySelector('.No-of-people').value;
        let tipAmount = (tip/numberPeople);

        let total = totalBill+tip;
        let totalForPerson = (total / numberPeople);

        let resultAmount = document.querySelector('.tip-total-amount');
        resultAmount.innerHTML= "$" + totalForPerson.toFixed(2);

        let totalResult = document.querySelector('.tip-total');
        totalResult.innerHTML= "$" + tipAmount.toFixed(2);
    }
}

const btn1=document.querySelector('#btn5');
btn1.addEventListener('click',function(){
    if(document.querySelector('.No-of-people').value != 0 || document.querySelector('.No-of-people').value != NaN ){
        document.querySelector('.people-span').innerHTML=' '
    }
    calculate(5)
})


const btn2=document.querySelector('#btn10');
btn2.addEventListener('click',function(){
    if(document.querySelector('.No-of-people').value != 0 || document.querySelector('.No-of-people').value != NaN ){
        document.querySelector('.people-span').innerHTML=' '
    }
    calculate(10)
})
const btn3=document.querySelector('#btn15');
btn3.addEventListener('click',function(){
    if(document.querySelector('.No-of-people').value != 0 || document.querySelector('.No-of-people').value != NaN ){
        document.querySelector('.people-span').innerHTML=' '
    }
    calculate(15)
})
const btn4=document.querySelector('#btn25');
btn4.addEventListener('click',function(){
    if(document.querySelector('.No-of-people').value != 0 || document.querySelector('.No-of-people').value != NaN ){
        document.querySelector('.people-span').innerHTML=' '
    }
    calculate(25)
})
const btn5=document.querySelector('#btn50');
btn5.addEventListener('click',function(){
    if(document.querySelector('.No-of-people').value != 0 || document.querySelector('.No-of-people').value != NaN ){
        document.querySelector('.people-span').innerHTML=' '
    }
    calculate(50)
})
const customBtn= document.querySelector('.custom-btn');
customBtn.addEventListener('keypress',function(){
    let customPer =+ customBtn.value;
    calculate(customPer); 
})

let reset = document.querySelector('.reset');
reset.addEventListener('click',function(){
    document.querySelector('.bill').value=' ';
    document.querySelector('.No-of-people').value=' ';
    document.querySelector('.custom-btn').value=' ';
    document.querySelector('.tip-total').innerHTML='$0.00';
    document.querySelector('.tip-total-amount').innerHTML='$0.00';
})