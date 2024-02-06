import product1 from '../../assets/1.png'
import product2 from '../../assets/2.png'
import product3 from '../../assets/3.png'
import product4 from '../../assets/4.png'
import product5 from '../../assets/5.png'
import product6 from '../../assets/6.webp'
import product7 from '../../assets/7.webp'
import product8 from '../../assets/8.webp'

// import { double}

// import doubleQuotedID1 from './keys'


// console.log(doubleQuotedID1);

const PRODUCTS = [
    {
        id: 1,
        model: "price_1OXwpKGREgM9LlFp1WxEqzVH",
        productName: "Rolex",
        price: 220.0,
        productImage: product1,
    },
    {
        id: 2,
        model: "price_1OXwpfGREgM9LlFpQ92zBRa3",
        productName: "Omega",
        price: 225.0,
        productImage: product2,
    },
    {
        id: 3,
        model: "price_1OXwq2GREgM9LlFphD3TVmN7",
        productName: "Emporio Armani",
        price: 234.0,
        productImage: product3,
    },
    {
        id: 4,
        model: "price_1OXwqUGREgM9LlFpUd9ltjht",
        productName: "Hugo Boss",
        price: 277.0,
        productImage: product4,
    },
    {
        id: 5,
        model: "price_1OXwqsGREgM9LlFpGnbG6ktD",
        productName: "Breitling",
        price: 288.0,
        productImage: product5,
    },
    {
        id: 6,
        model: "price_1OXwrGGREgM9LlFpeQgwjtei",
        productName: "Hublot",
        price: 544.0,
        productImage: product6,
    },
    {
        id: 7,
        model: "price_1OXwrZGREgM9LlFpqPWWnogp",
        productName: "Audemars Piguet",
        price: 322.0,
        productImage: product7,
    },
    {
        id: 8,
        model: "price_1OXwrzGREgM9LlFpZM9G6GoE",
        productName: "Invicta",
        price: 111.0,
        productImage: product8,
    },
];

function getProductData(id) {
    let productData = PRODUCTS.find(product => product.id === id);
    
    if (productData === undefined) {
        console.log("Product data does not exist for ID: " + id);
        return undefined;
    }

    return productData;
}

export { PRODUCTS, getProductData };
