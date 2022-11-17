//animation

gsap.from('.myVideo', {y: '100%', delay:1, opasity:0, duration:1, ease:"power1"}) 

gsap.from('h1', {y: -80, delay:2, opacity:0, duration:1, ease:"power1"}) 
gsap.from('.icon-position', {y: -80, delay:2, opacity:0, duration:1, ease:"power1"}) 
gsap.from('input', {y: -80, delay:2, opacity:0, duration:1, ease:"power1"})
gsap.from('span', {y: -80, delay:2, opacity:0, duration:1, ease:"power1"})  
gsap.from('#showTotalAmountToPay', {y: 80, delay:2, opacity:0, duration:1, ease:"power1"}) 
gsap.from('#buttonPosition', {x: 80, delay:3, opacity:0, duration:1, ease:"power1"})  
gsap.from('#par', {x: 80, delay:3, opacity:0, duration:1, ease:"power1"})  




const calcButton = document.querySelector('#btn');
calcButton.addEventListener('click', calculateAmount);

const buttonTip = document.querySelector('#addTip');
buttonTip.addEventListener('click', showTip);

function showTip(e){
    e.preventDefault();
    tip.style.display = 'block';
}

function calculateAmount(e){
    e.preventDefault();
    // to get access to inputs(bill and how many people) and tip selection
    const bill = document.querySelector('#bill').value;
    
    const people = document.querySelector('#people').value;
    const tip = document.querySelector('#tip').value;
    console.log(tip);
    

    //Display error alert
    if(bill === "" || people === "" || people < 1){
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Please enter your information!',
            iconColor: '#c090a4',
            confirmButtonColor: '#c090a4',
          })
    }
    // Bii per preson
    let amountPerperson = bill/people;
    // Tip per person
    let tipPerperson = (bill * tip)/people;
    //Total bill (Bill+tip)
    let totalSum = amountPerperson + tipPerperson;
    
    //Display result with cents
    amountPerperson = amountPerperson.toFixed(2);
    tipPerperson = tipPerperson.toFixed(2);
    totalSum = totalSum.toFixed(2);

    //Display resilts in the browser
    document.querySelector('#divadeBill').textContent = amountPerperson;
    document.querySelector('#divadeTip').textContent = tipPerperson;
    document.querySelector('#billAndTip').textContent = totalSum;
}

