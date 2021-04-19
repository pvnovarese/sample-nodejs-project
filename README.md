# sample-nodejs-project

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
[![Maintainability](https://api.codeclimate.com/v1/badges/302ed2e8c61f4303e378/maintainability)](https://codeclimate.com/github/elfrank/sample-nodejs-project/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/302ed2e8c61f4303e378/test_coverage)](https://codeclimate.com/github/elfrank/sample-nodejs-project/test_coverage)

[**sample-nodejs-project**](https://github.com/elfrank/sample-nodejs-project) gets you started with a [walking skeleton](https://www.henricodolfing.com/2018/04/start-your-project-with-walking-skeleton.html) for your next node.js library or app.

Forget about the boilerplate stuff and get started on your project.

## Highlights
* **Backwards compatible Javascript** through [Babel](https://babeljs.io/). Modify `.babelrc` to update its configuration.
* **Typescript support**. Modify `.tsconfig.json`, `tsconfig.cjs.json` and `tsconfig.esm.json` to update its configuration.
* **Linting** through [ESlint](http://eslint.org/). Modify `.eslintrc` to update its configuration.
* **Docs Generation** through [Typedoc](https://typedoc.org/).
* **Unit Testing** through [Mocha](https://mochajs.org/).
* **Unit Testing Coverage** through [Istanbul](https://github.com/istanbuljs/nyc). Modify `.nycrc.json` to update its configuration.
* **Unit Testing Coverage reporting** through [CodeClimate](https://codeclimate.com/).
* **Standard Commit Messages** through [commitizen](https://github.com/commitizen/cz-cli).
* **Automated releases** through [semantinc-release](https://github.com/semantic-release/semantic-release). Modify `release.config.js` to update its configuration.
* **Github Actions** for PR commits: linting, testing, coverage, CodeClimate code quality
* **Github Actions** for merging PRs: automated releases (Github tagging only).

## Setup

Install [nvm](https://github.com/nvm-sh/nvm) (node version manager)
```bash
# install and use the version specified in .nvmrc
nvm i

# install global packages
npm install -g commitizen

# install node_modules
npm install
```

## Scripts

```bash
# run TypeScript compilation process
npm run build

# build docs
npm run docs

# run linter
npm run lint src/

# run unit tests without coverage
npm run test

# run unit tests with coverage
npm run test:coverage

# run example
node examples/hello-world.cjs.js

```

## Forking
Besides the instructions above, do the following:
1. Delete CHANGELOG.md. It will be regenerated in your first release.
2. Set the `version` field in `package.json` to `1.0.0`.
3. Update attributes in `package.json`.
4. Update the `README.md` accordingly.
5. Generate the following secrets for your Github Actions (Repo -> Settings -> Secrets)
  * `GH_TOKEN`: Create a [personal token](https://docs.github.com/en/github/authenticating-to-github/creating-a-personal-access-token). This is needed for the automated semantic releases.
  * `CC_TEST_REPORTER_ID`: Once you add your repo to [CodeClimate](https://codeclimate.com/), go to Repo Settings -> Test Coverage. Get the `Test Reporter ID` from there. This is needed to send the test coverage to CodeClimate.

## How-tos
* Taking advantage of commitizen auto-formatting
```bash
# instead of git commit, use
git cz
```

* Testing semantic releases locally
```bash
GITHUB_TOKEN=your_token npx semantic-release --dry-run
```
