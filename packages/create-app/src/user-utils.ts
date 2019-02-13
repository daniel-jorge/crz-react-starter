import { execSync } from 'child_process';

function execAndReturnAsString(cmd: string, defaultValue: string = ''): string {
  try {
    const buffer = execSync(cmd);
    return buffer.toString().trim();
  } catch (err) {
    return defaultValue;
  }
}

export function getUserName(): string {
  return execAndReturnAsString('git config --get user.name');
}

export function getUserEmail(): string {
  return execAndReturnAsString('git config --get user.email');
}
