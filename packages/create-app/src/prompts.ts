import inquirer from 'inquirer';

import { getUserName } from './user-utils';

interface Answers {
  name: string;
  description: string;
  author: string;
  flavor: 'react-vanilla' | 'react-redux' | 'react-apollo';
}

export async function prompt() {
  return await inquirer.prompt<Answers>([
    {
      type: 'input',
      name: 'name',
      message: 'What is the application name?',
      validate: (name: string) => (!!name ? true : 'Name is mandatory'),
    },
    {
      type: 'input',
      name: 'description',
      message: 'Description?',
    },
    {
      type: 'input',
      name: 'author',
      message: 'Author?',
      default: getUserName(),
    },
    {
      type: 'input',
      name: 'basename',
      message: 'Base name?',
      default: '/',
    },
    {
      type: 'list',
      name: 'flavor',
      message: 'Flavor?',
      choices: [
        { name: 'vanilla', value: 'react-vanilla' },
        { name: 'redux', value: 'react-redux' },
        { name: 'apollo-graphql', value: 'react-apollo' },
      ],
    },
  ]);
}
