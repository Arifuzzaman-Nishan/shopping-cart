var inputNumber;

// to catch the specific element
function getId(id) {
    return document.getElementById(id);
}

//add and minus operation
function addSubOperation(id, sign) {
    inputNumber = parseInt(document.getElementById(id).value);
    inputNumber = inputNumber + (sign) * 1;
    document.getElementById
        (id).value = inputNumber;
}


const currentPrice = getId("current-price-1"); //to get the current price inner text id
const currentPriceValue = parseInt(currentPrice.innerText);


///plus handler

function firstHandler(btnId , inputNumberId , currentPriceId, signValue) {
    const Btn = getId(btnId);

    Btn.addEventListener("click", function () {
        addSubOperation(inputNumberId, signValue);
        getId(currentPriceId).innerText = currentPriceValue * inputNumber; // to set the current price value;
    })
}

firstHandler("plus-btn-1","input-number-1","current-price-1",1);
firstHandler("minus-btn-1","input-number-1","current-price-1",-1);

// minus handler
// const minusBtn = getId("minus-btn");

// minusBtn.addEventListener("click", function () {
//     addSubOperation("input-number-1", -1);


// })