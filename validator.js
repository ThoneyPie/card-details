const form = document.getElementById('form');
form.addEventListener('submit', function(e){
    e.preventDefault();
} )



const cardName = document.getElementById('bottom-left-text')
const carddate = document.getElementById('bottom-right-text')
const cardNumber = document.getElementById('center-text')

const cvc = document.getElementById('back-cvc')
const submit = document.getElementById('submit')



const nameInput = document.getElementById('cardname')
const cardNum = document.getElementById('cardNumber')
const cardMonth = document.getElementById('cardmonth')
const cardyear = document.getElementById('cardyear')
const cardback = document.getElementById('CVC')
const small = document.getElementsByTagName('small')



function myFunction() {
    
const nameInput = document.getElementById('cardname');
const cardName = document.getElementById('bottom-left-text');
cardName.innerHTML = nameInput.value;

const cardNum = document.getElementById('cardNumber');
const cardNumber = document.getElementById('center-text');
cardNumber.innerHTML = cardNum.value;


const cvc = document.getElementById('back-cvc');
const cardback = document.getElementById('CVC');
cvc.textContent = cardback.value;



const cardyear = document.getElementById('cardyear');
const cardMonth = document.getElementById('cardmonth')
const carddate = document.getElementById('bottom-right-text')
cardyear.addEventListener('input', () =>{
    carddate.value = cardyear.value + cardMonth.value;
});

carddate.innerHTML = cardMonth.value + '/' + cardyear.value;





}





//preventing the page from refreshing on submit.
