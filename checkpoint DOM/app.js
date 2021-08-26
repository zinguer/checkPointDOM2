// total
total1 =  parseInt(document.getElementById('allTotal').innerHTML)
// first row


let iprice = Number(document.getElementById("price").innerHTML)
let plus = document.getElementById("addBtn")
let minus = document.getElementById("minBtn")
let subtotal = Number(document.getElementById("subPrice").innerHTML)
let dell = document.getElementById("delBtn")
let qty = Number(document.getElementById("quantity").innerHTML)



plus.addEventListener('click',function(){qty++
document.getElementById("quantity").innerHTML= qty
document.getElementById("subPrice").innerHTML= iprice*qty
total1 += iprice
document.getElementById('allTotal').innerHTML = total1
})


minus.addEventListener('click',function(){
    if (qty>0){qty--
        document.getElementById("quantity").innerHTML= qty
document.getElementById("subPrice").innerHTML= iprice*qty
total1 -= iprice
document.getElementById('allTotal').innerHTML = total1
}

})


dell.addEventListener('click',function(){
    document.getElementById("row1").remove()
        total1 -= iprice*qty
document.getElementById('allTotal').innerHTML = total1
})


// second row

let price2 = Number(document.getElementById("price2").innerHTML)
let plus2 = document.getElementById("addBtn2")
let minus2 = document.getElementById("minBtn2")
let qty2 = Number(document.getElementById('number2').innerHTML)
let sub2 =Number(document.getElementById('total2').innerHTML)
let del2 = document.getElementById('delBtn2')

plus2.addEventListener('click', function(){
    qty2++
    document.getElementById('number2').innerHTML = qty2
    document.getElementById('total2').innerHTML = qty2 * price2
    total1 += price2
document.getElementById('allTotal').innerHTML = total1

})

minus2.addEventListener('click',function(){
    if (qty2>0){
        qty2--
        document.getElementById('number2').innerHTML = qty2
        document.getElementById('total2').innerHTML = qty2 *price2
            total1 -= price2
document.getElementById('allTotal').innerHTML = total1
    }
})

del2.addEventListener('click',function(){
    document.getElementById('row2').remove()
        total1 -= qty2 *price2
document.getElementById('allTotal').innerHTML = total1
})
// third row 

let price3 = Number(document.getElementById("price3").innerHTML)
let plus3 = document.getElementById("addBtn3")
let minus3 = document.getElementById("minBtn3")
let qty3 = Number(document.getElementById('number3').innerHTML)
let sub3 =Number(document.getElementById('total3').innerHTML)
let del3 = document.getElementById('delBtn3')

plus3.addEventListener('click', function(){
    qty3++
    document.getElementById('number3').innerHTML = qty3
    document.getElementById('total3').innerHTML = qty3 * price3
    total1 += price3
document.getElementById('allTotal').innerHTML = total1
})

minus3.addEventListener('click',function(){
    if (qty3>0){
        qty3--
        document.getElementById('number3').innerHTML = qty3
        document.getElementById('total3').innerHTML = qty3 *price3
            total1 -= price3
document.getElementById('allTotal').innerHTML = total1
    }
})

del3.addEventListener('click',function(){
    document.getElementById('row3').remove()
    total1 -= qty3 *price3
document.getElementById('allTotal').innerHTML = total1
})




