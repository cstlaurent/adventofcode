'use strict'

let fs = require('fs')

let posX = 0
let posY = 0

let houses = {}
houses[posX + '|' + posY] = true

let dataStream = fs.createReadStream('src/day3/day3data.txt', {
  encoding: 'utf8'
})

dataStream.on('readable', () => {
  let caracter
  while ((caracter = dataStream.read(1)) !== null) {
    switch (caracter) {
      case '<':
        posX--
        break
      case '^':
        posY++
        break
      case '>':
        posX++
        break
      case 'v':
        posY--
        break
      default:
        // Invalid char, do nothing
        break
    }
    houses[posX + '|' + posY] = true
  }
})

dataStream.on('end', () => {
  var keyCount = Object.keys(houses).length
  console.log('Santa delivered presents to ' + keyCount + ' different houses')
})
