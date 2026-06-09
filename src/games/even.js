import { questionAndAnswer, randomNumber, win, showWrongAnswer, showCorrectAnswer } from '../../src/index.js'
import { greetingUser } from '../cli.js'

export const checkingParity = () => {
  const name = greetingUser()

  console.log('Answer "yes" if the number is even, otherwise answer "no".')
  let matchesPlayed = 0
  const numberOfMatches = 3
  while (matchesPlayed < numberOfMatches) {
    const question = randomNumber(1, 10)
    const answerUser = questionAndAnswer(question)
    const answer = question % 2 === 0 ? 'yes' : 'no'

    if (answer === answerUser) {
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
