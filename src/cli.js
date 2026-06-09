import readlineSync from 'readline-sync'

const playerName = () => {
  console.log('Welcome to the Brain Games!')
  return readlineSync.question('May I have your name? ')
}

export const greetingUser = () => {
  const name = playerName()
  console.log(`Hello, ${name}`)
  return name
}
