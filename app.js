

function getValue() {
    const originalPrice = parseFloat(document.getElementById('original-price').value);
    const discount =parseFloat( document.getElementById('discount').value);
    const coupon = document.getElementById('main');
    // const dom = ;

    if (originalPrice > discount && originalPrice > 0 && discount > 0 && discount <= 100) {
        const newprice = originalPrice * discount / 100;
        const after = originalPrice - newprice;

        const afterprice = document.getElementById('after');
        afterprice.innerText = 'After Price' + '=' + after;
       
        document.getElementById('original-price').value = ''
        document.getElementById('discount').value = ''
        coupon.classList.add('hidden')
        console.log( document.getElementById('coupon').value)
    }
    else{
        alert('please Enter number')
    }
}


document.getElementById('coupon').addEventListener('keyup', function(e){
    // console.log(e.target.value)
    const value = e.target.value

    if(value == 'DOM'){
        document.getElementById('button').removeAttribute('disabled');
    }
    else{
       document.getElementById('button').setAttribute('disabled', true);
    }
})
