import React from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import Razorpay from 'razorpay';

const Checkout = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const totalAmount = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);
  const razorpayKeyId = "rzp_test_SM6V5uItSUXMSo";
  const apiUrl = process.env.REACT_APP_API_URL;

  const handlePayment = async () => {
    try {
      // const orderUrl = `http://localhost:8900/create-order`;
      // const response = await axios.post(orderUrl, { amount: totalAmount });
      // console.log(response);
      // if(response){
        // const options = {
        //   key: razorpayKeyId, // Use your Razorpay Key ID here
        //   amount: response.data.amount,
        //   currency: "INR",
        //   name: "Your Company Name",
        //   description: "Test Transaction",
        //   image: "https://example.com/your_logo",
        //   // order_id: response.data.id,
        //   handler: async (response) => {
        //     const verifyUrl = `http://localhost:8900/verify-order`;
        //     const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = response;
        //     const verificationResponse = await axios.post(verifyUrl, { razorpay_order_id, razorpay_payment_id, razorpay_signature });
  
        //     if (verificationResponse.data.msg === 'Payment verified successfully') {
        //       alert('Payment successful');
        //     } else {
        //       alert('Payment failed');
        //     }
        //   },
        //   prefill: {
        //     name: "Your Name",
        //     email: "your_email@example.com",
        //     contact: "9999999999"
        //   },
        //   notes: {
        //     address: "Your Address"
        //   },
        //   theme: {
        //     color: "#3399cc"
        //   }
        // };
  
        // const paymentObject = new Razorpay(options);
        // paymentObject.open();
      // }

      const payment_amount  = 100;
        const backend_url = 'http://localhost:8900';
        const self = this;
        const options = {
        key: "rzp_test_SM6V5uItSUXMSo",
        amount: payment_amount * 100,
        name: 'StanPlus',
        description: 'pay your ambulance fare',
        handler(response) {
            const paymentId = response.razorpay_payment_id;
            const url =  backend_url+'/razorpay/'+paymentId+'/'+payment_amount+'/'+self?.id;
            console.log(paymentId)
            // Using my server endpoints to capture the payment
            fetch(url, {
            method: 'get',
            headers: {
                "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
            }
            })
            .then(resp =>  resp.json())
            .then(function (data) {
                    console.log(data)
            })
            .catch(function (error) {
                console.log('Request failed', error);
            });
        },
        theme: {
            color: '#40A9FF',
        },
        };
        const rzp1 = new window.Razorpay(options);

        rzp1.open();
    } catch (error) {
      console.error("Payment Error: ", error);
      alert('Payment failed');
    }
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-12 mt-5">
          <h2 className='text-white'>Checkout items</h2>

          <table className="table">
            <thead className=''>
              <tr className=''>
                <th scope="col" className='p-3'>Image</th>
                <th scope="col" className='p-3'>Product</th>
                <th scope="col" className='p-3'>Price</th>
                <th scope="col" className='p-3'>Quantity</th>
                <th scope="col" className='p-3'>Total</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <tr key={item.id}>
                  <td className='p-3'>
                    <img src={item.image} alt="" style={{ width: "30px" }} />
                  </td>
                  <td className='p-3'>{item.title}</td>
                  <td className='p-3'>${item.price.toFixed(2)}</td>
                  <td className='p-3'>{item.quantity}</td>
                  <td className='p-3'>${(item.price * item.quantity).toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="d-flex text-white justify-content-end">
            <div className="me-3 ">
              <strong>Total Items: </strong>{totalItems}
            </div>
            <div>
              <strong>Total Amount: </strong>${totalAmount.toFixed(2)}
            </div>
          </div>
          <button className="btn btn-primary mt-3" onClick={handlePayment}>Pay Now</button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
