Read all spec files in `.claude/specs/` (excluding `_template.md`).

For each spec, check if it has any unchecked requirements (`[ ]`).

Display specs that have at least one `[ ]` as a markdown table, sorted alphabetically by filename:

| Spec | Unchecked Requirements |
|------|----------------------|
| name | requirement 1, requirement 2, ... |

If all specs are complete, say "All specs are done."
