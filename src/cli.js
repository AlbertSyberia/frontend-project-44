import readlineSync from 'readline-sync'

export const playerName = () => {
  const name = readlineSync.question('May I have your name? ')
  return name
}
