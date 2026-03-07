import { spawnSync } from 'node:child_process';

function run(command, args) {
  const result = spawnSync(command, args, {
    stdio: 'inherit',
    shell: process.platform === 'win32',
  });

  return result.status ?? 1;
}

const llmsStatus = run('node', ['tools/generate-llms.js']);
if (llmsStatus !== 0) {
  console.warn('Warning: llms generation failed, continuing with build.');
}

const npmCmd = process.platform === 'win32' ? 'npm.cmd' : 'npm';
const viteStatus = run(npmCmd, ['exec', 'vite', 'build']);
process.exit(viteStatus);
