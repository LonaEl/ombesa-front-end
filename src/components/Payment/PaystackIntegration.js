import React, {useState} from 'react';
import PaystackPop from '@paystack/inline-js';

const PaystackIntegration = ({ post }) => {
  
       const [firstname, setFirstname ] = useState("");
       const [lastname, setLastname ] = useState("");
       const [email, setEmail ] = useState("");
       const [address, setAddress ] = useState("");
       const [amount] = useState(65000);

       const pay = (e) => {
         e.preventDefault();
         const paystack = new PaystackPop()
         paystack.newTransaction({
            key:"pk_test_6bcfa7fac8e0dcf2a352b04ca4c7d1116bc27f3c",
            amount: amount,
            firstname: firstname,
            lastname: lastname,
            email: email, 
            metadata:{
              "custom_fields":[
                {
                  "display_name":"Delivery address",
                  "variable_name":"Delivery address",
                  "value":address
              
                },
              ]
            },
             onSuccess(transaction) {
                let message = `Payment Complete! Reference ${transaction.reference}`
                alert (message)
                setFirstname("");
                setLastname("");
                setEmail("");
            },
            onCancel() {
                alert("You have cancelled the transaction")
            }
         })
       };

  return (
    <div>
        <form onSubmit={pay} >
            <div>
            <label htmlFor='first-name' >First Name</label>
            <input type='text' value={firstname} onChange={(e) => setFirstname(e.target.value)} name='firstname' required />
            </div>
            <div>
            <label htmlFor='last-name' >Last Name</label>
            <input type='text' value={lastname} onChange={(e) => setLastname(e.target.value)} name='lastname' required />
            </div>
            <div>
            <label htmlFor='email' >Email address</label>
            <input type='email' value={email} onChange={(e) => setEmail(e.target.value)} name='email' required />
            </div>
            <div>
            <label htmlFor='email' >Delivery Address</label>
            <input type='text' value={address} onChange={(e) => setAddress(e.target.value)} name='email' required />
            </div>
           <button type="submit">Pay</button>
        </form>
    </div>
  )
}

export default PaystackIntegration;