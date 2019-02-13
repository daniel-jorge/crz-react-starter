import fs from 'fs-extra';
import cloneDeep from 'lodash/cloneDeep';

import { PackageJSON } from './package-json';

export interface PackageJSONBuilder {
  fromJson: (packageJSON: PackageJSON) => PackageJSONBuilder;
  fromFile: (fileName: string) => PackageJSONBuilder;
  setName: (name: string) => PackageJSONBuilder;
  setDescription: (description: string) => PackageJSONBuilder;
  setAuthor: (author: string) => PackageJSONBuilder;
  addScript: (name: string, command: string) => PackageJSONBuilder;
  addDependency: (name: string, version: string) => PackageJSONBuilder;
  addDevDependency: (name: string, version: string) => PackageJSONBuilder;
  addPeerDependency: (name: string, version: string) => PackageJSONBuilder;
  build: () => PackageJSON;
  set: (attr: keyof PackageJSON, value: any) => PackageJSONBuilder;
}

export function packageJSONBuilder(): PackageJSONBuilder {
  let pkg: PackageJSON;
  const api = {
    fromJson: (packageJSON: PackageJSON): PackageJSONBuilder => {
      pkg = cloneDeep(packageJSON);
      return api;
    },
    fromFile: (fileName: string): PackageJSONBuilder => {
      pkg = fs.readJsonSync(fileName);
      return api;
    },
    setName: (name: string): PackageJSONBuilder => api.set('name', name),
    setDescription: (description: string): PackageJSONBuilder => api.set('description', description),
    setAuthor: (author: string): PackageJSONBuilder => api.set('author', author),
    addScript: (name: string, command: string) => {
      if (!pkg.scripts) {
        pkg.scripts = {};
      }
      pkg.scripts[name] = command;
      return api;
    },
    addDependency: (name: string, version: string) => {
      if (!pkg.dependencies) {
        pkg.dependencies = {};
      }
      pkg.dependencies[name] = version;
      return api;
    },
    addDevDependency: (name: string, version: string) => {
      if (!pkg.devDependencies) {
        pkg.devDependencies = {};
      }
      pkg.devDependencies[name] = version;
      return api;
    },
    addPeerDependency: (name: string, version: string) => {
      if (!pkg.peerDependencies) {
        pkg.peerDependencies = {};
      }
      pkg.peerDependencies[name] = version;
      return api;
    },
    set: <K extends keyof PackageJSON>(attr: K, value: PackageJSON[K]) => {
      pkg[attr] = value;
      return api;
    },
    build: () => {
      return pkg;
    },
  };
  return api;
}
