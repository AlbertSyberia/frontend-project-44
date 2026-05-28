import readlineSync from 'readline-sync'

export const checkingParity = (name) => {
  let matchesPlayed = 0
  const numberOfMatches = 3
  while (matchesPlayed < numberOfMatches) {
    const randomNumber = Math.floor(Math.random() * 10) + 1
    console.log(`Question: ${randomNumber}`)

    const answer = readlineSync.question('Your answer: ')
    const parity = randomNumber % 2 === 0 ? 'yes' : 'no'

    if (parity === 'yes' && answer === 'yes') {
      console.log('Correct!')
      matchesPlayed += 1
    }

    else if (parity === 'no' && answer === 'no') {
      console.log('Correct!')
      matchesPlayed += 1
    }

    else {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${parity}.\nLet's try again, ${name}`)
      break
    }
  }
  console.log(`Congratulations, ${name}`)
}
