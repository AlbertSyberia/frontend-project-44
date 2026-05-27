import readlineSync from 'readline-sync'

export const checkingParity = (playerName) => {
  let numberOfMatches = 0
  while (numberOfMatches < 3) {
    const randomNumber = Math.floor(Math.random() * 10) + 1
    console.log(`Question:${randomNumber}`)

    const answer = readlineSync.question('Your answer: ')
    const parity = randomNumber % 2 === 0 ? 'yes' : 'no'

    if (parity === 'yes' && answer === 'yes') {
      console.log('Correct!')
      numberOfMatches += 1
    }

    else if (parity === 'no' && answer === 'no') {
      console.log('Correct!')
      numberOfMatches += 1
    }

    else {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${parity}.\nLet's try again, ${playerName}`)
      numberOfMatches += 3
    }
  }
  console.log(`Congratulations, ${playerName}`)
}
