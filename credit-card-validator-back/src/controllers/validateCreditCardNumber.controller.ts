import validateCreditCard from "../utility/validateCreditCard";

async function validate(req, res, next) {
  try {
    res.json({'isValid':validateCreditCard(req.query.creditCardNumber)});
  } catch (err) {
    console.error(`Error while validating credit card number`, err.message);
    next(err);
  }
}

export default {validate}