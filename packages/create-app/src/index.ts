#!/usr/bin/env node

import chalk from 'chalk';
import fs from 'fs-extra';
import kebabCase from 'lodash/kebabCase';

import { Flavor, FlavorFactory } from './flavors/flavor';
import { getTempDir } from './fs-utils';
import { makeGitUtils } from './git-utils';
import { makeJSUtils } from './js-utils';
import { packageJSONBuilder } from './package-json.utils';
import { prompt } from './prompts';

async function main(repo: string, tmp: string) {
  const git = makeGitUtils();

  const useNpm = false;
  const answers = await prompt();

  const root = kebabCase(answers.name);
  console.log(`creating a new react project in ${chalk.green(root)}.`);

  console.log('cloning white application');
  // git.clone(repo, tmp);
  git.cloneBranch(repo, 'master', tmp);

  console.log(`installing vanilla flavor`);
  const tplPath = `${tmp}/packages/react-vanilla`;
  fs.ensureDirSync(root);
  fs.copySync(tplPath, root);

  const packageJson = packageJSONBuilder()
    .fromFile(`${root}/package.json`)
    .setName(answers.name)
    .setDescription(answers.description)
    .setAuthor(answers.author);

  // Add Flavor
  if (answers.flavor !== 'react-vanilla') {
    console.log(`adding ${answers.flavor} flavor`);
    const factory: FlavorFactory = require(`./flavors/${answers.flavor}`).default;
    const flavor: Flavor = factory();
    flavor.updatePackageJSON(packageJson);
    flavor.writeFiles(tmp, root);
  }

  fs.writeJsonSync(`${root}/package.json`, packageJson.build());

  console.log('initializing Git repository');
  git.cwd(root);
  git.init();

  const js = makeJSUtils({
    root,
    useNpm,
  });

  console.log('installing packages');
  js.installPackages();

  console.log('prettifying files');
  js.prettify('package.json');

  console.log('adding first commit');
  git.addAll();
  git.commit('First commit');
}

(async () => {
  const repo = 'git@github.com:daniel-jorge/crz-react-starter.git';
  const tmp = getTempDir();
  try {
    await main(repo, tmp);
    console.log(chalk.green('✨ Done'));
  } catch (error) {
    console.error(chalk.red(error));
  } finally {
    if (fs.existsSync(tmp)) {
      fs.removeSync(tmp);
    }
  }
})();
