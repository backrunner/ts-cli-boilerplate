import { Command } from 'commander'
import { name, version } from '../package.json'

const program = new Command()

program.name(name)
program.version(version)

program.parse()
