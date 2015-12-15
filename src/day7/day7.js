'use strict'
var _ = require('lodash')
let lineReader = require('line-reader')

let signals = {}

lineReader.eachLine('src/day7/day7data.txt', function (line, last) {
  let splitted = line.split(' -> ')
  signals[splitted[1]] = splitted[0]

  if (last) {
    let result = processSignal('a')
    console.log('Result for wire a is: ' + result)
    signals['b'] = `${result}`
    cachedProcessSignal = _.memoize(processSignal)
    let newResult = processSignal('a')
    console.log('Result for wire a when b is overridden is: ' + newResult)
  }
})

let cachedProcessSignal = _.memoize(processSignal)

function processSignal (signalName) {
  if (signals[signalName] === undefined) {
    return +signalName
  }
  let equation = signals[signalName].split(' ')

  if (equation[1] === undefined) {
    if (isNum(equation[0])) {
      return +equation[0]
    } else {
      return cachedProcessSignal(equation[0])
    }
  }
  if (equation[0] === 'NOT') {
    return ~cachedProcessSignal(equation[1])
  } else {
    let instruction = equation[1]
    switch (instruction) {
      case 'AND':
        return cachedProcessSignal(equation[0]) & cachedProcessSignal(equation[2])

      case 'OR':
        return cachedProcessSignal(equation[0]) | cachedProcessSignal(equation[2])

      case 'RSHIFT':
        return cachedProcessSignal(equation[0]) >> cachedProcessSignal(equation[2])

      case 'LSHIFT':
        return cachedProcessSignal(equation[0]) << cachedProcessSignal(equation[2])
    }
  }
}

let isNum = (val) => /^\d+$/.test(val)
