#!/usr/bin/env node
import { playerName } from '../src/cli.js'
import { checkingParity } from './games/brain-even.js'
import { calcGames } from './games/brain-calc.js'
import { gcdGames } from './games/brain-gcd.js'
import { progressionGames } from './games/brain-progression.js'
import { primeNumberGame } from './games/brain-prime.js'

const name = playerName()

console.log(`Hello, ${name}`)

checkingParity(name)

calcGames(name)

gcdGames(name)

progressionGames(name)

primeNumberGame(name)
