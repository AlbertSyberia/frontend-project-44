import readlineSync from 'readline-sync'
import { greetingUser } from './cli.js'

const questionAndAnswer = (value) => {
  console.log(`Question: ${value}`)
  return readlineSync.question('Your answer: ')
}

const showWrongAnswer = (answerUser, answer, name) => {
  console.log(`'${answerUser}' is wrong answer ;(. Correct answer was '${answer}'.\nLet's try again, ${name}`)
}

const showCorrectAnswer = () => {
  console.log('Correct!')
}

const win = (name) => {
  console.log(`Congratulations, ${name}!`)
}

export const randomNumber = (min = 1, max = 100) => {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

export const randomOperator = () => {
  const operators = ['+', '-', '*']
  const selectedOperator = Math.floor(Math.random() * operators.length)
  return operators[selectedOperator]
}

export const runGame = ({ ruleGame, generateRoundData }) => {
  const name = greetingUser()
  console.log(ruleGame)
  let matchesPlayed = 0
  const numberOfMatches = 3

  while (matchesPlayed < numberOfMatches) {
    const { question, answer } = generateRoundData()
    const answerUser = questionAndAnswer(question)
    const isCorrect = answerUser === answer.toString()

    if (isCorrect) {
      showCorrectAnswer()
      matchesPlayed += 1

      if (matchesPlayed === numberOfMatches) {
        win(name)
      }
    }

    else {
      showWrongAnswer(answerUser, answer, name)
      break
    }
  }
}
