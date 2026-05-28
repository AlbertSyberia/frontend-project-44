import readlineSync from 'readline-sync'

export const playerName = () => {
  return readlineSync.question('May I have your name? ')
}
