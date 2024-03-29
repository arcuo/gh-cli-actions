interface Package {
  name: 'gh-cli-actions',
  displayName: 'Github CLI Actions',
  description: 'Access Github CLI from command palette',
  repository: {type: 'git', url: 'https://github.com/arcuo/gh-cli-actions.git'},
  homepage: 'https://github.com/arcuo/gh-cli-actions',
  bugs: {url: 'https://github.com/arcuo/gh-cli-actions/issues'},
  author: 'Benjamin Zachariae',
  publisher: 'arcuo',
  license: 'MIT',
  version: '1.2.0',
  engines: {vscode: '^1.76.0'},
  icon: 'images/icon.png',
  categories: ['Other'],
  keywords: ['github', 'cli', 'actions'],
  main: './out/main.js',
  contributes: {
    commands: [
      {command: 'gh-cli-actions.gh-run', title: 'gh: Run a command'},
      {command: 'gh-cli-actions.gh-run-last', title: 'gh: Run last created command'},
      {command: 'gh-cli-actions.gh-create', title: 'gh: Create a gh command shortcut'},
      {
        command: 'gh-cli-actions.gh-run-shortcut',
        title: 'gh: Run a gh command shortcut'
      },
      {
        command: 'gh-cli-actions.gh-delete-shortcut',
        title: 'gh: Delete a gh command shortcut'
      }
    ],
    configuration: {
      title: 'Github CLI Actions',
      properties: {
        'gh-cli-actions.ghShortcuts': {
          type: 'array',
          default: [{command: 'gh pr list', name: 'List pull requests'}],
          description: 'List of gh command shortcuts'
        },
        'gh-cli-actions.lastCommand': {type: 'string', description: 'Last command run'},
        'gh-cli-actions.hideOptions': {
          type: 'array',
          default: ['api', 'auth', 'browse', 'completion', 'status'],
          description: 'List of options to hide from the command input'
        },
        'gh-cli-actions.favorites': {
          type: 'array',
          default: ['pr', 'repo'],
          description: 'List of commands that are used often and will therefore be shown first in the command input'
        }
      }
    }
  },
  scripts: {
    'vscode:prepublish': 'pnpm clean && pnpm run compile-base --minify',
    'compile-base': 'esbuild ./src/extension.ts --bundle --outfile=out/main.js --external:vscode --format=cjs --platform=node',
    compile: 'pnpm clean && pnpm run compile-base --sourcemap',
    watch: 'pnpm clean && pnpm run compile-base --sourcemap --watch',
    'test-compile': 'tsc -p ./',
    lint: 'eslint src --ext ts',
    precompile: 'npx ts-json-as-const ./package.json',
    'fetch-gh-info': 'python3 ./scripts/fetch-gh-info.py',
    package: 'pnpm vsce package --no-dependencies',
    publish: 'pnpm vsce publish --no-dependencies',
    clean: 'rm -rf out'
  },
  devDependencies: {
    '@changesets/cli': '^2.26.0',
    '@types/glob': '^8.0.1',
    '@types/mocha': '^10.0.1',
    '@types/node': '16.x',
    '@types/vscode': '^1.76.0',
    '@typescript-eslint/eslint-plugin': '^5.49.0',
    '@typescript-eslint/parser': '^5.49.0',
    '@vscode/test-electron': '^2.2.2',
    '@vscode/vsce': '^2.18.0',
    esbuild: '^0.17.11',
    eslint: '^8.33.0',
    glob: '^8.1.0',
    mocha: '^10.1.0',
    'ts-json-as-const': '^1.0.7',
    typescript: '4.9.5'
  }
}

declare const Package: Package;

export = Package;