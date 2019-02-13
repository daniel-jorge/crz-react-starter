export interface PackageJSON {
  name: string;

  version?: string;

  description?: string;

  keywords?: string[];

  homepage?: string;

  bugs?: string | Bugs;

  license?: string;

  author?: string | Author;

  contributors?: string[] | Author[];

  files?: string[];

  main?: string;

  bin?: string | BinMap;

  man?: string | string[];

  directories?: Directories;

  repository?: string | Repository;

  scripts?: ScriptsMap;

  config?: Config;

  dependencies?: DependencyMap;

  devDependencies?: DependencyMap;

  peerDependencies?: DependencyMap;

  optionalDependencies?: DependencyMap;

  bundledDependencies?: string[];

  engines?: Engines;

  os?: string[];

  cpu?: string[];

  preferGlobal?: boolean;

  private?: boolean;

  publishConfig?: PublishConfig;
}

/**
 * An author or contributor
 */
export interface Author {
  name: string;
  email?: string;
  homepage?: string;
}

/**
 * A map of exposed bin commands
 */
export interface BinMap {
  [commandName: string]: string;
}

/**
 * A bugs link
 */
export interface Bugs {
  email: string;
  url: string;
}

export interface Config {
  name?: string;
  config?: Object;
}

/**
 * A map of dependencies
 */
export interface DependencyMap {
  [dependencyName: string]: string;
}

/**
 * CommonJS package structure
 */
export interface Directories {
  lib?: string;
  bin?: string;
  man?: string;
  doc?: string;
  example?: string;
}

export interface Engines {
  node?: string;
  npm?: string;
}

export interface PublishConfig {
  registry?: string;
}

/**
 * A project repository
 */
export interface Repository {
  type: string;
  url: string;
}

export interface ScriptsMap {
  [scriptName: string]: string;
}
