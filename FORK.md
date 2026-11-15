# Fork notes

This is a long-lived fork of [getpaseo/paseo](https://github.com/getpaseo/paseo).

## Branches

- `main` mirrors `upstream/main`. Never commit here. Update with `gh repo sync d0zingcat/paseo --branch main`.
- `custom` is `main` plus the patches below. Rebase it onto an upstream release tag, not every upstream commit.

## Rules

- One patch per commit, one topic per patch, so a patch can be dropped when upstream ships the same fix.
- A community PR comes in by cherry-pick. Name the PR in the commit message.
- Keep protocol changes additive and optional. See `docs/protocol-compatibility.md`.

## Patches

| Patch                                                 | Why                                                    | Drop when                                                                                                                                   |
| ----------------------------------------------------- | ------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------- |
| Answer terminal color queries with the client's theme | Light theme shows dark Codex input on iOS              | [#2795](https://github.com/getpaseo/paseo/issues/2795) is fixed; upstream candidate is [#4345](https://github.com/getpaseo/paseo/pull/4345) |
| `fork` app variant                                    | Separate bundle ID, name and Expo owner for TestFlight | Never                                                                                                                                       |

## Building the iOS app

Set these before `eas build --profile fork`:

- `EXPO_OWNER`: defaults to `d0zingcat`.
- `EAS_PROJECT_ID`: defaults to the fork's EAS project.
- `PASEO_FORK_BUNDLE_ID`: defaults to `com.d0zingcat.paseo`.
- `ascAppId` in `packages/app/eas.json` under `submit.fork.ios`, once the app exists in App Store Connect.

Push notifications need your own Firebase files at `packages/app/.secrets/GoogleService-Info.fork.plist`; the build skips them if the files are missing.
