import express from 'express'

import validateCreditCardNumberController from '../controllers/validateCreditCardNumber.controller'

const router = express.Router()
 
/* POST credit card number */
router.post('/', validateCreditCardNumberController.validate);

export default router