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
// let ageNumber: number

const logLengthsString = prompt(
  'What is log lengths?(choose 1 of 3: 0.25m, 0.5m, 1m) ',
)
let logLengthsNumber = parseInt(logLengthsString)
let logG = 20 / logLengthsNumber
if ((logLengthsNumber = 0.25)) {
  let logsNumber = 1100 / logG
  console.log(`logsNumber  ${logsNumber}`)
} else if ((logLengthsNumber = 0.5)) {
  let logsNumber = 1100 / logG
  console.log(`logsNumber ${logsNumber}`)
} else {
  console.log(`-----`)
}
console.log('\nDone.')
