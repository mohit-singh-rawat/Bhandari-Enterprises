const Razorpay = require('razorpay');
const crypto = require('crypto');
require('dotenv').config();

const instance = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET
});

const createOrder = async (req, res) => {
  try {
    console.log({key_id: process.env.RAZORPAY_KEY_ID,
      key_secret: process.env.RAZORPAY_KEY_SECRET});
    const options = {
      amount: req.body.amount * 100,
      receipt: "receipt#1"
    };
    const order = await instance.orders.create(options);

    if (!order) return res.status(500).send('Some error occurred');
    res.json(order);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};

const verifyOrder = (req, res) => {
  console.log("====called");

  // const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;
  // const hmac = crypto.createHmac('sha256', process.env.RAZORPAY_KEY_SECRET);
  // hmac.update(`${razorpay_order_id}|${razorpay_payment_id}`);
  // const generated_signature = hmac.digest('hex');
  // if (generated_signature === razorpay_signature) {
  //   res.status(200).json({ msg: 'Payment verified successfully' });
  // } else {
  //   res.status(400).json({ msg: 'Payment verification failed' });
  // }
  const {payment_id } = req.params;
    const {BID} = req.params;
    const amount = Number(req.params.amount*100);
    instance.payments.capture(payment_id, amount).then((data) => {
        data.Bid = BID;
        res.json(data);
    });
};

module.exports = { createOrder, verifyOrder }