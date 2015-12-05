'use strict'

'use strict'
let lineReader = require('line-reader')

module.exports = {
  part1: part1,
  part2: part2
}

let niceWords1 = 0
let niceWords2 = 0

lineReader.eachLine('src/day5/day5data.txt', function (line, last) {
  part1(line)
  part2(line)
  if (last) {
    console.log('Good words total for part 1: ' + niceWords1)
    console.log('Good words total for part 2: ' + niceWords2)
  }
})

function part1 (line) {
  let vowel = line.match(/[aeiou]/ig)
  if (vowel !== null && vowel.length >= 3) {
    let doubleletter = line.match(/([a-z])\1/i)
    if (doubleletter !== null && doubleletter.length > 0) {
      if (line.indexOf('ab') === -1 &&
        line.indexOf('cd') === -1 &&
        line.indexOf('pq') === -1 &&
        line.indexOf('xy') === -1) {
        niceWords1++
      }
    }
  }
}

function part2 (line) {
  let dual = line.match(/([A-Za-z]{2})[a-z]*\1/ig)
  if (dual !== null) {
    let repeater = line.match(/([A-Za-z]{1})[a-z]{1}\1/ig)
    if (repeater !== null) {
      niceWords2++
    }
  }
}
