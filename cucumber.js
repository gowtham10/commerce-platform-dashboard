let common = [
  'e2e/features/**/*.feature',
  // '--require-module ts-node/register', //typescript cucumber
  '--require e2e/step-definitions/**/*.js',
  '--require e2e/hooks/**/*.js',
  '--require e2e/world/index.js',
  "--format html:e2e-report.html",
  '--format progress-bar',
  `--format-options '{"snippetInterface": "async-await"}'`,
  `--world-parameters '{"appUrl": "http://localhost:3000/", "headless": true}'`,
  ].join(' ');

module.exports = {
    default: common
}

