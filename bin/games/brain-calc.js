import { runGame, randomNumber, randomOperator } from '../../src/index.js'

const structureGame = () => {
  const numberOne = randomNumber(1, 100)
  const numberTwo = randomNumber(1, 10)
  const operator = randomOperator()

  const calculation = `${numberOne} ${operator} ${numberTwo} `

  let answer
  switch (operator) {
    case '+':
      answer = numberOne + numberTwo
      break
    case '-':
      answer = numberOne - numberTwo
      break
    case '*':
      answer = numberOne * numberTwo
      break
    default:
      break
  }

  return { question: calculation, answer }
}

export const calc = (name) => {
  runGame({
    name,
    ruleGame: 'What is the result of the expression?',
    generateRoundData: structureGame,
  })
}
