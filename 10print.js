/*
  10print.js Alternative written by Anthony Khaiat
  This project is meant to be a representation of the ethnic makeup of the U.S.
  With each skin color equating to a certain % of random values
*/
let sw = (process.stdout.columns / 3)-1
let w = 0
let d = 1
const b = 90

function rc (s) {
  return `\x1b[${s + Math.floor(Math.random() * 8)}m`
}


function draw () {
  setTimeout(draw, Math.random()*200)
  if (w > sw|| w < 0) {
    d = -d
  }
  w += d/2

  let row = ''
  for (let i = 0; i < w; i++) {
    //Whites
    if (Math.random() >= .4) row += rc(b)+'🏻'
    //Hispanic
    else if (Math.random() >= .2 && Math.random() < .4) row += rc(b) + '🏽'
    //African American
    else if (Math.random() >= .08 && Math.random() < .2) row += rc(b) + '🏿'
    //Asians, Native Americans, and Pacific Islanders
    else row += rc(b) + '🏼'
    // else row += rc(b) + '₿'
  }
  console.log(row)
} draw()
