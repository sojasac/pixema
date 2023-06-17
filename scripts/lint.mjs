import chalk from 'chalk';
import { execaSync } from 'execa';
import { icons } from './helper.mjs';
import { runEslint } from './runEslint.mjs';
import { runTsc } from './runTsc.mjs';
import { validatePackageJson } from './validatePackageJson.mjs';

const shouldAutoFix = process.argv.includes('--fix');
const shouldSkipEslint = process.argv.includes('--skip-eslint');
const shouldSkipTypescript = process.argv.includes('--skip-ts');
const shouldSkipJson = process.argv.includes('--skip-json');

(async function lint() {
  console.warn(
    chalk.yellow.bold(
      `${icons.info} Running code quality and formatting checks...\n`
    )
  );
  let success = true;

  try {
    console.warn(
      chalk.blue(
        `${icons.bullet} Checking${
          shouldAutoFix ? ' and fixing' : ''
        } package.json file...`
      )
    );
    await validatePackageJson(shouldAutoFix);
    console.warn(
      chalk.green(
        `${icons.check} File package.json has been successfully validated!\n`
      )
    );
  } catch (err) {
    success = false;
    console.error(err);
    console.error(
      chalk.red(
        `${icons.error} File package.json is invalid. See errors above\n`
      )
    );
  }

  try {
    if (shouldSkipEslint) {
      console.warn(
        chalk.yellow(`${icons.warning} Skipping eslint rules check\n`)
      );
    } else {
      console.warn(
        chalk.blue(
          `${icons.bullet} Checking${
            shouldAutoFix ? ' and fixing' : ''
          } eslint rules...`
        )
      );
      const results = await runEslint(shouldAutoFix);

      if (
        results.some(
          ({ warningCount, fixableWarningCount }) =>
            warningCount > 0 || fixableWarningCount > 0
        )
      ) {
        console.warn(
          chalk.yellow(`${icons.warning} Linter success with warnings\n`)
        );
      } else {
        console.warn(chalk.green(`${icons.check} Linter success\n`));
      }
    }
  } catch (err) {
    success = false;
    console.error(chalk.red.bold(`${icons.error} ${err.message}\n`));
  }

  try {
    if (shouldSkipTypescript) {
      console.warn(chalk.yellow(`${icons.warning} Skipping typescript check\n`));
    } else {
      console.warn(chalk.blue(`${icons.bullet} Checking typescript...`));
      await runTsc();
      console.warn(chalk.green(`${icons.check} Type checking passes\n`));
    }
  } catch (err) {
    success = false;
    console.warn(chalk.bold('Typescript errors'));
    console.warn(err.stdout || err.stderr);
    console.error(
      chalk.red.bold(
        `  ${icons.error} Typescript failed due to the above errors\n`
      )
    );
  }

  try {
    if (shouldSkipJson) {
      console.warn(
        chalk.yellow(`${icons.warning} Skipping *.json files formatting\n`)
      );
    } else if (shouldAutoFix) {
      console.warn(chalk.blue(`${icons.bullet} Formatting *.json files!`));
      execaSync(
        'prettier',
        [
          '-u',
          '-w',
          '--ignore-unknown',
          '--no-error-on-unmatched-pattern',
          '--loglevel=warn',
          '*/**/*.json'
        ],
        {
          cwd: process.cwd(),
          preferLocal: true
        }
      );
      console.warn(
        chalk.green(`${icons.check} Formatted *.json files successfully\n`)
      );
    }
  } catch (err) {
    success = false;
    console.warn(chalk.bold('Prettier errors'));
    console.warn(err.stdout || err.stderr);
    console.error(
      chalk.red.bold(
        `${icons.error} Formatting *.json files failed due to the above errors\n`
      )
    );
  }

  if (success) {
    console.warn(chalk.bold.green(`${icons.check} All checks passed\n`));
    process.exit(0);
  } else {
    console.error(
      chalk.red.bold(
        `${icons.error} Code quality checks failed${
          !shouldAutoFix
            ? ', try running with --fix to attempt to automatically fix some issues'
            : ''
        }.\n`
      )
    );
    process.exit(1);
  }
})();
