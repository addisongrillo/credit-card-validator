import React from 'react'
import { useState } from 'react'
import './CreditCardValidator.css'
import { Button, TextField } from '@mui/material'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { baseUrl } from '../../constants'

const CreditCardValidator = () => {
    const [ccNumber, setCcNumber] = useState<string>('')
    const [isValid, setIsValid] = useState<string>('')
    const handleCCNumberChange = (val: string) => {
        setCcNumber(val)
        setIsValid('')
    }
    const checkIfValid = async () => {
        if (ccNumber.length) {
            try {
                const res = await axios.post(`${baseUrl}/validate-credit-card-number?creditCardNumber=${ccNumber}`)
                if (res.data) {
                    res.data.isValid ? setIsValid('valid') : setIsValid('notValid')
                }
            } catch (err) {
                toast.error("Something Went Wrong!")
                // would be a log the error in a proper logging service in a real application
                console.log(err)
            }
        }
    }

    return (
        <div id='container'>
            <h1 id='header'>Credit Card Validator</h1>
            <TextField id="cc-input"
                label="Credit Card Number"
                variant="outlined"
                value={ccNumber}
                onChange={(event) => handleCCNumberChange(event.target.value)} />
            <Button id="validate-button" variant='contained' onClick={checkIfValid}>Validate</Button>
            {isValid === 'valid' && <h3 className='result'>This Credit Card Number is Valid!</h3>}
            {isValid === 'notValid' && <h3 className='result'>This Credit Card Number not Valid</h3>}
            <ToastContainer />
        </div>
    )
}
export default CreditCardValidator