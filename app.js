let add = document.getElementById('increment')
let add2 = document.getElementById('increment2')
let remove = document.getElementById('decrement')
let remove2 = document.getElementById('decrement2')

let int = document.getElementById('number')
let int2 = document.getElementById('number2')

let integer = 0
let integer2 = 0

add.addEventListener('click', function(){
    integer++;
    int.innerHTML = integer
    
    
})

add2.addEventListener('click', function(){
    integer2++;
    int2.innerHTML = integer2
    
    
})

remove.addEventListener('click', function(){
    if(integer > 0) {
        integer--;
        int.innerHTML = integer
        
        }
    return integer
    
})

remove2.addEventListener('click', function(){
    if(integer2 > 0) {
    integer2--;
    int2.innerHTML = integer2
    }
    return integer2
    
})