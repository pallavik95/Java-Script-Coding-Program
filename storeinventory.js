let dollarprice = [{'item':'item1',price : 50},{'item' :'item2' , price: 10},{'item':'item3', price : 80}];

console.log("price in dollar" , dollarprice);
let exchange_money = [];
dollarprice.forEach((el,index)=>{
    exchange_money.push("item" ,el.price * 80)
})

console.log( "price after exchange in indian rupees: ",exchange_money);