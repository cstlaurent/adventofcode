'use strict'

let lineReader = require('line-reader')

let totalPaper = 0
let totalRibbon = 0

lineReader.eachLine('data/day2.txt', function (line, last) {
  let measurements = line.split('x')
  calculateNeededPaper(measurements)
  if (last) {
    console.log('The elves need ' + totalPaper + ' square feet of paper.')
    console.log('The elves need ' + totalRibbon + ' feet of ribbon.')
  }
})

function calculateNeededPaper (measurements) {
  measurements.sort((a, b) => {
    return a - b
  })

  let side1 = measurements[0] * measurements[1]
  let side2 = measurements[0] * measurements[2]
  let side3 = measurements[1] * measurements[2]

  totalPaper += (3 * side1 + 2 * side2 + 2 * side3)

  totalRibbon += (2 * measurements[0] + 2 * measurements[1] + measurements[0] * measurements[1] * measurements[2])
}
