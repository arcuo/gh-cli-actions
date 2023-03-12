interface GhInfo {
  'gh auth': {
    'gh auth login': {
      usage: 'gh auth login [flags]',
      inputs: [],
      description: 'Authenticate with a GitHub host.',
      flags: [
        {
          names: ['-p', '--git-protocol'],
          description: 'The protocol to use for git operations: {ssh|https}',
          input: {name: 'string', type: 'string', required: true}
        },
        {
          names: ['-h', '--hostname'],
          description: 'The hostname of the GitHub instance to authenticate with',
          input: {name: 'string', type: 'string', required: true}
        },
        {
          names: ['-s', '--scopes'],
          description: 'Additional authentication scopes to request',
          input: {name: 'strings', type: 'string', required: true}
        },
        {
          names: ['--secure-storage'],
          description: 'Save authentication credentials in secure credential store',
          input: null
        },
        {
          names: ['-w', '--web'],
          description: 'Open a browser to authenticate',
          input: null
        },
        {
          names: ['--with-token'],
          description: 'Read token from standard input',
          input: null
        }
      ]
    },
    'gh auth logout': {
      usage: 'gh auth logout [flags]',
      inputs: [],
      description: 'Remove authentication for a GitHub host.',
      flags: [
        {
          names: ['-h', '--hostname'],
          description: 'The hostname of the GitHub instance to log out of',
          input: {name: 'string', type: 'string', required: true}
        }
      ]
    },
    'gh auth refresh': {
      usage: 'gh auth refresh [flags]',
      inputs: [],
      description: 'Expand or fix the permission scopes for stored credentials.',
      flags: [
        {
          names: ['-h', '--hostname'],
          description: 'The GitHub host to use for authentication',
          input: {name: 'string', type: 'string', required: true}
        },
        {
          names: ['-s', '--scopes'],
          description: 'Additional authentication scopes for gh to have',
          input: {name: 'strings', type: 'string', required: true}
        },
        {
          names: ['--secure-storage'],
          description: 'Save authentication credentials in secure credential store',
          input: null
        }
      ]
    },
    'gh auth setup-git': {
      usage: 'gh auth setup-git [flags]',
      inputs: [],
      description: 'Configure git to use GitHub CLI as a credential helper',
      flags: [
        {
          names: ['-h', '--hostname'],
          description: 'The hostname to configure git for',
          input: {name: 'string', type: 'string', required: true}
        }
      ]
    },
    'gh auth status': {
      usage: 'gh auth status [flags]',
      inputs: [],
      description: 'Verifies and displays information about your authentication state.',
      flags: [
        {
          names: ['-h', '--hostname'],
          description: 'Check a specific hostname\'s auth status',
          input: {name: 'string', type: 'string', required: true}
        },
        {
          names: ['-t', '--show-token'],
          description: 'Display the auth token',
          input: null
        }
      ]
    },
    'gh auth token': {
      usage: 'gh auth token [flags]',
      inputs: [],
      description: 'Print the auth token gh is configured to use',
      flags: [
        {
          names: ['-h', '--hostname'],
          description: 'The hostname of the GitHub instance authenticated with',
          input: {name: 'string', type: 'string', required: true}
        },
        {
          names: ['--secure-storage'],
          description: 'Search only secure credential store for authentication token',
          input: null
        }
      ]
    }
  },
  'gh browse': {
    usage: 'gh browse [<number> | <path>] [flags]',
    inputs: [
      {name: 'path', type: 'string', required: true},
      {name: 'number> | <path', type: 'string', multiple: true, required: true}
    ],
    description: 'Open the GitHub repository in the web browser.',
    flags: [
      {
        names: ['-b', '--branch'],
        description: 'Select another branch by passing in the branch name',
        input: {name: 'string', type: 'string', required: true}
      },
      {names: ['-c', '--commit'], description: 'Open the last commit', input: null},
      {
        names: ['-n', '--no-browser'],
        description: 'Print destination URL instead of opening the browser',
        input: null
      },
      {
        names: ['-p', '--projects'],
        description: 'Open repository projects',
        input: null
      },
      {
        names: ['-r', '--releases'],
        description: 'Open repository releases',
        input: null
      },
      {
        names: ['-', '--repo'],
        description: 'Select another repository using the [HOST/]OWNER/REPO format',
        input: {name: '[HOST/]OWNER/REPO', type: 'string', required: true}
      },
      {
        names: ['-s', '--settings'],
        description: 'Open repository settings',
        input: null
      },
      {names: ['-w', '--wiki'], description: 'Open repository wiki', input: null}
    ]
  },
  'gh codespace': {
    'gh codespace code': {
      usage: 'gh codespace code [flags]',
      inputs: [],
      description: 'Open a codespace in Visual Studio Code',
      flags: [
        {
          names: ['-c', '--codespace'],
          description: 'Name of the codespace',
          input: {name: 'string', type: 'string', required: true}
        },
        {
          names: ['--insiders'],
          description: 'Use the insiders version of Visual Studio Code',
          input: null
        },
        {
          names: ['-', '--repo'],
          description: 'Filter codespace selection by repository name (user/repo)',
          input: {name: 'string', type: 'string', required: true}
        },
        {
          names: ['-w', '--web'],
          description: 'Use the web version of Visual Studio Code',
          input: null
        }
      ]
    },
    'gh codespace cp': {
      usage: 'gh codespace cp [-e] [-r] [-- [<scp flags>...]] <sources>... <dest>',
      inputs: [{name: 'sources>... <dest', type: 'string', required: true}],
      description: 'The cp command copies files between the local and remote file systems.',
      flags: [
        {
          names: ['-c', '--codespace'],
          description: 'Name of the codespace',
          input: {name: 'string', type: 'string', required: true}
        },
        {
          names: ['-e', '--expand'],
          description: 'Expand remote file names on remote shell',
          input: null
        },
        {
          names: ['-p', '--profile'],
          description: 'Name of the SSH profile to use',
          input: {name: 'string', type: 'string', required: true}
        },
        {
          names: ['-r', '--recursive'],
          description: 'Recursively copy directories',
          input: null
        },
        {
          names: ['-', '--repo'],
          description: 'Filter codespace selection by repository name (user/repo)',
          input: {name: 'string', type: 'string', required: true}
        }
      ]
    },
    'gh codespace create': {
      usage: 'gh codespace create [flags]',
      inputs: [],
      description: 'Create a codespace',
      flags: [
        {
          names: ['-b', '--branch'],
          description: 'repository branch',
          input: {name: 'string', type: 'string', required: true}
        },
        {
          names: ['--default-permissions'],
          description: 'do not prompt to accept additional permissions requested by the codespace',
          input: null
        },
        {
          names: ['--devcontainer-path'],
          description: 'path to the devcontainer.json file to use when creating codespace',
          input: {name: 'string', type: 'string', required: true}
        },
        {
          names: ['-d', '--display-name'],
          description: 'display name for the codespace',
          input: {name: 'string', type: 'string', required: true}
        },
        {
          names: ['--idle-timeout'],
          description: 'allowed inactivity before codespace is stopped, e.g. "10m", "1h"',
          input: {name: 'duration', type: 'string', required: true}
        },
        {
          names: ['-l', '--location'],
          description: 'location: {EastUs|SouthEastAsia|WestEurope|WestUs2} (determined automatically if not provided)',
          input: {name: 'string', type: 'string', required: true}
        },
        {
          names: ['-m', '--machine'],
          description: 'hardware specifications for the VM',
          input: {name: 'string', type: 'string', required: true}
        },
        {
          names: ['-', '--repo'],
          description: 'repository name with owner: user/repo',
          input: {name: 'string', type: 'string', required: true}
        },
        {
          names: ['--retention-period'],
          description: 'allowed time after shutting down before the codespace is automatically deleted (maximum 30 days), e.g. "1h", "72h"',
          input: {name: 'duration', type: 'string', required: true}
        },
        {
          names: ['-s', '--status'],
          description: 'show status of post-create command and dotfiles',
          input: null
        }
      ]
    },
    'gh codespace delete': {
      usage: 'gh codespace delete [flags]',
      inputs: [],
      description: 'Delete codespaces based on selection criteria.',
      flags: [
        {names: ['--all'], description: 'Delete all codespaces', input: null},
        {
          names: ['-c', '--codespace'],
          description: 'Name of the codespace',
          input: {name: 'string', type: 'string', required: true}
        },
        {
          names: ['--days'],
          description: 'Delete codespaces older than N days',
          input: {name: 'N', type: 'string', required: true}
        },
        {
          names: ['-f', '--force'],
          description: 'Skip confirmation for codespaces that contain unsaved changes',
          input: null
        },
        {
          names: ['-o', '--org'],
          description: 'The login handle of the organization (admin-only)',
          input: {name: 'login', type: 'string', required: true}
        },
        {
          names: ['-', '--repo'],
          description: 'Filter codespace selection by repository name (user/repo)',
          input: {name: 'string', type: 'string', required: true}
        },
        {
          names: ['-u', '--user'],
          description: 'The username to delete codespaces for (used with --org)',
          input: {name: 'username', type: 'string', required: true}
        }
      ]
    },
    'gh codespace edit': {
      usage: 'gh codespace edit [flags]',
      inputs: [],
      description: 'Edit a codespace',
      flags: [
        {
          names: ['-c', '--codespace'],
          description: 'Name of the codespace',
          input: {name: 'string', type: 'string', required: true}
        },
        {
          names: ['-d', '--display-name'],
          description: 'Set the display name',
          input: {name: 'string', type: 'string', required: true}
        },
        {
          names: ['-m', '--machine'],
          description: 'Set hardware specifications for the VM',
          input: {name: 'string', type: 'string', required: true}
        },
        {
          names: ['-', '--repo'],
          description: 'Filter codespace selection by repository name (user/repo)',
          input: {name: 'string', type: 'string', required: true}
        }
      ]
    },
    'gh codespace jupyter': {
      usage: 'gh codespace jupyter [flags]',
      inputs: [],
      description: 'Open a codespace in JupyterLab',
      flags: [
        {
          names: ['-c', '--codespace'],
          description: 'Name of the codespace',
          input: {name: 'string', type: 'string', required: true}
        },
        {
          names: ['-', '--repo'],
          description: 'Filter codespace selection by repository name (user/repo)',
          input: {name: 'string', type: 'string', required: true}
        }
      ]
    },
    'gh codespace list': {
      usage: 'gh codespace list [flags]',
      inputs: [],
      description: 'List codespaces of the authenticated user.',
      flags: [
        {
          names: ['-q', '--jq'],
          description: 'Filter JSON output using a jq expression',
          input: {name: 'expression', type: 'string', required: true}
        },
        {
          names: ['--json'],
          description: 'Output JSON with the specified fields',
          input: {name: 'fields', type: 'string', required: true}
        },
        {
          names: ['-', '--limit'],
          description: 'Maximum number of codespaces to list',
          input: {name: 'int', type: 'string', required: true}
        },
        {
          names: ['-o', '--org'],
          description: 'The login handle of the organization to list codespaces for (admin-only)',
          input: {name: 'login', type: 'string', required: true}
        },
        {
          names: ['-', '--repo'],
          description: 'Repository name with owner: user/repo',
          input: {name: 'string', type: 'string', required: true}
        },
        {
          names: ['-t', '--template'],
          description: 'Format JSON output using a Go template; see "gh help formatting"',
          input: {name: 'string', type: 'string', required: true}
        },
        {
          names: ['-u', '--user'],
          description: 'The username to list codespaces for (used with --org)',
          input: {name: 'username', type: 'string', required: true}
        }
      ]
    },
    'gh codespace logs': {
      usage: 'gh codespace logs [flags]',
      inputs: [],
      description: 'Access codespace logs',
      flags: [
        {
          names: ['-c', '--codespace'],
          description: 'Name of the codespace',
          input: {name: 'string', type: 'string', required: true}
        },
        {
          names: ['-f', '--follow'],
          description: 'Tail and follow the logs',
          input: null
        },
        {
          names: ['-', '--repo'],
          description: 'Filter codespace selection by repository name (user/repo)',
          input: {name: 'string', type: 'string', required: true}
        }
      ]
    },
    'gh codespace ports': {
      usage: 'gh codespace ports [flags]',
      inputs: [],
      description: 'List ports in a codespace',
      flags: [
        {
          names: ['-c', '--codespace'],
          description: 'Name of the codespace',
          input: {name: 'string', type: 'string', required: true}
        },
        {
          names: ['-q', '--jq'],
          description: 'Filter JSON output using a jq expression',
          input: {name: 'expression', type: 'string', required: true}
        },
        {
          names: ['--json'],
          description: 'Output JSON with the specified fields',
          input: {name: 'fields', type: 'string', required: true}
        },
        {
          names: ['-', '--repo'],
          description: 'Filter codespace selection by repository name (user/repo)',
          input: {name: 'string', type: 'string', required: true}
        },
        {
          names: ['-t', '--template'],
          description: 'Format JSON output using a Go template; see "gh help formatting"',
          input: {name: 'string', type: 'string', required: true}
        }
      ]
    },
    'gh codespace rebuild': {
      usage: 'gh codespace rebuild [flags]',
      inputs: [],
      description: 'Rebuilding recreates your codespace. Your code and any current changes will be preserved. Your codespace will be rebuilt using your working directory\'s dev container. A full rebuild also removes cached Docker images.',
      flags: [
        {
          names: ['-c', '--codespace'],
          description: 'Name of the codespace',
          input: {name: 'string', type: 'string', required: true}
        },
        {names: ['--full'], description: 'perform a full rebuild', input: null},
        {
          names: ['-', '--repo'],
          description: 'Filter codespace selection by repository name (user/repo)',
          input: {name: 'string', type: 'string', required: true}
        }
      ]
    },
    'gh codespace ssh': {
      usage: 'gh codespace ssh [<flags>...] [-- <ssh-flags>...] [<command>]',
      inputs: [
        {name: 'ssh-flags>...] [<command', type: 'string', required: true},
        {
          name: 'flags>...] [-- <ssh-flags>...] [<command',
          type: 'string',
          multiple: true,
          required: true
        }
      ],
      description: 'The \'ssh\' command is used to SSH into a codespace. In its simplest form, you can run \'gh cs ssh\', select a codespace interactively, and connect.',
      flags: [
        {
          names: ['-c', '--codespace'],
          description: 'Name of the codespace',
          input: {name: 'string', type: 'string', required: true}
        },
        {
          names: ['--config'],
          description: 'Write OpenSSH configuration to stdout',
          input: null
        },
        {names: ['-d', '--debug'], description: 'Log debug data to a file', input: null},
        {
          names: ['--debug-file'],
          description: 'Path of the file log to',
          input: {name: 'string', type: 'string', required: true}
        },
        {
          names: ['--profile'],
          description: 'Name of the SSH profile to use',
          input: {name: 'string', type: 'string', required: true}
        },
        {
          names: ['-', '--repo'],
          description: 'Filter codespace selection by repository name (user/repo)',
          input: {name: 'string', type: 'string', required: true}
        },
        {
          names: ['--server-port'],
          description: 'SSH server port number (0 => pick unused)',
          input: {name: 'int', type: 'string', required: true}
        }
      ]
    },
    'gh codespace stop': {
      usage: 'gh codespace stop [flags]',
      inputs: [],
      description: 'Stop a running codespace',
      flags: [
        {
          names: ['-c', '--codespace'],
          description: 'Name of the codespace',
          input: {name: 'string', type: 'string', required: true}
        },
        {
          names: ['-o', '--org'],
          description: 'The login handle of the organization (admin-only)',
          input: {name: 'login', type: 'string', required: true}
        },
        {
          names: ['-', '--repo'],
          description: 'Filter codespace selection by repository name (user/repo)',
          input: {name: 'string', type: 'string', required: true}
        },
        {
          names: ['-u', '--user'],
          description: 'The username to stop codespace for (used with --org)',
          input: {name: 'username', type: 'string', required: true}
        }
      ]
    }
  },
  'gh gist': {
    'gh gist clone': {
      usage: 'gh gist clone <gist> [<directory>] [-- <gitflags>...]',
      inputs: [
        {name: 'gist> [<directory>] [-- <gitflags', type: 'string', required: true},
        {name: 'directory', type: 'string', multiple: true, required: true}
      ],
      description: 'Clone a GitHub gist locally.'
    },
    'gh gist create': {
      usage: 'gh gist create [<filename>... | -] [flags]',
      inputs: [],
      description: 'Create a new GitHub gist with given contents.',
      flags: [
        {
          names: ['-d', '--desc'],
          description: 'A description for this gist',
          input: {name: 'string', type: 'string', required: true}
        },
        {
          names: ['-f', '--filename'],
          description: 'Provide a filename to be used when reading from standard input',
          input: {name: 'string', type: 'string', required: true}
        },
        {
          names: ['-p', '--public'],
          description: 'List the gist publicly (default: secret)',
          input: null
        },
        {
          names: ['-w', '--web'],
          description: 'Open the web browser with created gist',
          input: null
        }
      ]
    },
    'gh gist delete': {
      usage: 'gh gist delete {<id> | <url>}',
      inputs: [{name: 'url', type: 'string', required: true}],
      description: 'Delete a gist'
    },
    'gh gist edit': {
      usage: 'gh gist edit {<id> | <url>} [<filename>] [flags]',
      inputs: [
        {name: 'url>} [<filename', type: 'string', required: true},
        {name: 'filename', type: 'string', multiple: true, required: true}
      ],
      description: 'Edit one of your gists',
      flags: [
        {
          names: ['-a', '--add'],
          description: 'Add a new file to the gist',
          input: {name: 'string', type: 'string', required: true}
        },
        {
          names: ['-d', '--desc'],
          description: 'New description for the gist',
          input: {name: 'string', type: 'string', required: true}
        },
        {
          names: ['-f', '--filename'],
          description: 'Select a file to edit',
          input: {name: 'string', type: 'string', required: true}
        }
      ]
    },
    'gh gist list': {
      usage: 'gh gist list [flags]',
      inputs: [],
      description: 'List your gists',
      flags: [
        {
          names: ['-', '--limit'],
          description: 'Maximum number of gists to fetch',
          input: {name: 'int', type: 'string', required: true}
        },
        {names: ['--public'], description: 'Show only public gists', input: null},
        {names: ['--secret'], description: 'Show only secret gists', input: null}
      ]
    },
    'gh gist view': {
      usage: 'gh gist view [<id> | <url>] [flags]',
      inputs: [
        {name: 'url', type: 'string', required: true},
        {name: 'id> | <url', type: 'string', multiple: true, required: true}
      ],
      description: 'View the given gist or select from recent gists.',
      flags: [
        {
          names: ['-f', '--filename'],
          description: 'Display a single file from the gist',
          input: {name: 'string', type: 'string', required: true}
        },
        {names: ['--files'], description: 'List file names from the gist', input: null},
        {
          names: ['-r', '--raw'],
          description: 'Print raw instead of rendered gist contents',
          input: null
        },
        {names: ['-w', '--web'], description: 'Open gist in the browser', input: null}
      ]
    }
  },
  'gh issue': {
    'gh issue create': {
      usage: 'gh issue create [flags]',
      inputs: [],
      description: 'Create an issue on GitHub.',
      flags: [
        {
          names: ['-a', '--assignee'],
          description: 'Assign people by their login. Use "@me" to self-assign.',
          input: {name: 'login', type: 'string', required: true}
        },
        {
          names: ['-b', '--body'],
          description: 'Supply a body. Will prompt for one otherwise.',
          input: {name: 'string', type: 'string', required: true}
        },
        {
          names: ['-', '--body-file'],
          description: 'Read body text from file (use "-" to read from standard input)',
          input: {name: 'file', type: 'string', required: true}
        },
        {
          names: ['-l', '--label'],
          description: 'Add labels by name',
          input: {name: 'name', type: 'string', required: true}
        },
        {
          names: ['-m', '--milestone'],
          description: 'Add the issue to a milestone by name',
          input: {name: 'name', type: 'string', required: true}
        },
        {
          names: ['-p', '--project'],
          description: 'Add the issue to projects by name',
          input: {name: 'name', type: 'string', required: true}
        },
        {
          names: ['--recover'],
          description: 'Recover input from a failed run of create',
          input: {name: 'string', type: 'string', required: true}
        },
        {
          names: ['-t', '--title'],
          description: 'Supply a title. Will prompt for one otherwise.',
          input: {name: 'string', type: 'string', required: true}
        },
        {
          names: ['-w', '--web'],
          description: 'Open the browser to create an issue',
          input: null
        }
      ]
    },
    'gh issue list': {
      usage: 'gh issue list [flags]',
      inputs: [],
      description: 'List issues in a GitHub repository.',
      flags: [
        {
          names: ['--app'],
          description: 'Filter by GitHub App author',
          input: {name: 'string', type: 'string', required: true}
        },
        {
          names: ['-a', '--assignee'],
          description: 'Filter by assignee',
          input: {name: 'string', type: 'string', required: true}
        },
        {
          names: ['-', '--author'],
          description: 'Filter by author',
          input: {name: 'string', type: 'string', required: true}
        },
        {
          names: ['-q', '--jq'],
          description: 'Filter JSON output using a jq expression',
          input: {name: 'expression', type: 'string', required: true}
        },
        {
          names: ['--json'],
          description: 'Output JSON with the specified fields',
          input: {name: 'fields', type: 'string', required: true}
        },
        {
          names: ['-l', '--label'],
          description: 'Filter by label',
          input: {name: 'strings', type: 'string', required: true}
        },
        {
          names: ['-', '--limit'],
          description: 'Maximum number of issues to fetch',
          input: {name: 'int', type: 'string', required: true}
        },
        {
          names: ['--mention'],
          description: 'Filter by mention',
          input: {name: 'string', type: 'string', required: true}
        },
        {
          names: ['-m', '--milestone'],
          description: 'Filter by milestone number or title',
          input: {name: 'string', type: 'string', required: true}
        },
        {
          names: ['-', '--search'],
          description: 'Search issues with query',
          input: {name: 'query', type: 'string', required: true}
        },
        {
          names: ['-s', '--state'],
          description: 'Filter by state: {open|closed|all}',
          input: {name: 'string', type: 'string', required: true}
        },
        {
          names: ['-t', '--template'],
          description: 'Format JSON output using a Go template; see "gh help formatting"',
          input: {name: 'string', type: 'string', required: true}
        },
        {
          names: ['-w', '--web'],
          description: 'List issues in the web browser',
          input: null
        }
      ]
    },
    'gh issue status': {
      usage: 'gh issue status [flags]',
      inputs: [],
      description: 'Show status of relevant issues',
      flags: [
        {
          names: ['-q', '--jq'],
          description: 'Filter JSON output using a jq expression',
          input: {name: 'expression', type: 'string', required: true}
        },
        {
          names: ['--json'],
          description: 'Output JSON with the specified fields',
          input: {name: 'fields', type: 'string', required: true}
        },
        {
          names: ['-t', '--template'],
          description: 'Format JSON output using a Go template; see "gh help formatting"',
          input: {name: 'string', type: 'string', required: true}
        }
      ]
    },
    'gh issue close': {
      usage: 'gh issue close {<number> | <url>} [flags]',
      inputs: [{name: 'url', type: 'string', required: true}],
      description: 'Close issue',
      flags: [
        {
          names: ['-c', '--comment'],
          description: 'Leave a closing comment',
          input: {name: 'string', type: 'string', required: true}
        },
        {
          names: ['-r', '--reason'],
          description: 'Reason for closing: {completed|not planned}',
          input: {name: 'string', type: 'string', required: true}
        }
      ]
    },
    'gh issue comment': {
      usage: 'gh issue comment {<number> | <url>} [flags]',
      inputs: [{name: 'url', type: 'string', required: true}],
      description: 'Add a comment to a GitHub issue.',
      flags: [
        {
          names: ['-b', '--body'],
          description: 'The comment body text',
          input: {name: 'text', type: 'string', required: true}
        },
        {
          names: ['-', '--body-file'],
          description: 'Read body text from file (use "-" to read from standard input)',
          input: {name: 'file', type: 'string', required: true}
        },
        {
          names: ['--edit-last'],
          description: 'Edit the last comment of the same author',
          input: null
        },
        {
          names: ['-e', '--editor'],
          description: 'Skip prompts and open the text editor to write the body in',
          input: null
        },
        {
          names: ['-w', '--web'],
          description: 'Open the web browser to write the comment',
          input: null
        }
      ]
    },
    'gh issue delete': {
      usage: 'gh issue delete {<number> | <url>} [flags]',
      inputs: [{name: 'url', type: 'string', required: true}],
      description: 'Delete issue',
      flags: [
        {
          names: ['--yes'],
          description: 'confirm deletion without prompting',
          input: null
        }
      ]
    },
    'gh issue develop': {
      usage: 'gh issue develop [flags] {<number> | <url>}',
      inputs: [{name: 'url', type: 'string', required: true}],
      description: 'Manage linked branches for an issue',
      flags: [
        {
          names: ['-b', '--base'],
          description: 'Name of the base branch you want to make your new branch from',
          input: {name: 'string', type: 'string', required: true}
        },
        {
          names: ['-c', '--checkout'],
          description: 'Checkout the branch after creating it',
          input: null
        },
        {
          names: ['-i', '--issue-repo'],
          description: 'Name or URL of the issue\'s repository',
          input: {name: 'string', type: 'string', required: true}
        },
        {
          names: ['-l', '--list'],
          description: 'List linked branches for the issue',
          input: null
        },
        {
          names: ['-n', '--name'],
          description: 'Name of the branch to create',
          input: {name: 'string', type: 'string', required: true}
        }
      ]
    },
    'gh issue edit': {
      usage: 'gh issue edit {<number> | <url>} [flags]',
      inputs: [{name: 'url', type: 'string', required: true}],
      description: 'Edit an issue.',
      flags: [
        {
          names: ['--add-assignee'],
          description: 'Add assigned users by their login. Use "@me" to assign yourself.',
          input: {name: 'login', type: 'string', required: true}
        },
        {
          names: ['--add-label'],
          description: 'Add labels by name',
          input: {name: 'name', type: 'string', required: true}
        },
        {
          names: ['--add-project'],
          description: 'Add the issue to projects by name',
          input: {name: 'name', type: 'string', required: true}
        },
        {
          names: ['-b', '--body'],
          description: 'Set the new body.',
          input: {name: 'string', type: 'string', required: true}
        },
        {
          names: ['-', '--body-file'],
          description: 'Read body text from file (use "-" to read from standard input)',
          input: {name: 'file', type: 'string', required: true}
        },
        {
          names: ['-m', '--milestone'],
          description: 'Edit the milestone the issue belongs to by name',
          input: {name: 'name', type: 'string', required: true}
        },
        {
          names: ['--remove-assignee'],
          description: 'Remove assigned users by their login. Use "@me" to unassign yourself.',
          input: {name: 'login', type: 'string', required: true}
        },
        {
          names: ['--remove-label'],
          description: 'Remove labels by name',
          input: {name: 'name', type: 'string', required: true}
        },
        {
          names: ['--remove-project'],
          description: 'Remove the issue from projects by name',
          input: {name: 'name', type: 'string', required: true}
        },
        {
          names: ['-t', '--title'],
          description: 'Set the new title.',
          input: {name: 'string', type: 'string', required: true}
        }
      ]
    },
    'gh issue lock': {
      usage: 'gh issue lock {<number> | <url>} [flags]',
      inputs: [{name: 'url', type: 'string', required: true}],
      description: 'Lock issue conversation',
      flags: [
        {
          names: ['-r', '--reason'],
          description: 'Optional reason for locking conversation (off_topic, resolved, spam, too_heated).',
          input: {name: 'string', type: 'string', required: true}
        }
      ]
    },
    'gh issue pin': {
      usage: 'gh issue pin {<number> | <url>}',
      inputs: [{name: 'url', type: 'string', required: true}],
      description: 'Pin an issue to a repository.'
    },
    'gh issue reopen': {
      usage: 'gh issue reopen {<number> | <url>} [flags]',
      inputs: [{name: 'url', type: 'string', required: true}],
      description: 'Reopen issue',
      flags: [
        {
          names: ['-c', '--comment'],
          description: 'Add a reopening comment',
          input: {name: 'string', type: 'string', required: true}
        }
      ]
    },
    'gh issue transfer': {
      usage: 'gh issue transfer {<number> | <url>} <destination-repo>',
      inputs: [{name: 'url>} <destination-repo', type: 'string', required: true}],
      description: 'Transfer issue to another repository'
    },
    'gh issue unlock': {
      usage: 'gh issue unlock {<number> | <url>}',
      inputs: [{name: 'url', type: 'string', required: true}],
      description: 'Unlock issue conversation'
    },
    'gh issue unpin': {
      usage: 'gh issue unpin {<number> | <url>}',
      inputs: [{name: 'url', type: 'string', required: true}],
      description: 'Unpin an issue from a repository.'
    },
    'gh issue view': {
      usage: 'gh issue view {<number> | <url>} [flags]',
      inputs: [{name: 'url', type: 'string', required: true}],
      description: 'Display the title, body, and other information about an issue.',
      flags: [
        {names: ['-c', '--comments'], description: 'View issue comments', input: null},
        {
          names: ['-q', '--jq'],
          description: 'Filter JSON output using a jq expression',
          input: {name: 'expression', type: 'string', required: true}
        },
        {
          names: ['--json'],
          description: 'Output JSON with the specified fields',
          input: {name: 'fields', type: 'string', required: true}
        },
        {
          names: ['-t', '--template'],
          description: 'Format JSON output using a Go template; see "gh help formatting"',
          input: {name: 'string', type: 'string', required: true}
        },
        {
          names: ['-w', '--web'],
          description: 'Open an issue in the browser',
          input: null
        }
      ]
    }
  },
  'gh pr': {
    'gh pr create': {
      usage: 'gh pr create [flags]',
      inputs: [],
      description: 'Create a pull request on GitHub.',
      flags: [
        {
          names: ['-a', '--assignee'],
          description: 'Assign people by their login. Use "@me" to self-assign.',
          input: {name: 'login', type: 'string', required: true}
        },
        {
          names: ['-', '--base'],
          description: 'The branch into which you want your code merged',
          input: {name: 'branch', type: 'string', required: true}
        },
        {
          names: ['-b', '--body'],
          description: 'Body for the pull request',
          input: {name: 'string', type: 'string', required: true}
        },
        {
          names: ['-', '--body-file'],
          description: 'Read body text from file (use "-" to read from standard input)',
          input: {name: 'file', type: 'string', required: true}
        },
        {
          names: ['-d', '--draft'],
          description: 'Mark pull request as a draft',
          input: null
        },
        {
          names: ['-f', '--fill'],
          description: 'Do not prompt for title/body and just use commit info',
          input: null
        },
        {
          names: ['-', '--head'],
          description: 'The branch that contains commits for your pull request (default: current branch)',
          input: {name: 'branch', type: 'string', required: true}
        },
        {
          names: ['-l', '--label'],
          description: 'Add labels by name',
          input: {name: 'name', type: 'string', required: true}
        },
        {
          names: ['-m', '--milestone'],
          description: 'Add the pull request to a milestone by name',
          input: {name: 'name', type: 'string', required: true}
        },
        {
          names: ['--no-maintainer-edit'],
          description: 'Disable maintainer\'s ability to modify pull request',
          input: null
        },
        {
          names: ['-p', '--project'],
          description: 'Add the pull request to projects by name',
          input: {name: 'name', type: 'string', required: true}
        },
        {
          names: ['--recover'],
          description: 'Recover input from a failed run of create',
          input: {name: 'string', type: 'string', required: true}
        },
        {
          names: ['-r', '--reviewer'],
          description: 'Request reviews from people or teams by their handle',
          input: {name: 'handle', type: 'string', required: true}
        },
        {
          names: ['-t', '--title'],
          description: 'Title for the pull request',
          input: {name: 'string', type: 'string', required: true}
        },
        {
          names: ['-w', '--web'],
          description: 'Open the web browser to create a pull request',
          input: null
        }
      ]
    },
    'gh pr list': {
      usage: 'gh pr list [flags]',
      inputs: [],
      description: 'List pull requests in a GitHub repository.',
      flags: [
        {
          names: ['--app'],
          description: 'Filter by GitHub App author',
          input: {name: 'string', type: 'string', required: true}
        },
        {
          names: ['-a', '--assignee'],
          description: 'Filter by assignee',
          input: {name: 'string', type: 'string', required: true}
        },
        {
          names: ['-', '--author'],
          description: 'Filter by author',
          input: {name: 'string', type: 'string', required: true}
        },
        {
          names: ['-', '--base'],
          description: 'Filter by base branch',
          input: {name: 'string', type: 'string', required: true}
        },
        {names: ['-d', '--draft'], description: 'Filter by draft state', input: null},
        {
          names: ['-', '--head'],
          description: 'Filter by head branch',
          input: {name: 'string', type: 'string', required: true}
        },
        {
          names: ['-q', '--jq'],
          description: 'Filter JSON output using a jq expression',
          input: {name: 'expression', type: 'string', required: true}
        },
        {
          names: ['--json'],
          description: 'Output JSON with the specified fields',
          input: {name: 'fields', type: 'string', required: true}
        },
        {
          names: ['-l', '--label'],
          description: 'Filter by label',
          input: {name: 'strings', type: 'string', required: true}
        },
        {
          names: ['-', '--limit'],
          description: 'Maximum number of items to fetch',
          input: {name: 'int', type: 'string', required: true}
        },
        {
          names: ['-', '--search'],
          description: 'Search pull requests with query',
          input: {name: 'query', type: 'string', required: true}
        },
        {
          names: ['-s', '--state'],
          description: 'Filter by state: {open|closed|merged|all}',
          input: {name: 'string', type: 'string', required: true}
        },
        {
          names: ['-t', '--template'],
          description: 'Format JSON output using a Go template; see "gh help formatting"',
          input: {name: 'string', type: 'string', required: true}
        },
        {
          names: ['-w', '--web'],
          description: 'List pull requests in the web browser',
          input: null
        }
      ]
    },
    'gh pr status': {
      usage: 'gh pr status [flags]',
      inputs: [],
      description: 'Show status of relevant pull requests',
      flags: [
        {
          names: ['-c', '--conflict-status'],
          description: 'Display the merge conflict status of each pull request',
          input: null
        },
        {
          names: ['-q', '--jq'],
          description: 'Filter JSON output using a jq expression',
          input: {name: 'expression', type: 'string', required: true}
        },
        {
          names: ['--json'],
          description: 'Output JSON with the specified fields',
          input: {name: 'fields', type: 'string', required: true}
        },
        {
          names: ['-t', '--template'],
          description: 'Format JSON output using a Go template; see "gh help formatting"',
          input: {name: 'string', type: 'string', required: true}
        }
      ]
    },
    'gh pr checkout': {
      usage: 'gh pr checkout {<number> | <url> | <branch>} [flags]',
      inputs: [{name: 'url> | <branch', type: 'string', required: true}],
      description: 'Check out a pull request in git',
      flags: [
        {
          names: ['-b', '--branch'],
          description: 'Local branch name to use (default: the name of the head branch)',
          input: {name: 'string', type: 'string', required: true}
        },
        {
          names: ['--detach'],
          description: 'Checkout PR with a detached HEAD',
          input: null
        },
        {
          names: ['-f', '--force'],
          description: 'Reset the existing local branch to the latest state of the pull request',
          input: null
        },
        {
          names: ['--recurse-submodules'],
          description: 'Update all submodules after checkout',
          input: null
        }
      ]
    },
    'gh pr checks': {
      usage: 'gh pr checks [<number> | <url> | <branch>] [flags]',
      inputs: [
        {name: 'url> | <branch', type: 'string', required: true},
        {
          name: 'number> | <url> | <branch',
          type: 'string',
          multiple: true,
          required: true
        }
      ],
      description: 'Show CI status for a single pull request.',
      flags: [
        {
          names: ['-i', '--interval', '--watch'],
          description: 'Refresh interval in seconds when using --watch flag',
          input: {name: '--watch', type: 'string', required: true}
        },
        {
          names: ['--required'],
          description: 'Only show checks that are required',
          input: null
        },
        {names: ['--watch'], description: 'Watch checks until they finish', input: null},
        {
          names: ['-w', '--web'],
          description: 'Open the web browser to show details about checks',
          input: null
        }
      ]
    },
    'gh pr close': {
      usage: 'gh pr close {<number> | <url> | <branch>} [flags]',
      inputs: [{name: 'url> | <branch', type: 'string', required: true}],
      description: 'Close a pull request',
      flags: [
        {
          names: ['-c', '--comment'],
          description: 'Leave a closing comment',
          input: {name: 'string', type: 'string', required: true}
        },
        {
          names: ['-d', '--delete-branch'],
          description: 'Delete the local and remote branch after close',
          input: null
        }
      ]
    },
    'gh pr comment': {
      usage: 'gh pr comment [<number> | <url> | <branch>] [flags]',
      inputs: [
        {name: 'url> | <branch', type: 'string', required: true},
        {
          name: 'number> | <url> | <branch',
          type: 'string',
          multiple: true,
          required: true
        }
      ],
      description: 'Add a comment to a GitHub pull request.',
      flags: [
        {
          names: ['-b', '--body'],
          description: 'The comment body text',
          input: {name: 'text', type: 'string', required: true}
        },
        {
          names: ['-', '--body-file'],
          description: 'Read body text from file (use "-" to read from standard input)',
          input: {name: 'file', type: 'string', required: true}
        },
        {
          names: ['--edit-last'],
          description: 'Edit the last comment of the same author',
          input: null
        },
        {
          names: ['-e', '--editor'],
          description: 'Skip prompts and open the text editor to write the body in',
          input: null
        },
        {
          names: ['-w', '--web'],
          description: 'Open the web browser to write the comment',
          input: null
        }
      ]
    },
    'gh pr diff': {
      usage: 'gh pr diff [<number> | <url> | <branch>] [flags]',
      inputs: [
        {name: 'url> | <branch', type: 'string', required: true},
        {
          name: 'number> | <url> | <branch',
          type: 'string',
          multiple: true,
          required: true
        }
      ],
      description: 'View changes in a pull request.',
      flags: [
        {
          names: ['--color'],
          description: 'Use color in diff output: {always|never|auto}',
          input: {name: 'string', type: 'string', required: true}
        },
        {
          names: ['--name-only'],
          description: 'Display only names of changed files',
          input: null
        },
        {names: ['--patch'], description: 'Display diff in patch format', input: null},
        {
          names: ['-w', '--web'],
          description: 'Open the pull request diff in the browser',
          input: null
        }
      ]
    },
    'gh pr edit': {
      usage: 'gh pr edit [<number> | <url> | <branch>] [flags]',
      inputs: [
        {name: 'url> | <branch', type: 'string', required: true},
        {
          name: 'number> | <url> | <branch',
          type: 'string',
          multiple: true,
          required: true
        }
      ],
      description: 'Edit a pull request.',
      flags: [
        {
          names: ['--add-assignee'],
          description: 'Add assigned users by their login. Use "@me" to assign yourself.',
          input: {name: 'login', type: 'string', required: true}
        },
        {
          names: ['--add-label'],
          description: 'Add labels by name',
          input: {name: 'name', type: 'string', required: true}
        },
        {
          names: ['--add-project'],
          description: 'Add the pull request to projects by name',
          input: {name: 'name', type: 'string', required: true}
        },
        {
          names: ['--add-reviewer'],
          description: 'Add reviewers by their login.',
          input: {name: 'login', type: 'string', required: true}
        },
        {
          names: ['-', '--base'],
          description: 'Change the base branch for this pull request',
          input: {name: 'branch', type: 'string', required: true}
        },
        {
          names: ['-b', '--body'],
          description: 'Set the new body.',
          input: {name: 'string', type: 'string', required: true}
        },
        {
          names: ['-', '--body-file'],
          description: 'Read body text from file (use "-" to read from standard input)',
          input: {name: 'file', type: 'string', required: true}
        },
        {
          names: ['-m', '--milestone'],
          description: 'Edit the milestone the pull request belongs to by name',
          input: {name: 'name', type: 'string', required: true}
        },
        {
          names: ['--remove-assignee'],
          description: 'Remove assigned users by their login. Use "@me" to unassign yourself.',
          input: {name: 'login', type: 'string', required: true}
        },
        {
          names: ['--remove-label'],
          description: 'Remove labels by name',
          input: {name: 'name', type: 'string', required: true}
        },
        {
          names: ['--remove-project'],
          description: 'Remove the pull request from projects by name',
          input: {name: 'name', type: 'string', required: true}
        },
        {
          names: ['--remove-reviewer'],
          description: 'Remove reviewers by their login.',
          input: {name: 'login', type: 'string', required: true}
        },
        {
          names: ['-t', '--title'],
          description: 'Set the new title.',
          input: {name: 'string', type: 'string', required: true}
        }
      ]
    },
    'gh pr lock': {
      usage: 'gh pr lock {<number> | <url>} [flags]',
      inputs: [{name: 'url', type: 'string', required: true}],
      description: 'Lock pull request conversation',
      flags: [
        {
          names: ['-r', '--reason'],
          description: 'Optional reason for locking conversation (off_topic, resolved, spam, too_heated).',
          input: {name: 'string', type: 'string', required: true}
        }
      ]
    },
    'gh pr merge': {
      usage: 'gh pr merge [<number> | <url> | <branch>] [flags]',
      inputs: [
        {name: 'url> | <branch', type: 'string', required: true},
        {
          name: 'number> | <url> | <branch',
          type: 'string',
          multiple: true,
          required: true
        }
      ],
      description: 'Merge a pull request on GitHub.',
      flags: [
        {
          names: ['--admin'],
          description: 'Use administrator privileges to merge a pull request that does not meet requirements',
          input: null
        },
        {
          names: ['-', '--author-email'],
          description: 'Email text for merge commit author',
          input: {name: 'text', type: 'string', required: true}
        },
        {
          names: ['--auto'],
          description: 'Automatically merge only after necessary requirements are met',
          input: null
        },
        {
          names: ['-b', '--body'],
          description: 'Body text for the merge commit',
          input: {name: 'text', type: 'string', required: true}
        },
        {
          names: ['-', '--body-file'],
          description: 'Read body text from file (use "-" to read from standard input)',
          input: {name: 'file', type: 'string', required: true}
        },
        {
          names: ['-d', '--delete-branch'],
          description: 'Delete the local and remote branch after merge',
          input: null
        },
        {
          names: ['--disable-auto'],
          description: 'Disable auto-merge for this pull request',
          input: null
        },
        {
          names: ['--match-head-commit'],
          description: 'Commit SHA that the pull request head must match to allow merge',
          input: {name: 'SHA', type: 'string', required: true}
        },
        {
          names: ['-m', '--merge'],
          description: 'Merge the commits with the base branch',
          input: null
        },
        {
          names: ['-r', '--rebase'],
          description: 'Rebase the commits onto the base branch',
          input: null
        },
        {
          names: ['-s', '--squash'],
          description: 'Squash the commits into one commit and merge it into the base branch',
          input: null
        },
        {
          names: ['-t', '--subject'],
          description: 'Subject text for the merge commit',
          input: {name: 'text', type: 'string', required: true}
        }
      ]
    },
    'gh pr ready': {
      usage: 'gh pr ready [<number> | <url> | <branch>] [flags]',
      inputs: [
        {name: 'url> | <branch', type: 'string', required: true},
        {
          name: 'number> | <url> | <branch',
          type: 'string',
          multiple: true,
          required: true
        }
      ],
      description: 'Mark a pull request as ready for review.',
      flags: [
        {
          names: ['--undo'],
          description: 'Convert a pull request to "draft"',
          input: null
        }
      ]
    },
    'gh pr reopen': {
      usage: 'gh pr reopen {<number> | <url> | <branch>} [flags]',
      inputs: [{name: 'url> | <branch', type: 'string', required: true}],
      description: 'Reopen a pull request',
      flags: [
        {
          names: ['-c', '--comment'],
          description: 'Add a reopening comment',
          input: {name: 'string', type: 'string', required: true}
        }
      ]
    },
    'gh pr review': {
      usage: 'gh pr review [<number> | <url> | <branch>] [flags]',
      inputs: [
        {name: 'url> | <branch', type: 'string', required: true},
        {
          name: 'number> | <url> | <branch',
          type: 'string',
          multiple: true,
          required: true
        }
      ],
      description: 'Add a review to a pull request.',
      flags: [
        {names: ['-a', '--approve'], description: 'Approve pull request', input: null},
        {
          names: ['-b', '--body'],
          description: 'Specify the body of a review',
          input: {name: 'string', type: 'string', required: true}
        },
        {
          names: ['-', '--body-file'],
          description: 'Read body text from file (use "-" to read from standard input)',
          input: {name: 'file', type: 'string', required: true}
        },
        {
          names: ['-c', '--comment'],
          description: 'Comment on a pull request',
          input: null
        },
        {
          names: ['-r', '--request-changes'],
          description: 'Request changes on a pull request',
          input: null
        }
      ]
    },
    'gh pr unlock': {
      usage: 'gh pr unlock {<number> | <url>}',
      inputs: [{name: 'url', type: 'string', required: true}],
      description: 'Unlock pull request conversation'
    },
    'gh pr view': {
      usage: 'gh pr view [<number> | <url> | <branch>] [flags]',
      inputs: [
        {name: 'url> | <branch', type: 'string', required: true},
        {
          name: 'number> | <url> | <branch',
          type: 'string',
          multiple: true,
          required: true
        }
      ],
      description: 'Display the title, body, and other information about a pull request.',
      flags: [
        {
          names: ['-c', '--comments'],
          description: 'View pull request comments',
          input: null
        },
        {
          names: ['-q', '--jq'],
          description: 'Filter JSON output using a jq expression',
          input: {name: 'expression', type: 'string', required: true}
        },
        {
          names: ['--json'],
          description: 'Output JSON with the specified fields',
          input: {name: 'fields', type: 'string', required: true}
        },
        {
          names: ['-t', '--template'],
          description: 'Format JSON output using a Go template; see "gh help formatting"',
          input: {name: 'string', type: 'string', required: true}
        },
        {
          names: ['-w', '--web'],
          description: 'Open a pull request in the browser',
          input: null
        }
      ]
    }
  },
  'gh release': {
    'gh release create': {
      usage: 'gh release create [<tag>] [<files>...]',
      inputs: [{name: 'tag', type: 'string', multiple: true, required: true}],
      description: 'Create a new GitHub Release for a repository.',
      flags: [
        {
          names: ['--discussion-category'],
          description: 'Start a discussion in the specified category',
          input: {name: 'string', type: 'string', required: true}
        },
        {
          names: ['-d', '--draft'],
          description: 'Save the release as a draft instead of publishing it',
          input: null
        },
        {
          names: ['--generate-notes'],
          description: 'Automatically generate title and notes for the release',
          input: null
        },
        {
          names: ['--latest'],
          description: 'Mark this release as "Latest" (default: automatic based on date and version)',
          input: null
        },
        {
          names: ['-n', '--notes'],
          description: 'Release notes',
          input: {name: 'string', type: 'string', required: true}
        },
        {
          names: ['-', '--notes-file'],
          description: 'Read release notes from file (use "-" to read from standard input)',
          input: {name: 'file', type: 'string', required: true}
        },
        {
          names: ['--notes-start-tag'],
          description: 'Tag to use as the starting point for generating release notes',
          input: {name: 'string', type: 'string', required: true}
        },
        {
          names: ['-p', '--prerelease'],
          description: 'Mark the release as a prerelease',
          input: null
        },
        {
          names: ['--target'],
          description: 'Target branch or full commit SHA (default: main branch)',
          input: {name: 'branch', type: 'string', required: true}
        },
        {
          names: ['-t', '--title'],
          description: 'Release title',
          input: {name: 'string', type: 'string', required: true}
        },
        {
          names: ['--verify-tag'],
          description: 'Abort in case the git tag doesn\'t already exist in the remote repository',
          input: null
        }
      ]
    },
    'gh release list': {
      usage: 'gh release list [flags]',
      inputs: [],
      description: 'List releases in a repository',
      flags: [
        {
          names: ['--exclude-drafts'],
          description: 'Exclude draft releases',
          input: null
        },
        {
          names: ['--exclude-pre-releases'],
          description: 'Exclude pre-releases',
          input: null
        },
        {
          names: ['-', '--limit'],
          description: 'Maximum number of items to fetch',
          input: {name: 'int', type: 'string', required: true}
        }
      ]
    },
    'gh release delete': {
      usage: 'gh release delete <tag> [flags]',
      inputs: [{name: 'tag', type: 'string', required: true}],
      description: 'Delete a release',
      flags: [
        {
          names: ['--cleanup-tag'],
          description: 'Delete the specified tag in addition to its release',
          input: null
        },
        {
          names: ['-y', '--yes'],
          description: 'Skip the confirmation prompt',
          input: null
        }
      ]
    },
    'gh release delete-asset': {
      usage: 'gh release delete-asset <tag> <asset-name> [flags]',
      inputs: [{name: 'tag> <asset-name', type: 'string', required: true}],
      description: 'Delete an asset from a release',
      flags: [
        {
          names: ['-y', '--yes'],
          description: 'Skip the confirmation prompt',
          input: null
        }
      ]
    },
    'gh release download': {
      usage: 'gh release download [<tag>] [flags]',
      inputs: [{name: 'tag', type: 'string', multiple: true, required: true}],
      description: 'Download assets from a GitHub release.',
      flags: [
        {
          names: ['-', '--archive'],
          description: 'Download the source code archive in the specified format (zip or tar.gz)',
          input: {name: 'format', type: 'string', required: true}
        },
        {
          names: ['--clobber'],
          description: 'Overwrite existing files of the same name',
          input: null
        },
        {
          names: ['-', '--dir'],
          description: 'The directory to download files into',
          input: {name: 'directory', type: 'string', required: true}
        },
        {
          names: ['-', '--output'],
          description: 'The file to write a single asset to (use "-" to write to standard output)',
          input: {name: 'file', type: 'string', required: true}
        },
        {
          names: ['-p', '--pattern'],
          description: 'Download only assets that match a glob pattern',
          input: {name: 'stringArray', type: 'string', required: true}
        },
        {
          names: ['--skip-existing'],
          description: 'Skip downloading when files of the same name exist',
          input: null
        }
      ]
    },
    'gh release edit': {
      usage: 'gh release edit <tag>',
      inputs: [{name: 'tag', type: 'string', required: true}],
      description: 'Edit a release',
      flags: [
        {
          names: ['--discussion-category'],
          description: 'Start a discussion in the specified category when publishing a draft',
          input: {name: 'string', type: 'string', required: true}
        },
        {
          names: ['--draft'],
          description: 'Save the release as a draft instead of publishing it',
          input: null
        },
        {
          names: ['--latest'],
          description: 'Explicitly mark the release as "Latest"',
          input: null
        },
        {
          names: ['-n', '--notes'],
          description: 'Release notes',
          input: {name: 'string', type: 'string', required: true}
        },
        {
          names: ['-', '--notes-file'],
          description: 'Read release notes from file (use "-" to read from standard input)',
          input: {name: 'file', type: 'string', required: true}
        },
        {
          names: ['--prerelease'],
          description: 'Mark the release as a prerelease',
          input: null
        },
        {
          names: ['--tag'],
          description: 'The name of the tag',
          input: {name: 'string', type: 'string', required: true}
        },
        {
          names: ['--target'],
          description: 'Target branch or full commit SHA (default: main branch)',
          input: {name: 'branch', type: 'string', required: true}
        },
        {
          names: ['-t', '--title'],
          description: 'Release title',
          input: {name: 'string', type: 'string', required: true}
        }
      ]
    },
    'gh release upload': {
      usage: 'gh release upload <tag> <files>... [flags]',
      inputs: [{name: 'tag> <files', type: 'string', required: true}],
      description: 'Upload asset files to a GitHub Release.',
      flags: [
        {
          names: ['--clobber'],
          description: 'Overwrite existing assets of the same name',
          input: null
        }
      ]
    },
    'gh release view': {
      usage: 'gh release view [<tag>] [flags]',
      inputs: [{name: 'tag', type: 'string', multiple: true, required: true}],
      description: 'View information about a GitHub Release.',
      flags: [
        {
          names: ['-q', '--jq'],
          description: 'Filter JSON output using a jq expression',
          input: {name: 'expression', type: 'string', required: true}
        },
        {
          names: ['--json'],
          description: 'Output JSON with the specified fields',
          input: {name: 'fields', type: 'string', required: true}
        },
        {
          names: ['-t', '--template'],
          description: 'Format JSON output using a Go template; see "gh help formatting"',
          input: {name: 'string', type: 'string', required: true}
        },
        {
          names: ['-w', '--web'],
          description: 'Open the release in the browser',
          input: null
        }
      ]
    }
  },
  'gh repo': {
    'gh repo create': {
      usage: 'gh repo create [<name>] [flags]',
      inputs: [{name: 'name', type: 'string', multiple: true, required: true}],
      description: 'Create a new GitHub repository.',
      flags: [
        {
          names: ['--add-readme'],
          description: 'Add a README file to the new repository',
          input: null
        },
        {
          names: ['-c', '--clone'],
          description: 'Clone the new repository to the current directory',
          input: null
        },
        {
          names: ['-d', '--description'],
          description: 'Description of the repository',
          input: {name: 'string', type: 'string', required: true}
        },
        {
          names: ['--disable-issues'],
          description: 'Disable issues in the new repository',
          input: null
        },
        {
          names: ['--disable-wiki'],
          description: 'Disable wiki in the new repository',
          input: null
        },
        {
          names: ['-g', '--gitignore'],
          description: 'Specify a gitignore template for the repository',
          input: {name: 'string', type: 'string', required: true}
        },
        {
          names: ['-h', '--homepage'],
          description: 'Repository home page URL',
          input: {name: 'URL', type: 'string', required: true}
        },
        {
          names: ['--include-all-branches'],
          description: 'Include all branches from template repository',
          input: null
        },
        {
          names: ['--internal'],
          description: 'Make the new repository internal',
          input: null
        },
        {
          names: ['-l', '--license'],
          description: 'Specify an Open Source License for the repository',
          input: {name: 'string', type: 'string', required: true}
        },
        {
          names: ['--private'],
          description: 'Make the new repository private',
          input: null
        },
        {
          names: ['--public'],
          description: 'Make the new repository public',
          input: null
        },
        {
          names: ['--push'],
          description: 'Push local commits to the new repository',
          input: null
        },
        {
          names: ['-r', '--remote'],
          description: 'Specify remote name for the new repository',
          input: {name: 'string', type: 'string', required: true}
        },
        {
          names: ['-s', '--source'],
          description: 'Specify path to local repository to use as source',
          input: {name: 'string', type: 'string', required: true}
        },
        {
          names: ['-t', '--team'],
          description: 'The name of the organization team to be granted access',
          input: {name: 'name', type: 'string', required: true}
        },
        {
          names: ['-p', '--template'],
          description: 'Make the new repository based on a template repository',
          input: {name: 'repository', type: 'string', required: true}
        }
      ]
    },
    'gh repo list': {
      usage: 'gh repo list [<owner>] [flags]',
      inputs: [{name: 'owner', type: 'string', multiple: true, required: true}],
      description: 'List repositories owned by user or organization',
      flags: [
        {
          names: ['--archived'],
          description: 'Show only archived repositories',
          input: null
        },
        {names: ['--fork'], description: 'Show only forks', input: null},
        {
          names: ['-q', '--jq'],
          description: 'Filter JSON output using a jq expression',
          input: {name: 'expression', type: 'string', required: true}
        },
        {
          names: ['--json'],
          description: 'Output JSON with the specified fields',
          input: {name: 'fields', type: 'string', required: true}
        },
        {
          names: ['-l', '--language'],
          description: 'Filter by primary coding language',
          input: {name: 'string', type: 'string', required: true}
        },
        {
          names: ['-', '--limit'],
          description: 'Maximum number of repositories to list',
          input: {name: 'int', type: 'string', required: true}
        },
        {
          names: ['--no-archived'],
          description: 'Omit archived repositories',
          input: null
        },
        {names: ['--source'], description: 'Show only non-forks', input: null},
        {
          names: ['-t', '--template'],
          description: 'Format JSON output using a Go template; see "gh help formatting"',
          input: {name: 'string', type: 'string', required: true}
        },
        {
          names: ['--topic'],
          description: 'Filter by topic',
          input: {name: 'strings', type: 'string', required: true}
        },
        {
          names: ['--visibility'],
          description: 'Filter by repository visibility: {public|private|internal}',
          input: {name: 'string', type: 'string', required: true}
        }
      ]
    },
    'gh repo archive': {
      usage: 'gh repo archive [<repository>] [flags]',
      inputs: [{name: 'repository', type: 'string', multiple: true, required: true}],
      description: 'Archive a GitHub repository.',
      flags: [
        {
          names: ['-y', '--yes'],
          description: 'Skip the confirmation prompt',
          input: null
        }
      ]
    },
    'gh repo clone': {
      usage: 'gh repo clone <repository> [<directory>] [-- <gitflags>...]',
      inputs: [
        {
          name: 'repository> [<directory>] [-- <gitflags',
          type: 'string',
          required: true
        },
        {name: 'directory', type: 'string', multiple: true, required: true}
      ],
      description: 'Clone a GitHub repository locally. Pass additional git clone flags by listing them after "--".',
      flags: [
        {
          names: ['-u', '--upstream-remote-name'],
          description: 'Upstream remote name when cloning a fork',
          input: {name: 'string', type: 'string', required: true}
        }
      ]
    },
    'gh repo delete': {
      usage: 'gh repo delete [<repository>] [flags]',
      inputs: [{name: 'repository', type: 'string', multiple: true, required: true}],
      description: 'Delete a GitHub repository.',
      flags: [
        {
          names: ['--yes'],
          description: 'confirm deletion without prompting',
          input: null
        }
      ]
    },
    'gh repo deploy-key': {},
    'gh repo edit': {
      usage: 'gh repo edit [<repository>] [flags]',
      inputs: [{name: 'repository', type: 'string', multiple: true, required: true}],
      description: 'Edit repository settings.',
      flags: [
        {
          names: ['--add-topic'],
          description: 'Add repository topic',
          input: {name: 'strings', type: 'string', required: true}
        },
        {
          names: ['--allow-forking'],
          description: 'Allow forking of an organization repository',
          input: null
        },
        {
          names: ['--allow-update-branch'],
          description: 'Allow a pull request head branch that is behind its base branch to be updated',
          input: null
        },
        {
          names: ['--default-branch'],
          description: 'Set the default branch name for the repository',
          input: {name: 'name', type: 'string', required: true}
        },
        {
          names: ['--delete-branch-on-merge'],
          description: 'Delete head branch when pull requests are merged',
          input: null
        },
        {
          names: ['-d', '--description'],
          description: 'Description of the repository',
          input: {name: 'string', type: 'string', required: true}
        },
        {
          names: ['--enable-auto-merge'],
          description: 'Enable auto-merge functionality',
          input: null
        },
        {
          names: ['--enable-discussions'],
          description: 'Enable discussions in the repository',
          input: null
        },
        {
          names: ['--enable-issues'],
          description: 'Enable issues in the repository',
          input: null
        },
        {
          names: ['--enable-merge-commit'],
          description: 'Enable merging pull requests via merge commit',
          input: null
        },
        {
          names: ['--enable-projects'],
          description: 'Enable projects in the repository',
          input: null
        },
        {
          names: ['--enable-rebase-merge'],
          description: 'Enable merging pull requests via rebase',
          input: null
        },
        {
          names: ['--enable-squash-merge'],
          description: 'Enable merging pull requests via squashed commit',
          input: null
        },
        {
          names: ['--enable-wiki'],
          description: 'Enable wiki in the repository',
          input: null
        },
        {
          names: ['-h', '--homepage'],
          description: 'Repository home page URL',
          input: {name: 'URL', type: 'string', required: true}
        },
        {
          names: ['--remove-topic'],
          description: 'Remove repository topic',
          input: {name: 'strings', type: 'string', required: true}
        },
        {
          names: ['--template'],
          description: 'Make the repository available as a template repository',
          input: null
        },
        {
          names: ['--visibility'],
          description: 'Change the visibility of the repository to {public,private,internal}',
          input: {name: 'string', type: 'string', required: true}
        }
      ]
    },
    'gh repo fork': {
      usage: 'gh repo fork [<repository>] [-- <gitflags>...] [flags]',
      inputs: [
        {name: 'gitflags', type: 'string', required: true},
        {name: 'repository', type: 'string', multiple: true, required: true}
      ],
      description: 'Create a fork of a repository.',
      flags: [
        {names: ['--clone'], description: 'Clone the fork', input: null},
        {
          names: ['--default-branch-only'],
          description: 'Only include the default branch in the fork',
          input: null
        },
        {
          names: ['--fork-name'],
          description: 'Rename the forked repository',
          input: {name: 'string', type: 'string', required: true}
        },
        {
          names: ['--org'],
          description: 'Create the fork in an organization',
          input: {name: 'string', type: 'string', required: true}
        },
        {names: ['--remote'], description: 'Add a git remote for the fork', input: null},
        {
          names: ['--remote-name'],
          description: 'Specify the name for the new remote',
          input: {name: 'string', type: 'string', required: true}
        }
      ]
    },
    'gh repo rename': {
      usage: 'gh repo rename [<new-name>] [flags]',
      inputs: [{name: 'new-name', type: 'string', multiple: true, required: true}],
      description: 'Rename a GitHub repository.',
      flags: [
        {
          names: ['-', '--repo'],
          description: 'Select another repository using the [HOST/]OWNER/REPO format',
          input: {name: '[HOST/]OWNER/REPO', type: 'string', required: true}
        },
        {
          names: ['-y', '--yes'],
          description: 'Skip the confirmation prompt',
          input: null
        }
      ]
    },
    'gh repo set-default': {
      usage: 'gh repo set-default [<repository>] [flags]',
      inputs: [{name: 'repository', type: 'string', multiple: true, required: true}],
      description: 'This command sets the default remote repository to use when querying the GitHub API for the locally cloned repository.',
      flags: [
        {
          names: ['-u', '--unset'],
          description: 'unset the current default repository',
          input: null
        },
        {
          names: ['-v', '--view'],
          description: 'view the current default repository',
          input: null
        }
      ]
    },
    'gh repo sync': {
      usage: 'gh repo sync [<destination-repository>] [flags]',
      inputs: [
        {name: 'destination-repository', type: 'string', multiple: true, required: true}
      ],
      description: 'Sync destination repository from source repository. Syncing uses the main branch of the source repository to update the matching branch on the destination repository so they are equal. A fast forward update will be used except when the --force flag is specified, then the two branches will by synced using a hard reset.',
      flags: [
        {
          names: ['-b', '--branch'],
          description: 'Branch to sync (default: main branch)',
          input: {name: 'string', type: 'string', required: true}
        },
        {
          names: ['--force'],
          description: 'Hard reset the branch of the destination repository to match the source repository',
          input: null
        },
        {
          names: ['-s', '--source'],
          description: 'Source repository',
          input: {name: 'string', type: 'string', required: true}
        }
      ]
    },
    'gh repo unarchive': {
      usage: 'gh repo unarchive [<repository>] [flags]',
      inputs: [{name: 'repository', type: 'string', multiple: true, required: true}],
      description: 'Unarchive a GitHub repository.',
      flags: [
        {
          names: ['-y', '--yes'],
          description: 'Skip the confirmation prompt',
          input: null
        }
      ]
    },
    'gh repo view': {
      usage: 'gh repo view [<repository>] [flags]',
      inputs: [{name: 'repository', type: 'string', multiple: true, required: true}],
      description: 'Display the description and the README of a GitHub repository.',
      flags: [
        {
          names: ['-b', '--branch'],
          description: 'View a specific branch of the repository',
          input: {name: 'string', type: 'string', required: true}
        },
        {
          names: ['-q', '--jq'],
          description: 'Filter JSON output using a jq expression',
          input: {name: 'expression', type: 'string', required: true}
        },
        {
          names: ['--json'],
          description: 'Output JSON with the specified fields',
          input: {name: 'fields', type: 'string', required: true}
        },
        {
          names: ['-t', '--template'],
          description: 'Format JSON output using a Go template; see "gh help formatting"',
          input: {name: 'string', type: 'string', required: true}
        },
        {
          names: ['-w', '--web'],
          description: 'Open a repository in the browser',
          input: null
        }
      ]
    }
  },
  'gh run': {
    'gh run cancel': {
      usage: 'gh run cancel [<run-id>]',
      inputs: [{name: 'run-id', type: 'string', multiple: true, required: true}],
      description: 'Cancel a workflow run'
    },
    'gh run download': {
      usage: 'gh run download [<run-id>] [flags]',
      inputs: [{name: 'run-id', type: 'string', multiple: true, required: true}],
      description: 'Download artifacts generated by a GitHub Actions workflow run.',
      flags: [
        {
          names: ['-', '--dir'],
          description: 'The directory to download artifacts into',
          input: {name: 'string', type: 'string', required: true}
        },
        {
          names: ['-n', '--name'],
          description: 'Download artifacts that match any of the given names',
          input: {name: 'stringArray', type: 'string', required: true}
        },
        {
          names: ['-p', '--pattern'],
          description: 'Download artifacts that match a glob pattern',
          input: {name: 'stringArray', type: 'string', required: true}
        }
      ]
    },
    'gh run list': {
      usage: 'gh run list [flags]',
      inputs: [],
      description: 'List recent workflow runs',
      flags: [
        {
          names: ['-b', '--branch'],
          description: 'Filter runs by branch',
          input: {name: 'string', type: 'string', required: true}
        },
        {
          names: ['-q', '--jq'],
          description: 'Filter JSON output using a jq expression',
          input: {name: 'expression', type: 'string', required: true}
        },
        {
          names: ['--json'],
          description: 'Output JSON with the specified fields',
          input: {name: 'fields', type: 'string', required: true}
        },
        {
          names: ['-', '--limit'],
          description: 'Maximum number of runs to fetch',
          input: {name: 'int', type: 'string', required: true}
        },
        {
          names: ['-t', '--template'],
          description: 'Format JSON output using a Go template; see "gh help formatting"',
          input: {name: 'string', type: 'string', required: true}
        },
        {
          names: ['-u', '--user'],
          description: 'Filter runs by user who triggered the run',
          input: {name: 'string', type: 'string', required: true}
        },
        {
          names: ['-w', '--workflow'],
          description: 'Filter runs by workflow',
          input: {name: 'string', type: 'string', required: true}
        }
      ]
    },
    'gh run rerun': {
      usage: 'gh run rerun [<run-id>] [flags]',
      inputs: [{name: 'run-id', type: 'string', multiple: true, required: true}],
      description: 'Rerun a failed run',
      flags: [
        {names: ['-d', '--debug'], description: 'Rerun with debug logging', input: null},
        {
          names: ['--failed'],
          description: 'Rerun only failed jobs, including dependencies',
          input: null
        },
        {
          names: ['-j', '--job'],
          description: 'Rerun a specific job from a run, including dependencies',
          input: {name: 'string', type: 'string', required: true}
        }
      ]
    },
    'gh run view': {
      usage: 'gh run view [<run-id>] [flags]',
      inputs: [{name: 'run-id', type: 'string', multiple: true, required: true}],
      description: 'View a summary of a workflow run',
      flags: [
        {
          names: ['--exit-status'],
          description: 'Exit with non-zero status if run failed',
          input: null
        },
        {
          names: ['-j', '--job'],
          description: 'View a specific job ID from a run',
          input: {name: 'string', type: 'string', required: true}
        },
        {
          names: ['-q', '--jq'],
          description: 'Filter JSON output using a jq expression',
          input: {name: 'expression', type: 'string', required: true}
        },
        {
          names: ['--json'],
          description: 'Output JSON with the specified fields',
          input: {name: 'fields', type: 'string', required: true}
        },
        {
          names: ['--log'],
          description: 'View full log for either a run or specific job',
          input: null
        },
        {
          names: ['--log-failed'],
          description: 'View the log for any failed steps in a run or specific job',
          input: null
        },
        {
          names: ['-t', '--template'],
          description: 'Format JSON output using a Go template; see "gh help formatting"',
          input: {name: 'string', type: 'string', required: true}
        },
        {names: ['-v', '--verbose'], description: 'Show job steps', input: null},
        {names: ['-w', '--web'], description: 'Open run in the browser', input: null}
      ]
    },
    'gh run watch': {
      usage: 'gh run watch <run-id> [flags]',
      inputs: [{name: 'run-id', type: 'string', required: true}],
      description: 'Watch a run until it completes, showing its progress',
      flags: [
        {
          names: ['--exit-status'],
          description: 'Exit with non-zero status if run fails',
          input: null
        },
        {
          names: ['-i', '--interval'],
          description: 'Refresh interval in seconds',
          input: {name: 'int', type: 'string', required: true}
        }
      ]
    }
  },
  'gh workflow': {
    'gh workflow disable': {
      usage: 'gh workflow disable [<workflow-id> | <workflow-name>]',
      inputs: [
        {name: 'workflow-name', type: 'string', required: true},
        {
          name: 'workflow-id> | <workflow-name',
          type: 'string',
          multiple: true,
          required: true
        }
      ],
      description: 'Disable a workflow, preventing it from running or showing up when listing workflows.'
    },
    'gh workflow enable': {
      usage: 'gh workflow enable [<workflow-id> | <workflow-name>]',
      inputs: [
        {name: 'workflow-name', type: 'string', required: true},
        {
          name: 'workflow-id> | <workflow-name',
          type: 'string',
          multiple: true,
          required: true
        }
      ],
      description: 'Enable a workflow, allowing it to be run and show up when listing workflows.'
    },
    'gh workflow list': {
      usage: 'gh workflow list [flags]',
      inputs: [],
      description: 'List workflow files, hiding disabled workflows by default.',
      flags: [
        {
          names: ['-a', '--all'],
          description: 'Show all workflows, including disabled workflows',
          input: null
        },
        {
          names: ['-', '--limit'],
          description: 'Maximum number of workflows to fetch',
          input: {name: 'int', type: 'string', required: true}
        }
      ]
    },
    'gh workflow run': {
      usage: 'gh workflow run [<workflow-id> | <workflow-name>] [flags]',
      inputs: [
        {name: 'workflow-name', type: 'string', required: true},
        {
          name: 'workflow-id> | <workflow-name',
          type: 'string',
          multiple: true,
          required: true
        }
      ],
      description: 'Create a workflow_dispatch event for a given workflow.',
      flags: [
        {
          names: ['-', '--field'],
          description: 'Add a string parameter in key=value format, respecting @ syntax',
          input: {name: 'key=value', type: 'string', required: true}
        },
        {
          names: ['--json'],
          description: 'Read workflow inputs as JSON via STDIN',
          input: null
        },
        {
          names: ['-f', '--raw-field'],
          description: 'Add a string parameter in key=value format',
          input: {name: 'key=value', type: 'string', required: true}
        },
        {
          names: ['-r', '--ref'],
          description: 'The branch or tag name which contains the version of the workflow file you\'d like to run',
          input: {name: 'string', type: 'string', required: true}
        }
      ]
    },
    'gh workflow view': {
      usage: 'gh workflow view [<workflow-id> | <workflow-name> | <filename>] [flags]',
      inputs: [
        {name: 'workflow-name> | <filename', type: 'string', required: true},
        {
          name: 'workflow-id> | <workflow-name> | <filename',
          type: 'string',
          multiple: true,
          required: true
        }
      ],
      description: 'View the summary of a workflow',
      flags: [
        {
          names: ['-r', '--ref'],
          description: 'The branch or tag name which contains the version of the workflow file you\'d like to view',
          input: {name: 'string', type: 'string', required: true}
        },
        {
          names: ['-w', '--web'],
          description: 'Open workflow in the browser',
          input: null
        },
        {
          names: ['-y', '--yaml'],
          description: 'View the workflow yaml file',
          input: null
        }
      ]
    }
  },
  'gh alias': {
    'gh alias delete': {
      usage: 'gh alias delete <alias>',
      inputs: [{name: 'alias', type: 'string', required: true}],
      description: 'Delete an alias'
    },
    'gh alias list': {
      usage: 'gh alias list',
      inputs: [],
      description: 'This command prints out all of the aliases gh is configured to use.'
    },
    'gh alias set': {
      usage: 'gh alias set <alias> <expansion> [flags]',
      inputs: [{name: 'alias> <expansion', type: 'string', required: true}],
      description: 'Define a word that will expand to a full gh command when invoked.',
      flags: [
        {
          names: ['-s', '--shell'],
          description: 'Declare an alias to be passed through a shell interpreter',
          input: null
        }
      ]
    }
  },
  'gh api': {
    usage: 'gh api <endpoint> [flags]',
    inputs: [{name: 'endpoint', type: 'string', required: true}],
    description: 'Makes an authenticated HTTP request to the GitHub API and prints the response.',
    flags: [
      {
        names: ['--cache'],
        description: 'Cache the response, e.g. "3600s", "60m", "1h"',
        input: {name: 'duration', type: 'string', required: true}
      },
      {
        names: ['-', '--field'],
        description: 'Add a typed parameter in key=value format',
        input: {name: 'key=value', type: 'string', required: true}
      },
      {
        names: ['-', '--header'],
        description: 'Add a HTTP request header in key:value format',
        input: {name: 'key:value', type: 'string', required: true}
      },
      {
        names: ['--hostname'],
        description: 'The GitHub hostname for the request (default "github.com")',
        input: {name: 'string', type: 'string', required: true}
      },
      {
        names: ['-i', '--include'],
        description: 'Include HTTP response status line and headers in the output',
        input: null
      },
      {
        names: ['--input'],
        description: 'The file to use as body for the HTTP request (use "-" to read from standard input)',
        input: {name: 'file', type: 'string', required: true}
      },
      {
        names: ['-q', '--jq'],
        description: 'Query to select values from the response using jq syntax',
        input: {name: 'string', type: 'string', required: true}
      },
      {
        names: ['-', '--method'],
        description: 'The HTTP method for the request',
        input: {name: 'string', type: 'string', required: true}
      },
      {
        names: ['--paginate'],
        description: 'Make additional HTTP requests to fetch all pages of results',
        input: null
      },
      {
        names: ['-p', '--preview'],
        description: 'GitHub API preview names to request (without the "-preview" suffix)',
        input: {name: 'names', type: 'string', required: true}
      },
      {
        names: ['-f', '--raw-field'],
        description: 'Add a string parameter in key=value format',
        input: {name: 'key=value', type: 'string', required: true}
      },
      {
        names: ['--silent'],
        description: 'Do not print the response body',
        input: null
      },
      {
        names: ['-t', '--template'],
        description: 'Format JSON output using a Go template; see "gh help formatting"',
        input: {name: 'string', type: 'string', required: true}
      }
    ]
  },
  'gh completion': {
    usage: 'gh completion -s <shell>',
    inputs: [{name: 'shell', type: 'string', required: true}],
    description: 'Generate shell completion scripts for GitHub CLI commands.',
    flags: [
      {
        names: ['-s', '--shell'],
        description: 'Shell type: {bash|zsh|fish|powershell}',
        input: {name: 'string', type: 'string', required: true}
      }
    ]
  },
  'gh config': {
    'gh config get': {
      usage: 'gh config get <key> [flags]',
      inputs: [{name: 'key', type: 'string', required: true}],
      description: 'Print the value of a given configuration key',
      flags: [
        {
          names: ['-h', '--host'],
          description: 'Get per-host setting',
          input: {name: 'string', type: 'string', required: true}
        }
      ]
    },
    'gh config list': {
      usage: 'gh config list [flags]',
      inputs: [],
      description: 'Print a list of configuration keys and values',
      flags: [
        {
          names: ['-h', '--host'],
          description: 'Get per-host configuration',
          input: {name: 'string', type: 'string', required: true}
        }
      ]
    },
    'gh config set': {
      usage: 'gh config set <key> <value> [flags]',
      inputs: [{name: 'key> <value', type: 'string', required: true}],
      description: 'Update configuration with a value for the given key',
      flags: [
        {
          names: ['-h', '--host'],
          description: 'Set per-host setting',
          input: {name: 'string', type: 'string', required: true}
        }
      ]
    }
  },
  'gh extension': {
    'gh extension browse': {
      usage: 'gh extension browse [flags]',
      inputs: [],
      description: 'This command will take over your terminal and run a fully interactive interface for browsing, adding, and removing gh extensions. A terminal width greater than 100 columns is recommended.',
      flags: [
        {names: ['--debug'], description: 'log to /tmp/extBrowse-*', input: null},
        {
          names: ['-s', '--single-column'],
          description: 'Render TUI with only one column of text',
          input: null
        }
      ]
    },
    'gh extension create': {
      usage: 'gh extension create [<name>] [flags]',
      inputs: [{name: 'name', type: 'string', multiple: true, required: true}],
      description: 'Create a new extension',
      flags: [
        {
          names: ['--precompiled'],
          description: 'Create a precompiled extension. Possible values: go, other',
          input: {name: 'string', type: 'string', required: true}
        }
      ]
    },
    'gh extension exec': {
      usage: 'gh extension exec <name> [args]',
      inputs: [{name: 'name', type: 'string', required: true}],
      description: 'Execute an extension using the short name. For example, if the extension repository is "owner/gh-extension", you should pass "extension". You can use this command when the short name conflicts with a core gh command.'
    },
    'gh extension install': {
      usage: 'gh extension install <repository> [flags]',
      inputs: [{name: 'repository', type: 'string', required: true}],
      description: 'Install a GitHub repository locally as a GitHub CLI extension.',
      flags: [
        {
          names: ['--pin'],
          description: 'pin extension to a release tag or commit ref',
          input: {name: 'string', type: 'string', required: true}
        }
      ]
    },
    'gh extension list': {
      usage: 'gh extension list',
      inputs: [],
      description: 'List installed extension commands'
    },
    'gh extension remove': {
      usage: 'gh extension remove <name>',
      inputs: [{name: 'name', type: 'string', required: true}],
      description: 'Remove an installed extension'
    },
    'gh extension search': {
      usage: 'gh extension search [<query>] [flags]',
      inputs: [{name: 'query', type: 'string', multiple: true, required: true}],
      description: 'Search for gh extensions.',
      flags: [
        {
          names: ['-q', '--jq'],
          description: 'Filter JSON output using a jq expression',
          input: {name: 'expression', type: 'string', required: true}
        },
        {
          names: ['--json'],
          description: 'Output JSON with the specified fields',
          input: {name: 'fields', type: 'string', required: true}
        },
        {
          names: ['--license'],
          description: 'Filter based on license type',
          input: {name: 'strings', type: 'string', required: true}
        },
        {
          names: ['-', '--limit'],
          description: 'Maximum number of extensions to fetch',
          input: {name: 'int', type: 'string', required: true}
        },
        {
          names: ['--order'],
          description: 'Order of repositories returned, ignored unless \'--sort\' flag is specified: {asc|desc}',
          input: {name: 'string', type: 'string', required: true}
        },
        {
          names: ['--owner'],
          description: 'Filter on owner',
          input: {name: 'string', type: 'string', required: true}
        },
        {
          names: ['--sort'],
          description: 'Sort fetched repositories: {forks|help-wanted-issues|stars|updated}',
          input: {name: 'string', type: 'string', required: true}
        },
        {
          names: ['-t', '--template'],
          description: 'Format JSON output using a Go template; see "gh help formatting"',
          input: {name: 'string', type: 'string', required: true}
        },
        {
          names: ['-w', '--web'],
          description: 'Open the search query in the web browser',
          input: null
        }
      ]
    },
    'gh extension upgrade': {
      usage: 'gh extension upgrade {<name> | --all} [flags]',
      inputs: [],
      description: 'Upgrade installed extensions',
      flags: [
        {names: ['--all'], description: 'Upgrade all extensions', input: null},
        {names: ['--dry-run'], description: 'Only display upgrades', input: null},
        {names: ['--force'], description: 'Force upgrade extension', input: null}
      ]
    }
  },
  'gh gpg-key': {
    'gh gpg-key add': {
      usage: 'gh gpg-key add [<key-file>] [flags]',
      inputs: [{name: 'key-file', type: 'string', multiple: true, required: true}],
      description: 'Add a GPG key to your GitHub account',
      flags: [
        {
          names: ['-t', '--title'],
          description: 'Title for the new key',
          input: {name: 'string', type: 'string', required: true}
        }
      ]
    },
    'gh gpg-key delete': {
      usage: 'gh gpg-key delete <key-id> [flags]',
      inputs: [{name: 'key-id', type: 'string', required: true}],
      description: 'Delete a GPG key from your GitHub account',
      flags: [
        {
          names: ['-y', '--yes'],
          description: 'Skip the confirmation prompt',
          input: null
        }
      ]
    },
    'gh gpg-key list': {
      usage: 'gh gpg-key list',
      inputs: [],
      description: 'Lists GPG keys in your GitHub account'
    }
  },
  'gh label': {
    'gh label clone': {
      usage: 'gh label clone <source-repository> [flags]',
      inputs: [{name: 'source-repository', type: 'string', required: true}],
      description: 'Clones labels from a source repository to a destination repository on GitHub. By default, the destination repository is the current repository.',
      flags: [
        {
          names: ['-f', '--force'],
          description: 'Overwrite labels in the destination repository',
          input: null
        }
      ]
    },
    'gh label create': {
      usage: 'gh label create <name> [flags]',
      inputs: [{name: 'name', type: 'string', required: true}],
      description: 'Create a new label on GitHub, or updates an existing one with --force.',
      flags: [
        {
          names: ['-c', '--color'],
          description: 'Color of the label',
          input: {name: 'string', type: 'string', required: true}
        },
        {
          names: ['-d', '--description'],
          description: 'Description of the label',
          input: {name: 'string', type: 'string', required: true}
        },
        {
          names: ['-f', '--force'],
          description: 'Update the label color and description if label already exists',
          input: null
        }
      ]
    },
    'gh label delete': {
      usage: 'gh label delete <name> [flags]',
      inputs: [{name: 'name', type: 'string', required: true}],
      description: 'Delete a label from a repository',
      flags: [
        {
          names: ['--yes'],
          description: 'Confirm deletion without prompting',
          input: null
        }
      ]
    },
    'gh label edit': {
      usage: 'gh label edit <name> [flags]',
      inputs: [{name: 'name', type: 'string', required: true}],
      description: 'Update a label on GitHub.',
      flags: [
        {
          names: ['-c', '--color'],
          description: 'Color of the label',
          input: {name: 'string', type: 'string', required: true}
        },
        {
          names: ['-d', '--description'],
          description: 'Description of the label',
          input: {name: 'string', type: 'string', required: true}
        },
        {
          names: ['-n', '--name'],
          description: 'New name of the label',
          input: {name: 'string', type: 'string', required: true}
        }
      ]
    },
    'gh label list': {
      usage: 'gh label list [flags]',
      inputs: [],
      description: 'Display labels in a GitHub repository.',
      flags: [
        {
          names: ['-q', '--jq'],
          description: 'Filter JSON output using a jq expression',
          input: {name: 'expression', type: 'string', required: true}
        },
        {
          names: ['--json'],
          description: 'Output JSON with the specified fields',
          input: {name: 'fields', type: 'string', required: true}
        },
        {
          names: ['-', '--limit'],
          description: 'Maximum number of labels to fetch',
          input: {name: 'int', type: 'string', required: true}
        },
        {
          names: ['--order'],
          description: 'Order of labels returned: {asc|desc}',
          input: {name: 'string', type: 'string', required: true}
        },
        {
          names: ['-', '--search'],
          description: 'Search label names and descriptions',
          input: {name: 'string', type: 'string', required: true}
        },
        {
          names: ['--sort'],
          description: 'Sort fetched labels: {created|name}',
          input: {name: 'string', type: 'string', required: true}
        },
        {
          names: ['-t', '--template'],
          description: 'Format JSON output using a Go template; see "gh help formatting"',
          input: {name: 'string', type: 'string', required: true}
        },
        {
          names: ['-w', '--web'],
          description: 'List labels in the web browser',
          input: null
        }
      ]
    }
  },
  'gh search': {
    'gh search commits': {
      usage: 'gh search commits [<query>] [flags]',
      inputs: [{name: 'query', type: 'string', multiple: true, required: true}],
      description: 'Search for commits on GitHub.',
      flags: [
        {
          names: ['--author'],
          description: 'Filter by author',
          input: {name: 'string', type: 'string', required: true}
        },
        {
          names: ['--author-date'],
          description: 'Filter based on authored date',
          input: {name: 'date', type: 'string', required: true}
        },
        {
          names: ['--author-email'],
          description: 'Filter on author email',
          input: {name: 'string', type: 'string', required: true}
        },
        {
          names: ['--author-name'],
          description: 'Filter on author name',
          input: {name: 'string', type: 'string', required: true}
        },
        {
          names: ['--committer'],
          description: 'Filter by committer',
          input: {name: 'string', type: 'string', required: true}
        },
        {
          names: ['--committer-date'],
          description: 'Filter based on committed date',
          input: {name: 'date', type: 'string', required: true}
        },
        {
          names: ['--committer-email'],
          description: 'Filter on committer email',
          input: {name: 'string', type: 'string', required: true}
        },
        {
          names: ['--committer-name'],
          description: 'Filter on committer name',
          input: {name: 'string', type: 'string', required: true}
        },
        {
          names: ['--hash'],
          description: 'Filter by commit hash',
          input: {name: 'string', type: 'string', required: true}
        },
        {
          names: ['-q', '--jq'],
          description: 'Filter JSON output using a jq expression',
          input: {name: 'expression', type: 'string', required: true}
        },
        {
          names: ['--json'],
          description: 'Output JSON with the specified fields',
          input: {name: 'fields', type: 'string', required: true}
        },
        {
          names: ['-', '--limit'],
          description: 'Maximum number of commits to fetch',
          input: {name: 'int', type: 'string', required: true}
        },
        {names: ['--merge'], description: 'Filter on merge commits', input: null},
        {
          names: ['--order'],
          description: 'Order of commits returned, ignored unless \'--sort\' flag is specified: {asc|desc}',
          input: {name: 'string', type: 'string', required: true}
        },
        {
          names: ['--owner'],
          description: 'Filter on repository owner',
          input: {name: 'string', type: 'string', required: true}
        },
        {
          names: ['--parent'],
          description: 'Filter by parent hash',
          input: {name: 'string', type: 'string', required: true}
        },
        {
          names: ['--repo'],
          description: 'Filter on repository',
          input: {name: 'strings', type: 'string', required: true}
        },
        {
          names: ['--sort'],
          description: 'Sort fetched commits: {author-date|committer-date}',
          input: {name: 'string', type: 'string', required: true}
        },
        {
          names: ['-t', '--template'],
          description: 'Format JSON output using a Go template; see "gh help formatting"',
          input: {name: 'string', type: 'string', required: true}
        },
        {
          names: ['--tree'],
          description: 'Filter by tree hash',
          input: {name: 'string', type: 'string', required: true}
        },
        {
          names: ['--visibility'],
          description: 'Filter based on repository visibility: {public|private|internal}',
          input: {name: 'strings', type: 'string', required: true}
        },
        {
          names: ['-w', '--web'],
          description: 'Open the search query in the web browser',
          input: null
        }
      ]
    },
    'gh search issues': {
      usage: 'gh search issues [<query>] [flags]',
      inputs: [{name: 'query', type: 'string', multiple: true, required: true}],
      description: 'Search for issues on GitHub.',
      flags: [
        {
          names: ['--app'],
          description: 'Filter by GitHub App author',
          input: {name: 'string', type: 'string', required: true}
        },
        {
          names: ['--archived'],
          description: 'Restrict search to archived repositories',
          input: null
        },
        {
          names: ['--assignee'],
          description: 'Filter by assignee',
          input: {name: 'string', type: 'string', required: true}
        },
        {
          names: ['--author'],
          description: 'Filter by author',
          input: {name: 'string', type: 'string', required: true}
        },
        {
          names: ['--closed'],
          description: 'Filter on closed at date',
          input: {name: 'date', type: 'string', required: true}
        },
        {
          names: ['--commenter'],
          description: 'Filter based on comments by user',
          input: {name: 'user', type: 'string', required: true}
        },
        {
          names: ['--comments'],
          description: 'Filter on number of comments',
          input: {name: 'number', type: 'string', required: true}
        },
        {
          names: ['--created'],
          description: 'Filter based on created at date',
          input: {name: 'date', type: 'string', required: true}
        },
        {
          names: ['--include-prs'],
          description: 'Include pull requests in results',
          input: null
        },
        {
          names: ['--interactions'],
          description: 'Filter on number of reactions and comments',
          input: {name: 'number', type: 'string', required: true}
        },
        {
          names: ['--involves'],
          description: 'Filter based on involvement of user',
          input: {name: 'user', type: 'string', required: true}
        },
        {
          names: ['-q', '--jq'],
          description: 'Filter JSON output using a jq expression',
          input: {name: 'expression', type: 'string', required: true}
        },
        {
          names: ['--json'],
          description: 'Output JSON with the specified fields',
          input: {name: 'fields', type: 'string', required: true}
        },
        {
          names: ['--label'],
          description: 'Filter on label',
          input: {name: 'strings', type: 'string', required: true}
        },
        {
          names: ['--language'],
          description: 'Filter based on the coding language',
          input: {name: 'string', type: 'string', required: true}
        },
        {
          names: ['-', '--limit'],
          description: 'Maximum number of results to fetch',
          input: {name: 'int', type: 'string', required: true}
        },
        {
          names: ['--locked'],
          description: 'Filter on locked conversation status',
          input: null
        },
        {
          names: ['--match'],
          description: 'Restrict search to specific field of issue: {title|body|comments}',
          input: {name: 'strings', type: 'string', required: true}
        },
        {
          names: ['--mentions'],
          description: 'Filter based on user mentions',
          input: {name: 'user', type: 'string', required: true}
        },
        {
          names: ['--milestone'],
          description: 'Filter by milestone title',
          input: {name: 'title', type: 'string', required: true}
        },
        {
          names: ['--no-assignee'],
          description: 'Filter on missing assignee',
          input: null
        },
        {names: ['--no-label'], description: 'Filter on missing label', input: null},
        {
          names: ['--no-milestone'],
          description: 'Filter on missing milestone',
          input: null
        },
        {names: ['--no-project'], description: 'Filter on missing project', input: null},
        {
          names: ['--order'],
          description: 'Order of results returned, ignored unless \'--sort\' flag is specified: {asc|desc}',
          input: {name: 'string', type: 'string', required: true}
        },
        {
          names: ['--owner'],
          description: 'Filter on repository owner',
          input: {name: 'string', type: 'string', required: true}
        },
        {
          names: ['--project'],
          description: 'Filter on project board number',
          input: {name: 'number', type: 'string', required: true}
        },
        {
          names: ['--reactions'],
          description: 'Filter on number of reactions',
          input: {name: 'number', type: 'string', required: true}
        },
        {
          names: ['--repo'],
          description: 'Filter on repository',
          input: {name: 'strings', type: 'string', required: true}
        },
        {
          names: ['--sort'],
          description: 'Sort fetched results: {comments|created|interactions|reactions|reactions-+1|reactions--1|reactions-heart|reactions-smile|reactions-tada|reactions-thinking_face|updated}',
          input: {name: 'string', type: 'string', required: true}
        },
        {
          names: ['--state'],
          description: 'Filter based on state: {open|closed}',
          input: {name: 'string', type: 'string', required: true}
        },
        {
          names: ['--team-mentions'],
          description: 'Filter based on team mentions',
          input: {name: 'string', type: 'string', required: true}
        },
        {
          names: ['-t', '--template'],
          description: 'Format JSON output using a Go template; see "gh help formatting"',
          input: {name: 'string', type: 'string', required: true}
        },
        {
          names: ['--updated'],
          description: 'Filter on last updated at date',
          input: {name: 'date', type: 'string', required: true}
        },
        {
          names: ['--visibility'],
          description: 'Filter based on repository visibility: {public|private|internal}',
          input: {name: 'strings', type: 'string', required: true}
        },
        {
          names: ['-w', '--web'],
          description: 'Open the search query in the web browser',
          input: null
        }
      ]
    },
    'gh search prs': {
      usage: 'gh search prs [<query>] [flags]',
      inputs: [{name: 'query', type: 'string', multiple: true, required: true}],
      description: 'Search for pull requests on GitHub.',
      flags: [
        {
          names: ['--app'],
          description: 'Filter by GitHub App author',
          input: {name: 'string', type: 'string', required: true}
        },
        {
          names: ['--archived'],
          description: 'Restrict search to archived repositories',
          input: null
        },
        {
          names: ['--assignee'],
          description: 'Filter by assignee',
          input: {name: 'string', type: 'string', required: true}
        },
        {
          names: ['--author'],
          description: 'Filter by author',
          input: {name: 'string', type: 'string', required: true}
        },
        {
          names: ['-', '--base'],
          description: 'Filter on base branch name',
          input: {name: 'string', type: 'string', required: true}
        },
        {
          names: ['--checks'],
          description: 'Filter based on status of the checks: {pending|success|failure}',
          input: {name: 'string', type: 'string', required: true}
        },
        {
          names: ['--closed'],
          description: 'Filter on closed at date',
          input: {name: 'date', type: 'string', required: true}
        },
        {
          names: ['--commenter'],
          description: 'Filter based on comments by user',
          input: {name: 'user', type: 'string', required: true}
        },
        {
          names: ['--comments'],
          description: 'Filter on number of comments',
          input: {name: 'number', type: 'string', required: true}
        },
        {
          names: ['--created'],
          description: 'Filter based on created at date',
          input: {name: 'date', type: 'string', required: true}
        },
        {names: ['--draft'], description: 'Filter based on draft state', input: null},
        {
          names: ['-', '--head'],
          description: 'Filter on head branch name',
          input: {name: 'string', type: 'string', required: true}
        },
        {
          names: ['--interactions'],
          description: 'Filter on number of reactions and comments',
          input: {name: 'number', type: 'string', required: true}
        },
        {
          names: ['--involves'],
          description: 'Filter based on involvement of user',
          input: {name: 'user', type: 'string', required: true}
        },
        {
          names: ['-q', '--jq'],
          description: 'Filter JSON output using a jq expression',
          input: {name: 'expression', type: 'string', required: true}
        },
        {
          names: ['--json'],
          description: 'Output JSON with the specified fields',
          input: {name: 'fields', type: 'string', required: true}
        },
        {
          names: ['--label'],
          description: 'Filter on label',
          input: {name: 'strings', type: 'string', required: true}
        },
        {
          names: ['--language'],
          description: 'Filter based on the coding language',
          input: {name: 'string', type: 'string', required: true}
        },
        {
          names: ['-', '--limit'],
          description: 'Maximum number of results to fetch',
          input: {name: 'int', type: 'string', required: true}
        },
        {
          names: ['--locked'],
          description: 'Filter on locked conversation status',
          input: null
        },
        {
          names: ['--match'],
          description: 'Restrict search to specific field of issue: {title|body|comments}',
          input: {name: 'strings', type: 'string', required: true}
        },
        {
          names: ['--mentions'],
          description: 'Filter based on user mentions',
          input: {name: 'user', type: 'string', required: true}
        },
        {names: ['--merged'], description: 'Filter based on merged state', input: null},
        {
          names: ['--merged-at'],
          description: 'Filter on merged at date',
          input: {name: 'date', type: 'string', required: true}
        },
        {
          names: ['--milestone'],
          description: 'Filter by milestone title',
          input: {name: 'title', type: 'string', required: true}
        },
        {
          names: ['--no-assignee'],
          description: 'Filter on missing assignee',
          input: null
        },
        {names: ['--no-label'], description: 'Filter on missing label', input: null},
        {
          names: ['--no-milestone'],
          description: 'Filter on missing milestone',
          input: null
        },
        {names: ['--no-project'], description: 'Filter on missing project', input: null},
        {
          names: ['--order'],
          description: 'Order of results returned, ignored unless \'--sort\' flag is specified: {asc|desc}',
          input: {name: 'string', type: 'string', required: true}
        },
        {
          names: ['--owner'],
          description: 'Filter on repository owner',
          input: {name: 'string', type: 'string', required: true}
        },
        {
          names: ['--project'],
          description: 'Filter on project board number',
          input: {name: 'number', type: 'string', required: true}
        },
        {
          names: ['--reactions'],
          description: 'Filter on number of reactions',
          input: {name: 'number', type: 'string', required: true}
        },
        {
          names: ['--repo'],
          description: 'Filter on repository',
          input: {name: 'strings', type: 'string', required: true}
        },
        {
          names: ['--review'],
          description: 'Filter based on review status: {none|required|approved|changes_requested}',
          input: {name: 'string', type: 'string', required: true}
        },
        {
          names: ['--review-requested'],
          description: 'Filter on user or team requested to review',
          input: {name: 'user', type: 'string', required: true}
        },
        {
          names: ['--reviewed-by'],
          description: 'Filter on user who reviewed',
          input: {name: 'user', type: 'string', required: true}
        },
        {
          names: ['--sort'],
          description: 'Sort fetched results: {comments|reactions|reactions-+1|reactions--1|reactions-smile|reactions-thinking_face|reactions-heart|reactions-tada|interactions|created|updated}',
          input: {name: 'string', type: 'string', required: true}
        },
        {
          names: ['--state'],
          description: 'Filter based on state: {open|closed}',
          input: {name: 'string', type: 'string', required: true}
        },
        {
          names: ['--team-mentions'],
          description: 'Filter based on team mentions',
          input: {name: 'string', type: 'string', required: true}
        },
        {
          names: ['-t', '--template'],
          description: 'Format JSON output using a Go template; see "gh help formatting"',
          input: {name: 'string', type: 'string', required: true}
        },
        {
          names: ['--updated'],
          description: 'Filter on last updated at date',
          input: {name: 'date', type: 'string', required: true}
        },
        {
          names: ['--visibility'],
          description: 'Filter based on repository visibility: {public|private|internal}',
          input: {name: 'strings', type: 'string', required: true}
        },
        {
          names: ['-w', '--web'],
          description: 'Open the search query in the web browser',
          input: null
        }
      ]
    },
    'gh search repos': {
      usage: 'gh search repos [<query>] [flags]',
      inputs: [{name: 'query', type: 'string', multiple: true, required: true}],
      description: 'Search for repositories on GitHub.',
      flags: [
        {
          names: ['--archived'],
          description: 'Filter based on archive state',
          input: null
        },
        {
          names: ['--created'],
          description: 'Filter based on created at date',
          input: {name: 'date', type: 'string', required: true}
        },
        {
          names: ['--followers'],
          description: 'Filter based on number of followers',
          input: {name: 'number', type: 'string', required: true}
        },
        {
          names: ['--forks'],
          description: 'Filter on number of forks',
          input: {name: 'number', type: 'string', required: true}
        },
        {
          names: ['--good-first-issues'],
          description: 'Filter on number of issues with the \'good first issue\' label',
          input: {name: 'number', type: 'string', required: true}
        },
        {
          names: ['--help-wanted-issues'],
          description: 'Filter on number of issues with the \'help wanted\' label',
          input: {name: 'number', type: 'string', required: true}
        },
        {
          names: ['--include-forks'],
          description: 'Include forks in fetched repositories: {false|true|only}',
          input: {name: 'string', type: 'string', required: true}
        },
        {
          names: ['-q', '--jq'],
          description: 'Filter JSON output using a jq expression',
          input: {name: 'expression', type: 'string', required: true}
        },
        {
          names: ['--json'],
          description: 'Output JSON with the specified fields',
          input: {name: 'fields', type: 'string', required: true}
        },
        {
          names: ['--language'],
          description: 'Filter based on the coding language',
          input: {name: 'string', type: 'string', required: true}
        },
        {
          names: ['--license'],
          description: 'Filter based on license type',
          input: {name: 'strings', type: 'string', required: true}
        },
        {
          names: ['-', '--limit'],
          description: 'Maximum number of repositories to fetch',
          input: {name: 'int', type: 'string', required: true}
        },
        {
          names: ['--match'],
          description: 'Restrict search to specific field of repository: {name|description|readme}',
          input: {name: 'strings', type: 'string', required: true}
        },
        {
          names: ['--number-topics'],
          description: 'Filter on number of topics',
          input: {name: 'number', type: 'string', required: true}
        },
        {
          names: ['--order'],
          description: 'Order of repositories returned, ignored unless \'--sort\' flag is specified: {asc|desc}',
          input: {name: 'string', type: 'string', required: true}
        },
        {
          names: ['--owner'],
          description: 'Filter on owner',
          input: {name: 'string', type: 'string', required: true}
        },
        {
          names: ['--size'],
          description: 'Filter on a size range, in kilobytes',
          input: {name: 'string', type: 'string', required: true}
        },
        {
          names: ['--sort'],
          description: 'Sort fetched repositories: {forks|help-wanted-issues|stars|updated}',
          input: {name: 'string', type: 'string', required: true}
        },
        {
          names: ['--stars'],
          description: 'Filter on number of stars',
          input: {name: 'number', type: 'string', required: true}
        },
        {
          names: ['-t', '--template'],
          description: 'Format JSON output using a Go template; see "gh help formatting"',
          input: {name: 'string', type: 'string', required: true}
        },
        {
          names: ['--topic'],
          description: 'Filter on topic',
          input: {name: 'strings', type: 'string', required: true}
        },
        {
          names: ['--updated'],
          description: 'Filter on last updated at date',
          input: {name: 'date', type: 'string', required: true}
        },
        {
          names: ['--visibility'],
          description: 'Filter based on visibility: {public|private|internal}',
          input: {name: 'strings', type: 'string', required: true}
        },
        {
          names: ['-w', '--web'],
          description: 'Open the search query in the web browser',
          input: null
        }
      ]
    }
  },
  'gh secret': {
    'gh secret delete': {
      usage: 'gh secret delete <secret-name> [flags]',
      inputs: [{name: 'secret-name', type: 'string', required: true}],
      description: 'Delete a secret on one of the following levels:',
      flags: [
        {
          names: ['-a', '--app'],
          description: 'Delete a secret for a specific application: {actions|codespaces|dependabot}',
          input: {name: 'string', type: 'string', required: true}
        },
        {
          names: ['-e', '--env'],
          description: 'Delete a secret for an environment',
          input: {name: 'string', type: 'string', required: true}
        },
        {
          names: ['-o', '--org'],
          description: 'Delete a secret for an organization',
          input: {name: 'string', type: 'string', required: true}
        },
        {
          names: ['-u', '--user'],
          description: 'Delete a secret for your user',
          input: null
        }
      ]
    },
    'gh secret list': {
      usage: 'gh secret list [flags]',
      inputs: [],
      description: 'List secrets on one of the following levels:',
      flags: [
        {
          names: ['-a', '--app'],
          description: 'List secrets for a specific application: {actions|codespaces|dependabot}',
          input: {name: 'string', type: 'string', required: true}
        },
        {
          names: ['-e', '--env'],
          description: 'List secrets for an environment',
          input: {name: 'string', type: 'string', required: true}
        },
        {
          names: ['-o', '--org'],
          description: 'List secrets for an organization',
          input: {name: 'string', type: 'string', required: true}
        },
        {
          names: ['-u', '--user'],
          description: 'List a secret for your user',
          input: null
        }
      ]
    },
    'gh secret set': {
      usage: 'gh secret set <secret-name> [flags]',
      inputs: [{name: 'secret-name', type: 'string', required: true}],
      description: 'Set a value for a secret on one of the following levels:',
      flags: [
        {
          names: ['-a', '--app'],
          description: 'Set the application for a secret: {actions|codespaces|dependabot}',
          input: {name: 'string', type: 'string', required: true}
        },
        {
          names: ['-b', '--body'],
          description: 'The value for the secret (reads from standard input if not specified)',
          input: {name: 'string', type: 'string', required: true}
        },
        {
          names: ['-e', '--env'],
          description: 'Set deployment environment secret',
          input: {name: 'environment', type: 'string', required: true}
        },
        {
          names: ['-f', '--env-file'],
          description: 'Load secret names and values from a dotenv-formatted file',
          input: {name: 'file', type: 'string', required: true}
        },
        {
          names: ['--no-store'],
          description: 'Print the encrypted, base64-encoded value instead of storing it on Github',
          input: null
        },
        {
          names: ['-o', '--org'],
          description: 'Set organization secret',
          input: {name: 'organization', type: 'string', required: true}
        },
        {
          names: ['-r', '--repos'],
          description: 'List of repositories that can access an organization or user secret',
          input: {name: 'repositories', type: 'string', required: true}
        },
        {
          names: ['-u', '--user'],
          description: 'Set a secret for your user',
          input: null
        },
        {
          names: ['-v', '--visibility'],
          description: 'Set visibility for an organization secret: {all|private|selected}',
          input: {name: 'string', type: 'string', required: true}
        }
      ]
    }
  },
  'gh ssh-key': {
    'gh ssh-key add': {
      usage: 'gh ssh-key add [<key-file>] [flags]',
      inputs: [{name: 'key-file', type: 'string', multiple: true, required: true}],
      description: 'Add an SSH key to your GitHub account',
      flags: [
        {
          names: ['-t', '--title'],
          description: 'Title for the new key',
          input: {name: 'string', type: 'string', required: true}
        }
      ]
    },
    'gh ssh-key delete': {
      usage: 'gh ssh-key delete <id> [flags]',
      inputs: [{name: 'id', type: 'string', required: true}],
      description: 'Delete an SSH key from your GitHub account',
      flags: [
        {
          names: ['-y', '--yes'],
          description: 'Skip the confirmation prompt',
          input: null
        }
      ]
    },
    'gh ssh-key list': {
      usage: 'gh ssh-key list',
      inputs: [],
      description: 'Lists SSH keys in your GitHub account'
    }
  },
  'gh status': {
    usage: 'gh status [flags]',
    inputs: [],
    description: 'The status command prints information about your work on GitHub across all the repositories you\'re subscribed to, including:',
    flags: [
      {
        names: ['-e', '--exclude'],
        description: 'Comma separated list of repos to exclude in owner/name format',
        input: {name: 'strings', type: 'string', required: true}
      },
      {
        names: ['-o', '--org'],
        description: 'Report status within an organization',
        input: {name: 'string', type: 'string', required: true}
      }
    ]
  }
}

declare const GhInfo: GhInfo;

export = GhInfo;