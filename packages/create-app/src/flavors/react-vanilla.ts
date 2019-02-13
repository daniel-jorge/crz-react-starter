import { Flavor } from './flavor';

export default function makeVanillaFlavor(): Flavor {
  return {
    // tslint:disable-next-line:no-empty
    updatePackageJSON: () => {},

    // tslint:disable-next-line:no-empty
    writeFiles: () => {},
  };
}
