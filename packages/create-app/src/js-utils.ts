import { execSync } from 'child_process';
import defaultsDeep from 'lodash/defaultsDeep';

interface JSUtilsOptions {
  root: string;
  useNpm: boolean;
}

interface JSUtilsApi {
  installPackages: () => void;
  npmInstall: () => void;
  yarnInstall: () => void;
  prettify: (file: string) => void;
}

export function makeJSUtils(jsOptions: JSUtilsOptions): JSUtilsApi {
  const options = defaultsDeep(jsOptions, {
    useNpm: false,
  });

  const api = {
    installPackages: () => {
      if (options.useNpm) {
        api.npmInstall();
      } else {
        api.yarnInstall();
      }
      return api;
    },

    npmInstall: () => {
      execSync('npm install', { cwd: options.root, stdio: 'inherit' });
      return api;
    },

    yarnInstall: () => {
      execSync('yarn install', { cwd: options.root, stdio: 'inherit' });
      return api;
    },

    prettify: (file: string) => {
      execSync(`yarn prettier --write ${file}`, { cwd: options.root, stdio: 'ignore' });
      return api;
    },
  };

  return api;
}
