import commander from 'commander';
import { name, version } from './package.json';

const program = new commander.Command();

program.name(name);
program.version(version);

program.parse();
