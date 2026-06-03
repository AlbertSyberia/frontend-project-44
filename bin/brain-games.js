#!/usr/bin/env node
import { playerName } from '../src/cli.js'
import { checkingParity } from './games/brain-even.js'
import { calc } from './games/brain-calc.js'

const name = playerName()

console.log(`Hello, ${name}`)

checkingParity(name)

calc(name)
