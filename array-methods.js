const products = [
    { name: 'laptop', price: 3200, brand: 'lenovo', color: 'silver' },
    { name: 'phone', price: 7000, brand: 'iphone', color: 'golden' },
    { name: 'watch', price: 3000, brand: 'casio', color: 'yellow' },
    { name: 'sungalss', price: 300, brand: 'ray', color: 'black' },
    { name: 'camera', price: 9000, brand: 'canon', color: 'gray' }
];

//Map using for create a new array take the value of another array of object

const productName = products.map((product => product.name))
console.log(productName);

// forEach using for loop the array value but don't give any return

products.forEach(product => console.log('price',product.price));

//filter using for based on conditon and retuen a array

const productPrice = products.filter((product => product.price > 3000))
// const nameOfProduct = productPrice.map(Name => Name.name)
console.log(productPrice);

//find using for based on conditon and retuen a condition ways 1st value

const productColor = products.find((product => product.price > 3000))
console.log(productColor);


const specificName = products.filter(p => p.name.includes('n'));
// console.log(specificName);


//4. find
const special = products.find(p => p.name.includes('n'));
console.log(special);
