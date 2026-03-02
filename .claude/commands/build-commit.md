Run npm build and commit the output.

Run `git status --short` and check for any changes (staged or unstaged).

If there are any changes, stop and tell the user:
"There are differences, please commit and try again."
Show the output of `git status --short`.

If there are no changes, run:
```bash
npm run build && git add -A && git commit -m "build"
```

Report whether the command succeeded or failed.
