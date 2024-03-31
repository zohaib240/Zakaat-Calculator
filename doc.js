const sub1=document.querySelector('#cal1')
const sub2=document.querySelector('#cal2')
const sub3=document.querySelector('#cal3')
const total=document.querySelector('#total')
function getway() {
     
let calculate =` ${(sub2.value * sub3.value) + +sub1.value}`
console.log(calculate)
let all = calculate *2.5 /100
console.log(all)
total.innerHTML=all
sub1.value=''
sub2.value=''
sub3.value=''
}




