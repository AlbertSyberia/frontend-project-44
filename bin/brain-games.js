#!/usr/bin/env node
import { playerName } from '../src/cli.js'
import { checkingParity } from './brain-even.js'

console.log('Welcome to the Brain Games!')

const name = playerName()

console.log(`Hello, ${name}!`)

console.log('Answer "yes" if the number is even, otherwise answer "no".')

checkingParity(name)
