const randomNumber = Math.floor(Math.random() * 10)

const checkingParity = () => {
let answer = readlineSync.question('Your answer:')
if (randomNumber % 2 === 0 && answer === 'yes') {
    console.log('Correct!')
  }
  else if (randomNumber % 2 !== 0 && answer === 'no'){
    console.log()
  }
}
