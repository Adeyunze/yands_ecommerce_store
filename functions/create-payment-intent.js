/* eslint-disable no-unused-vars */
const dotenv = require('dotenv')
dotenv.config()

const stripe = require('stripe')(process.env.REACT_APP_STRIPE_SECRET_KEY)

exports.handler = async function (event, context) {
    const { cart, shipping_fee, total_amount} = JSON.parse(event.body)
    
    const calculateOrderAmount = () => {
      let total = shipping_fee + total_amount
      total = Math.round(total * 100).toFixed(2)
      return Number(total)
    }

    try {
      const paymentIntent = await stripe.paymentIntents.create({
        amount: calculateOrderAmount(),
        currency: 'gbp'
      })

      return {
        statusCode: 200,
        body: JSON.stringify({clientSecret: paymentIntent.client_secret})
      }
    } catch (error) {
      return {
        statusCode: 500,
        body: JSON.stringify({error: error.message})
      }
    }
}