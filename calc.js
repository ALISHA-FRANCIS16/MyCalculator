function display(num){
result.value+=num
}

function calculate(){
    result.value=eval(result.value)
}

function allClear(){
    result.value=""
}

function del(){
    result.value=result.value.slice(0,-1)
}