// ------ callback functions -------

const makingPurchase = (person, price) =>{ 
    console.log(`Processing purchase for ${person}, charged ${price}`)
}

const returningItem = (person, price) =>{
    console.log(`Processing refund for ${person}, ${price} will be issued at ${person}'s bank account`)
}

// Register Counter is the parent fx with a child fx as the parameter (callback fx)
const registerCounter = (customerAction, person, price)=>{
    console.log("Hello! Welcome to the store");
    customerAction(person, price); // execute this function
}

registerCounter(makingPurchase, "Heidi", 100);
registerCounter(returningItem, "Pepper", 10);


// ------ Object.freeze() -------
const shoppingList = [
    {id: 3, item: "Pepper's food", price: 1.29, shops: ["petco", "amazon"], required: true}, 
    {id: 5, item: "red gamer chair", price: 300, shops: ["amazon", "BestBuy"], required: false},
    {id: 9, item: "soup dumplings", price: 3.29, shops: ["Trader Joes"], required: true},
    {id: 2, item: "Air ticket to Barcelona", price: 600, shops: ["Expedia"], required: false}, 
    {id: 10, item: "custard tart", price: 3.99, shops: ["Trader Joes"], required: true}     
]

// ------ .map & .filter -------
// --- .map() ---
// Traditional for-loop to return an array of price
const priceArr = [];
for(let i = 0; i<shoppingList.length; i++){
    priceArr.push(shoppingList[i].price)
}
console.log(priceArr)

const priceArr2 = []
for(const eachItem of shoppingList){
    priceArr2.push(eachItem.price);
}
console.log(priceArr2);


// return an array of prices
const priceArr3 = shoppingList.map((eachItem)=>{
    return eachItem.price;
})

console.log(priceArr3)
const priceArr4 = shoppingList.map((eachItem)=> eachItem.price)

// --- .filter() ---
// Traditional for-loop to return an array of items with price<100
const cheapItemArr = []

for(const eachItem of shoppingList){
    if(eachItem.price<100){
        cheapItemArr.push(eachItem);
    }
}
console.table(cheapItemArr);
// .filter to return a list of cheap items (cheap: price< 100)

const cheapItemArr2 = shoppingList.filter((eachItem)=>{
    return eachItem.price<100;
})
console.log(cheapItemArr2);
 
// return a list of cheap items with only the names
const cheapItemNameArr = shoppingList
                            .filter((eachItem)=>eachItem.price<100) // return the array of objects with price<100
                            .map((eachItem, idx)=>eachItem.item); // create the customized array with only the names



// Sorting 
console.log(cheapItemNameArr);
const sortedName = [...cheapItemNameArr].sort();
console.log(sortedName)

console.log(priceArr)
const sortedPrice = [...priceArr].sort((a, b)=> b-a)
console.log(sortedPrice)

const sortedShoppingList = [...shoppingList].sort((a , b)=> a.item > b.item? 1: -1)
console.table(sortedShoppingList);