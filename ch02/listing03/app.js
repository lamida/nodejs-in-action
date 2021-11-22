const Currency = require('./currency')
const currency = new Currency(0.91)
console.log('50 CAD = %s USD', currency.canadianToUS(50))
console.log('30 USD = %s CAD', currency.USToCanadian(50))