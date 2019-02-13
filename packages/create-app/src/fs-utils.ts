import os from 'os';
import uuid from 'uuid';

export function getTempDir() {
  return `${os.tmpdir()}/${uuid.v1()}`;
}
