# simple-nodejs-app

[![Maintainability](https://api.codeclimate.com/v1/badges/07d11a0ea4e36c1eb61e/maintainability)](https://codeclimate.com/github/elfrank/simple-nodejs-app/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/07d11a0ea4e36c1eb61e/test_coverage)](https://codeclimate.com/github/elfrank/simple-nodejs-app/test_coverage)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

**simple-nodejs-project** gets you started with a [walking skeleton](https://www.henricodolfing.com/2018/04/start-your-project-with-walking-skeleton.html) for your next node.js library or app.

Forget about the boilerplate stuff and get started on your project.

## Highlights
* Backwards compatible Javascript through Babel. Modify `.babelrc` to update its configuration.
* **Linter** thanks to [ESlint](http://eslint.org/). Modify `.eslintrc` to update the linting configuration.
* **Unit Testing** thanks to [Mocha](https://mochajs.org/)
* **Unit Testing Coverage** thanks for [Istanbul](https://github.com/istanbuljs/nyc). Modify `.nycrc.json` to update its configuration.
* **Unit Testing Coverage reporting** to [CodeClimate](https://codeclimate.com/)
* **Standard Commit Messages** through [commitizen](https://github.com/commitizen/cz-cli)
* **Semantic releases** through [semantinc-release](https://github.com/semantic-release/semantic-release). Modify `release.config.js` to update its configuration.
* **Github Actions** for PR commits: linting, testing, coverage, CodeClimate code quality
* **Github Actions** for merging PRs: automated releases (Github tagging only)

## Setup

Install [nvm](https://github.com/nvm-sh/nvm) (node version manager)
```bash
# install the version specified in .nvmrc
nvm install v14.16.0

# set the version in .nvmrc in your current envirnonment
nvm use
```

The scripts expect the following packages to be installed globally
```bash
npm install -g commitizen
```

Install packages
```bash
npm install
```

### If you forked this repo for your own project
1. Delete CHANGELOG.md. It will be regenerated in your first release
2. Set the `version` field in `package.json` to `1.0.0`
3. Update attributes in `package.json`
4. Update the `README.md` accordingly

## How-tos

Testing semantic releases locally
```bash
GITHUB_TOKEN=your_token npx semantic-release --dry-run
```