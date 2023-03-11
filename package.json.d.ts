interface Package {
  name: 'gh-cli-actions',
  displayName: 'gh-cli-actions',
  description: 'Access Github CLI from command palette',
  version: '0.0.1',
  engines: {vscode: '^1.76.0'},
  categories: ['Other'],
  main: './out/extension.js',
  contributes: {
    commands: [
      {command: 'gh-cli-actions.gh-run', title: 'gh: Run a command'},
      {command: 'gh-cli-actions.gh-run-last', title: 'gh: Run last created command'},
      {
        command: 'gh-cli-actions.gh-create',
        title: 'gh: Create a gh command shortcut for the workspace'
      },
      {
        command: 'gh-cli-actions.gh-run-shortcut',
        title: 'gh: Run a gh command shortcut'
      }
    ],
    configuration: {
      title: 'Github CLI Actions',
      properties: {
        'gh-cli-actions.ghPath': {type: 'string', default: 'gh', description: 'Path to the gh executable'},
        'gh-cli-actions.ghShortcuts': {type: 'array', default: [], description: 'List of gh command shortcuts'},
        'gh-cli-actions.lastCommand': {type: 'string', description: 'Last command run'}
      }
    }
  },
  scripts: {
    'vscode:prepublish': 'pnpm run compile',
    compile: 'tsc -p ./',
    watch: 'tsc -watch -p ./',
    pretest: 'pnpm run compile && pnpm run lint',
    lint: 'eslint src --ext ts',
    test: 'node ./out/test/runTest.js',
    precompile: 'npx ts-json-as-const ./package.json'
  },
  devDependencies: {
    '@types/glob': '^8.0.1',
    '@types/mocha': '^10.0.1',
    '@types/node': '16.x',
    '@types/vscode': '^1.76.0',
    '@typescript-eslint/eslint-plugin': '^5.49.0',
    '@typescript-eslint/parser': '^5.49.0',
    '@vscode/test-electron': '^2.2.2',
    eslint: '^8.33.0',
    glob: '^8.1.0',
    mocha: '^10.1.0',
    'ts-json-as-const': '^1.0.7',
    typescript: '4.9.5'
  }
}

declare const Package: Package;

export = Package;