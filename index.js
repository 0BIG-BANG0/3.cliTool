#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import ora from 'ora';
import chalk from 'chalk';
import cliProgress from 'cli-progress';

// Get the file path from command line arguments
const filePath = process.argv[2];

if (!filePath) {
  console.error(chalk.red('Please provide a file path'));
  process.exit(1);
}

const spinner = ora('Preparing to read file...').start();
const progressBar = new cliProgress.SingleBar({}, cliProgress.Presets.shades_classic);

// Simulate a progress update
let value = 0;
progressBar.start(100, 0);

const interval = setInterval(() => {
  value += 20; // Increase the value to simulate reading progress
  progressBar.update(value);
  if (value >= 100) {
    clearInterval(interval);
    progressBar.stop();
    spinner.start('Reading file...');

    try {
      const data = fs.readFileSync(filePath, 'utf8');
      spinner.succeed('File read successfully!');
      console.log(chalk.green('\nFile Content:\n') + chalk.grey(data));
    } catch (err) {
      spinner.fail('Error reading file');
      console.error(chalk.red('Error:'), err.message);
      process.exit(1);
    }
  }
}, 200);
