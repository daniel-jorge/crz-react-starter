import { PackageJSONBuilder } from '../package-json.utils';

export interface FlavorFactory {
  (): Flavor;
}

export interface Flavor {
  updatePackageJSON: (pkg: PackageJSONBuilder) => void;
  writeFiles: (from: string, target: string) => void;
}
