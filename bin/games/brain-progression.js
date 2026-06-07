import { randomNumber, runGame } from '../../src/index.js'

const progression = () => {
  const numberStart = randomNumber(1, 100)
  const step = randomNumber(1, 10)
  const progressionLength = 10
  const arrProgression = []

  for (let i = 0; i < progressionLength; i++) {
    arrProgression.push(numberStart + i * step)
  }
  return arrProgression
}

const unknownInProgression = () => {
  const arrayTask = progression()
  const unknownIndex = randomNumber(0, 9)
  const answer = arrayTask[unknownIndex]
  const questionArray = [...arrayTask]
  questionArray[unknownIndex] = '..'
  return { question: questionArray, answer }
}

export const progressionGames = (name) => {
  runGame({
    name,
    ruleGame: 'What number is missing in the progression?',
    generateRoundData: unknownInProgression,
  })
}
