// to catch the specific element
function getId(id){
    return document.getElementById(id);
}

//add and minus operation
function addSubOperation(id,sign){
    var inputNumber = parseInt(document.getElementById(id).value);
    inputNumber = inputNumber+(sign)*1;
    document.getElementById
    (id).value = inputNumber;
}

///plus handler
 const plusBtn = getId("plus-btn");

plusBtn.addEventListener("click",function(){
    addSubOperation("input-number-1",1);
    const currentPrice = 
})

// minus handler
const minusBtn = getValueById("minus-btn");

minusBtn.addEventListener("click",function(){
    addSubOperation("input-number-1",-1);
})