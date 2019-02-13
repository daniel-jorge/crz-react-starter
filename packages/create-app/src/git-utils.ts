import { execSync } from 'child_process';
import defaultsDeep from 'lodash/defaultsDeep';

interface GitUtilsOptions {
  root: string;
}

interface GitUtilsApi {
  clone: (repo: string, directory: string) => void;
  cloneBranch: (repo: string, branch: string, directory: string) => void;
  init: () => void;
  addAll: () => void;
  commit: (message: string) => void;
  cwd: (directory: string) => void;
}

export function makeGitUtils(jsOptions?: GitUtilsOptions): GitUtilsApi {
  const options = defaultsDeep(jsOptions, {
    root: '.',
  });

  const api = {
    clone: (repo: string, directory: string) => {
      execSync(`git clone ${repo} ${directory}`, { stdio: 'ignore' });
      return api;
    },
    cloneBranch: (repo: string, branch: string, directory: string) => {
      execSync(`git clone --single-branch --branch ${branch} ${repo} ${directory}`, { stdio: 'ignore' });
      return api;
    },
    init: () => {
      execSync('git init', { cwd: options.root, stdio: 'ignore' });
      return api;
    },
    addAll: () => {
      execSync('git add .', { cwd: options.root, stdio: 'ignore' });
      return api;
    },
    commit: (message: string) => {
      execSync(`git commit -m "${message}"`, { cwd: options.root, stdio: 'ignore' });
      return api;
    },
    cwd: (directory: string) => {
      options.root = directory;
      return api;
    },
  };

  return api;
}
