#!/usr/bin/env node

import program from 'commander';
import { generateDocs } from './commands/generate/generate-docs';
import { generateConfig } from './commands/init/generate-config';
import { configFileName } from './conf';

program
    .version('1.0.0')
    .description('Documentation generator')
    .action(generateDocs);

program
    .command('init')
    .description(`generates ${configFileName} file template`)
    .action(generateConfig);

program.parse(process.argv);