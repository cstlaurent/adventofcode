'use strict'

let lineReader = require('line-reader')

let signals = {}

lineReader.eachLine('src/day6/day6data.txt', function (line, last) {
  let splitted = line.split(' ')
  if (splitted[0] === 'NOT') {
    
  } else {
    let instruction = splitted[1]
    switch (instruction) {
      case 'AND':

        break

      case 'OR':

        break

      case 'RSHIFT':

        break

      case 'LSHIFT':

        break

      default: // Simple value assignation

        break
    }
  }
  if (last) {
    console.log('Result for wire A is: ')
  }
})
