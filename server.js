const express = require('express');
var cors = require('cors');
const stripe = require('stripe')('sk_test_51O1GjrGREgM9LlFpWac4qLR7Fp0xrGA7wUacCGm8FTYdiZyyN9kH9almt06RtFpphrfxDwlyRdSMKhCpXY6fD48N000nBvYJhM');
const mongoose = require('mongoose');

const app = express();
app.use(cors());
app.use(express.static("public"));
app.use(express.json());

// Database connection
mongoose.connect('mongodb+srv://watchcust:4d2ci2Ha2aEjY7ut@cluster24.6fxmzev.mongodb.net/', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// Schema
// const paymentSchema = new mongoose.Schema({
//     sessionId: String,
//     paymentId: String,
//     amount: Number,
//     currency: String,
//     paymentStatus: String,
//     created: { type: Date, default: Date.now }

// });
// const Payment = mongoose.model('payment', paymentSchema);

const productSchema = new mongoose.Schema({
    model: String,
    productName: String,
    price: Number,
    productImage: String
});

const Product = mongoose.model('product', productSchema);

 // JSON
const PRODUCTS = [
    {
       // id: 1,
        model: "price_1OXwpKGREgM9LlFp1WxEqzVH",
        productName: "Rolex",
        price: 220.0,
        productImage: "product1.png",
    },
    {
       // id: 2,
        model: "price_1OXwpfGREgM9LlFpQ92zBRa3",
        productName: "Omega",
        price: 225.0,
        productImage: "product2.png",
    },
    {
       // id: 3,
        model: "price_1OXwq2GREgM9LlFphD3TVmN7",
        productName: "Emporio Armani",
        price: 234.0,
        productImage: "product3.png",
    },
    {
       // id: 4,
        model: "price_1OXwqUGREgM9LlFpUd9ltjht",
        productName: "Hugo Boss",
        price: 277.0,
        productImage: "product4.png",
    },
    {
      //  id: 5,
        model: "price_1OXwqsGREgM9LlFpGnbG6ktD",
        productName: "Breitling",
        price: 288.0,
        productImage: "product5.png",
    },
    {
       // id: 6,
        model: "price_1OXwrGGREgM9LlFpeQgwjtei",
        productName: "Hublot",
        price: 544.0,
        productImage: "product6.webp",
    },
    {
       // id: 7,
        model: "price_1OXwrZGREgM9LlFpqPWWnogp",
        productName: "Audemars Piguet",
        price: 322.0,
        productImage: "product7.webp",
    },
    {
       // id: 8,
        model: "price_1OXwrzGREgM9LlFpZM9G6GoE",
        productName: "Invicta",
        price: 111.0,
        productImage: "product8.webp",
    },
];

// end of json

//insert 

Product.insertMany(PRODUCTS)
.then(() => {
    console.log("products inserted successfully");
})
.catch(err => {
    console.error("Error inserting products:", err);
});

// Product.insertMany(PRODUCTS, (err) => {
//     if (err) {
//         console.error("Error inserting products: ", err);
//     } else {
//         console.log("Products inserted successfully");
//     }
// });


// checkout

app.post("/checkout", async (req, res) => {

    console.log(req.body);
    const items = req.body.items;
    console.log(items);
    let lineItems = [];
    items.forEach((item) => {
        if (item.quantity > 0) {
        lineItems.push({
                // price: item.id,
                price: item.id,
                quantity: item.quantity
            })
        }
    });

    const session = await stripe.checkout.sessions.create({
       line_items: lineItems,
       mode: 'payment',
       success_url: 'http://localhost:3000/success',
       cancel_url: "http://localhost:3000/cancel"
    });

    res.send(JSON.stringify({
        url: session.url
    }));
});

// // handle payment
// app.post("/payment/success", async (req, res) => {
//     // new code
//     try {
//     const session = req.body;
//     // new code
//     const paymentIntentId = session.object.id;
//     const paymentIntent = await stripe.paymentIntents.retrieve(paymentIntentId);

//     const payment = new Payment({
//         sessionId: session.object.id,
//         paymentId: paymentIntent.id,
//         amount: session.object.amount_total,
//         currency: session.object.currency,
//         paymentStatus: session.object.payment_status
//     });

//     await payment.save();

//     console.log("Payment details stored successfully");
// } catch (error) {
//     console.error("Error storing payment details:", error);
//     console.log("Failed to store payment details");
// }
// });

// end

app.listen(4000, () => console.log("Listening on port 4000!"));
