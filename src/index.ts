/**
 * The program shows how to get input
 *   and deal with numbers.
 *
 * By:      Igor Zhelezniak
 * Version: 1.0
 * Since:   2022-09-21
 */

import promptSync from 'prompt-sync'

const prompt = promptSync()
let logNumber: number | undefined

console.log('The truck can carry 1100kg')
console.log('Maple logs weigh 20 kg/m')
console.log('You can cut them into pieces of 0.25m, 0.5m, and 1m.')
const logLeinght = prompt('Choose how long to cut: ')

if (logLeinght === '0.25') {
  logNumber = 1100 / 5
  console.log(`\n${logNumber} logs need to be placed on the truck.`)
} else if (logLeinght === '0.5') {
  logNumber = 1100 / 10
  console.log(`\n${logNumber} logs need to be placed on the truck.`)
} else if (logLeinght === '1') {
  logNumber = 1100 / 20
  console.log(`\n${logNumber} logs need to be placed on the truck.`)
} else {
  console.log('\nPlease choose 1 of 3 option')
}

console.log('\nDone.')
