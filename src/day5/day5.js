'use strict'

'use strict'
let lineReader = require('line-reader')

module.exports = {
  calculateNeededPaper: calculateNeededPaper
}

let niceWords = 0

lineReader.eachLine('src/day5/day5data.txt', function (line, last) {
  part2(line)
  if (last) {
    console.log('Good words total: ' + niceWords)
  }
})

function calculateNeededPaper (line) {
  let vowel = line.match(/[aeiou]/ig)
  if (vowel !== null && vowel.length >= 3) {
    let doubleletter = line.match(/([a-z])\1/i)
    if (doubleletter !== null && doubleletter.length > 0) {
      if (line.indexOf('ab') === -1 &&
        line.indexOf('cd') === -1 &&
        line.indexOf('pq') === -1 &&
        line.indexOf('xy') === -1) {
        niceWords++
      }
    }
  }
}

function part2 (line) {
  let dual = line.match(/([A-Za-z]{2})[a-z]*\1/ig)
  if (dual !== null) {
    let repeater = line.match(/([A-Za-z]{1})[a-z]{1}\1/ig)
    if (repeater !== null) {
      niceWords++
    }
  }
}
