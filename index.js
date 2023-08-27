let books = [
  { title: 'Harry Potter', price: 20, isAvailable: true, count: 5 },
  { title: 'Lord of the Rings', price: 25, isAvailable: false, count: 0 },
  { title: 'Clean Code', price: 30, isAvailable: true, count: 3 },
  { title: 'The cracking the coding interview', price: 35, isAvailable: true, count: 2 },
];

let wallet_money = 100;

function isBookAvailable(bookName)
{
    for(i=0; i<books.length; i++){
        if(books[i].title === bookName && books[i].isAvailable && books[i].count > 0 ){
            return true;
        }
    }
return false;
}

function getBookPrice(bookName)
{

for(i=0; i<books.length; i++){
    if(books[i].title === bookName){
        return books[i].price;
    }
}
return 0;
}

function isMoneyAvaiable(buyingPrice)
{
return wallet_money >= buyingPrice;
}

function decrementBookStock(bookName, decrementValue)
{

for(i=0; i<books.length; i++){
        if(books[i].title === bookName){
            books[i].count -= decrementValue;
            break;
}
}
}

function decrementWallet (valueToDecrement)
{

wallet_money -= valueToDecrement;

}

function purchaseBook(bookName)
{
  if(isBookAvailable(bookName) && isMoneyAvaiable(getBookPrice(bookName)))
  {
    console.log(`${bookName} is purchased`)
    decrementBookStock(bookName,1)
    decrementWallet(getBookPrice(bookName))
  }
  else{
    console.log("book cannot be purchased")
  }
}

purchaseBook("Harry Potter")