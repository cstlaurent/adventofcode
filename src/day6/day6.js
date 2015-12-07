'use strict'

let lineReader = require('line-reader')

module.exports = {
}

let lights = new Array(1000)
let totalHouses = 0

for (let index = 0; index < lights.length; index++) {
  lights[index] = new Array(1000)
}

for (let x = 0; x < 1000; x++) {
  for (let y = 0; y <= 1000; y++) {
    lights[x][y] = 0
  }
}

lineReader.eachLine('src/day6/day6data.txt', function (line, last) {
  let splitted = line.split(' ')
  if (line.startsWith('toggle')) {
    let corner1 = splitted[1].split(',')
    let corner2 = splitted[3].split(',')

    for (let x = +corner1[0]; x <= +corner2[0]; x++) {
      for (let y = +corner1[1]; y <= +corner2[1]; y++) {
        lights[x][y] += 2
      }
    }
  } else if (line.startsWith('turn on')) {
    let corner1 = splitted[2].split(',')
    let corner2 = splitted[4].split(',')

    for (let x = +corner1[0]; x <= +corner2[0]; x++) {
      for (let y = +corner1[1]; y <= +corner2[1]; y++) {
        lights[x][y] += 1
      }
    }
  } else if (line.startsWith('turn off')) {
    let corner1 = splitted[2].split(',')
    let corner2 = splitted[4].split(',')

    for (let x = +corner1[0]; x <= +corner2[0]; x++) {
      for (let y = +corner1[1]; y <= +corner2[1]; y++) {
        if (lights[x][y] > 0) {
          lights[x][y] -= 1
        }
      }
    }
  }

  if (last) {
    lights.forEach((col) => {
      col.forEach((item) => {
        if (item !== undefined) {
          totalHouses += item
        }
      })
    })
    console.log('There is ' + totalHouses + ' houses lit.')
  }
})
