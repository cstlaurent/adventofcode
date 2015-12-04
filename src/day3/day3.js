'use strict'

let fs = require('fs')

let posSantaX = 0
let posSantaY = 0

let posSantaX2 = 0
let posSantaY2 = 0

let posRobotX2 = 0
let posRobotY2 = 0

let houses = {}
houses[0 + '|' + 0] = true

let houses2 = {}
houses2[0 + '|' + 0] = true

let dataStream = fs.createReadStream('src/day3/day3data.txt', {
  encoding: 'utf8'
})

dataStream.on('readable', () => {
  let caracter
  let index = 0
  while ((caracter = dataStream.read(1)) !== null) {
    index++
    switch (caracter) {
      case '<':
        posSantaX--
        index % 2 ? posSantaX2-- : posRobotX2--
        break
      case '^':
        posSantaY++
        index % 2 ? posSantaY2++ : posRobotY2++
        break
      case '>':
        posSantaX++
        index % 2 ? posSantaX2++ : posRobotX2++
        break
      case 'v':
        posSantaY--
        index % 2 ? posSantaY2-- : posRobotY2--
        break
      default:
        // Invalid char, do nothing
        break
    }
    houses[posSantaX + '|' + posSantaY] = true
    index % 2 ? houses2[posSantaX2 + '|' + posSantaY2] = true : houses2[posRobotX2 + '|' + posRobotY2] = true
  }
})

dataStream.on('end', () => {
  var keyCount = Object.keys(houses).length
  var keyCount2 = Object.keys(houses2).length
  console.log('Santa delivered presents to ' + keyCount + ' different houses')
  console.log('Santa and it\'s robot delivered presents to ' + keyCount2 + ' different houses')
})
