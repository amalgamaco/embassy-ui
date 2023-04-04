# Troubleshooting

These are some common issues you may run into while contributing to the project. If you encounter something that is not listed here, please [file an issue in GitHub](https://github.com/amalgamaco/embassy-ui/issues/new).

## Example mobile app

### symbol(s) not found for architecture arm64

If you encounter this error message when building the example mobile app for iOS, then you can try the following:

1 - Open Xcode with Rosetta.

2 - Clean the Build folder.

3 - Re-run the project.

If that doesn't work you can also follow [this discussion in Stack Overflow](https://stackoverflow.com/questions/71597475/symbols-not-found-for-architecture-arm64-xcode).
