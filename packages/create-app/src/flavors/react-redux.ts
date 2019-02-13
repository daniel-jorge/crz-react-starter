import fs from 'fs-extra';

import { PackageJSONBuilder } from '../package-json.utils';
import { Flavor } from './flavor';

export default function makeReduxFlavor(): Flavor {
  const SOURCE: string = `packages/react-app-apollo`;

  return {
    updatePackageJSON: (pkg: PackageJSONBuilder) => {
      pkg.addDependency('apollo-cache-inmemory', '^1.3.12');
      pkg.addDependency('apollo-client', '^2.4.8');
      pkg.addDependency('apollo-link-http', '^1.5.9');
      pkg.addDependency('graphql', '^14.0.2');
      pkg.addDependency('graphql-tag', '^2.10.0');
      pkg.addDependency('react-apollo', '^2.3.3');

      pkg.addDevDependency('@types/graphql', '^14.0.4');
      pkg.addDevDependency('apollo', '^2.1.9');

      pkg.addScript('schema', 'apollo schema:download --config=apollo.config.js');
      pkg.addScript(
        'types',
        'apollo client:codegen src/graphql/schema.ts --includes=src/**/*.ts --localSchemaFile=./schema.json --outputFlat --target=typescript',
      );
    },

    writeFiles: (from: string, target: string) => {
      fs.copyFileSync(`${from}/${SOURCE}/src/graphql`, target);
      fs.copyFileSync(`${from}/${SOURCE}/src/providers/*`, target);
      fs.copyFileSync(`${from}/${SOURCE}/src/apollo-client.ts`, target);
      fs.copyFileSync(`${from}/${SOURCE}/apollo.config.js`, target);
    },
  };
}
