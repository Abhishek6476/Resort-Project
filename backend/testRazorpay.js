// import Razorpay from "razorpay";
// import dotenv from "dotenv";
// dotenv.config();

// const razorpay = new Razorpay({
//   key_id: process.env.RAZORPAY_KEY_ID,
//   key_secret: process.env.RAZORPAY_KEY_SECRET,
// });

// async function testRazorpay() {
//   try {
//     const order = await razorpay.orders.create({
//       amount: 10000, // 100 INR
//       currency: "INR",
//       receipt: "test_receipt_001",
//     });
//     console.log("✅ Razorpay Keys Working!");
//     console.log("Order created successfully:", order.id);
//   } catch (error) {
//     console.error("❌ Razorpay Keys Invalid or Not Working");
//     console.error(error);
//   }
// }

// testRazorpay();


import Razorpay from "razorpay";
import dotenv from "dotenv";

dotenv.config();

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

console.log("🔑 Checking Razorpay Keys...");
console.log("Key ID:", process.env.RAZORPAY_KEY_ID);
console.log("Secret Loaded:", process.env.RAZORPAY_KEY_SECRET ? "✅ Yes" : "❌ No");

async function testRazorpay() {
  try {
    const order = await razorpay.orders.create({
      amount: 10000, // 100 INR
      currency: "INR",
      receipt: "test_receipt_001",
    });

    console.log("✅ Razorpay Keys Working!");
    console.log("Order created successfully:", order.id);
  } catch (error) {
    console.error("❌ Razorpay Keys Invalid or Not Working");
    console.error(error);
  }
}

testRazorpay();
