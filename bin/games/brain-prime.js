import { randomNumber, runGame } from '../../src/index.js'

const primeNumber = () => {
  const num = randomNumber(1, 100)

  const isPrime = (number) => {
    if (number < 2) {
      return 'no'
    }
    if (number === 2) {
      return 'yes'
    }
    if (number % 2 === 0) {
      return 'no'
    }
    const rootNumber = Math.floor(Math.sqrt(number))
    for (let i = 3; i <= rootNumber; i++) {
      if (number % i === 0) {
        return 'no'
      }
    }
    return 'yes'
  }

  const answer = isPrime(num)
  return { question: num, answer }
}

export const primeNumberGame = (name) => {
  runGame ({
    name,
    ruleGame: 'Answer "yes" if given number is prime. Otherwise answer "no".',
    generateRoundData: primeNumber,
  })
}
