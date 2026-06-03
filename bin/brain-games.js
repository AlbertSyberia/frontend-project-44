#!/usr/bin/env node
import { playerName } from '../src/cli.js'
import { checkingParity } from './games/brain-even.js'
import { calcGames } from './games/brain-calc.js'
import { gcdGames } from './games/brain-gcd.js'

const name = playerName()

console.log(`Hello, ${name}`)

checkingParity(name)

calcGames(name)

gcdGames(name)
