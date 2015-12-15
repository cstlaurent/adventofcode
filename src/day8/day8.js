'use strict'

var _ = require('lodash')
let lineReader = require('line-reader')

let codeLength = 0
let memoryLength = 0

lineReader.eachLine('src/day8/day8data.txt', function (line, last) {
  let len = line.length
  codeLength += len
  let trimmed = line.substring(1, line.length - 1)

  for (var index = 0; index < trimmed.length; index++) {
    if (trimmed[index] === '\\') {
      if (trimmed[index + 1] === 'x') {
        memoryLength++
        index += 3
        continue
      }
      memoryLength++
      index++
      continue
    }
    memoryLength++
  }

  if (last) {
    console.log('Code length: ' + codeLength)
    console.log('Memory length: ' + memoryLength)
    console.log('Total is : ' + (codeLength - memoryLength))
  }
})
