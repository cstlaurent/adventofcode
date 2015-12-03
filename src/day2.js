'use strict'

let lineReader = require('line-reader')

let totalPaper = 0

lineReader.eachLine('data/day2.txt', function (line, last) {
  let split = line.split('x')
  totalPaper += calculateNeededPaper(split[0], split[1], split[2])
  if (last) {
    console.log('The elves need ' + totalPaper + ' square feet of paper.')
  }
})

function calculateNeededPaper (length, width, height) {
  let side1 = length * width
  let side2 = length * height
  let side3 = width * height

  var extra = Math.min(side1, side2, side3)

  return 2 * side1 + 2 * side2 + 2 * side3 + extra
}
