import React, {useState} from 'react';
import PaystackPop from '@paystack/inline-js';
import {  useNavigate } from 'react-router-dom';

const PaystackIntegration = ({ post }) => {
  
       const [firstname, setFirstname ] = useState("");
       const [lastname, setLastname ] = useState("");
       const [email, setEmail ] = useState("");
       const [address, setAddress ] = useState("");
       const [amount] = useState(post.price * 100);
       const [product] = useState(post.title);
       const navigate = useNavigate();

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
                {
                  "display_name":"Name of the product",
                  "variable_name":"Name of the product",
                  "value":product
              
                },
                {
                  "display_name":"Buyer name",
                  "variable_name":"Buyer name",
                  "value":firstname
              
                },
                {
                  "display_name":"Buyer name",
                  "variable_name":"Buyer name",
                  "value":lastname
              
                },
                {
                  "display_name":"Buyer email",
                  "variable_name":"Buyer email",
                  "value":email
              
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
            <input type='text' placeholder="Enter your first name" value={firstname} onChange={(e) => setFirstname(e.target.value)} name='firstname' required />
            </div>
            <div>
            <label htmlFor='last-name' >Last Name</label>
            <input type='text' placeholder='Enter your last name' value={lastname} onChange={(e) => setLastname(e.target.value)} name='lastname' required />
            </div>
            <div>
            <label htmlFor='email' >Email address</label>
            <input type='email' placeholder='Enter your email address' value={email} onChange={(e) => setEmail(e.target.value)} name='email' required />
            </div>
            <div>
            <label htmlFor='email' >Delivery Address</label>
            <input type='text' placeholder='Enter your delivery address' value={address} onChange={(e) => setAddress(e.target.value)} name='email' required />
            </div>
           <button type="submit">Pay</button>
        </form>
    </div>
  )
}

export default PaystackIntegration;