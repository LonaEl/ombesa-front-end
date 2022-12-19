/*  import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { BsBagCheckFill } from 'react-icons/bs';
import { runFireworks } from './utils';
import useStyles from './styles';

 import { runFireworks } from '../lib/utils'; 

const Complete= () => {
const navigate = useNavigate();
const { classes }  = useStyles();
  
  useEffect(() => {
    runFireworks();
  }, []);

  const back = () => {
   navigate('/');
  };

  return (
    <div className={classes.success}> 
       <div className={classes.suc}>
        <p className={classes.icon}>
          <BsBagCheckFill />
        </p>
        <h2>Thank you for your order!</h2>
        <p className={classes.email}>Check your email inbox for the receipt.</p>
        <p className={classes.dec}>
          If you have any questions, please email
          <a className={classes.emal} href="mailto:order@example.com">
        admin@sealthedeal.com
          </a>
        </p>
          <button type="button" onClick={back} width="300px" className={classes.btn}>
            Continue Shopping
          </button>
          
      </div> 
    </div> 
  )
}

export default Complete;  */