import { randomNumber, runGame } from '../../src/index.js'

const progression = () => {
  const numberStart = randomNumber(1, 100)
  const step = randomNumber(1, 10)
  const progressionLength = 10
  let numberSeries = []

  for (let i = 0; i < progressionLength; i++) {
    const numberProgression = (numberStart + i * step)
    numberSeries.push(numberProgression)
  }
  return numberSeries
}

const unknownInProgression = () => {
  const seriesOfProgressions = progression()
  const unknownIndex = randomNumber(0, 9)
  const answer = seriesOfProgressions[unknownIndex]
  const questionArray = [...seriesOfProgressions]
  questionArray[unknownIndex] = '..'
  return { question: questionArray.join(' '), answer }
}

export const progressionGames = () => {
  runGame({
    ruleGame: 'What number is missing in the progression?',
    generateRoundData: unknownInProgression,
  })
}

console.log(unknownInProgression())
