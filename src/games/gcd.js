import { runGame, randomNumber } from '../../src/index.js'

const gcd = () => {
  let a = randomNumber(1, 100)
  let b = randomNumber(1, 100)

  const numbers = `${a} ${b}`

  while (b !== 0) {
    const temp = a % b
    a = b
    b = temp
  }

  const answer = a

  return { question: numbers, answer }
}

export const gcdGames = () => {
  runGame({
    ruleGame: 'Find the greatest common divisor of given numbers.',
    generateRoundData: gcd,
  })
}
