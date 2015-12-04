'use strict'

let md5 = require('md5')

let key = 'bgvyzdsv'

let number = 0

let result = ''

while (result.substr(0, 6) !== '000000') {
  number++
  result = md5(key + number)
}

console.log('Smaller integer is: ' + number)
