# ![Lezzmo Razzle Treact Natigation](banner.png)

<p>
  <a href="https://travis-ci.com/lezzmo/razzle-treact-natigation">
    <img alt="Build Status" src="https://img.shields.io/travis/lezzmo/razzle-treact-natigation.svg" target="_blank" />
  </a>
  <a href="https://github.com/lezzmo/razzle-treact-natigation#readme">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" target="_blank" />
  </a>
  <a href="https://github.com/lezzmo/razzle-treact-natigation/graphs/commit-activity">
    <img alt="Maintenance" src="https://img.shields.io/badge/Maintained%3F-yes-green.svg" target="_blank" />
  </a>
  <a href="https://github.com/lezzmo/razzle-treact-natigation/blob/master/LICENSE">
    <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg" target="_blank" />
  </a>
</p>

> [Typescript React Native template](https://github.com/react-native-community/react-native-template-typescript) with Server Side Rendering (SSR) using [Razzle](https://github.com/jaredpalmer/razzle) and routing + navigation with [React Navigation](https://github.com/react-navigation).

## 🌟 Features

- Consistent with the default React Native template
- Target Android, iOS and Web with SSR
- Use [Typescript](https://github.com/microsoft/TypeScript) out of the box
- Use ```.web.js``` or  ```.web.tsx``` file
- Use a new ```.ssr.tsx``` or ```.ssr.js``` file extension for SSR-only
- Working [React Navigation](https://github.com/react-navigation)
- Working [Razzle](https://github.com/jaredpalmer/razzle) with SSR
- Elegant usage directly within the [React Native CLI](https://github.com/react-native-community/cli)
- Inspired by [a sample](https://github.com/jaredpalmer/razzle) by @jaredpalmer
- Based on the minimalistic [`react-native-template-typescript`](https://github.com/react-native-community/react-native-template-typescript)

## ⏩ Usage

### Note on the legacy CLI
There seems to be quite some confusion about the legacy CLI. This template only works with the new CLI. Make sure you have uninstalled the legacy `react-native-cli` first (`npm uninstall -g react-native-cli`), for the command to work. If you wish to not use `npx`, you can also install the new CLI globally (`npm i -g @react-native-community/cli` or `yarn global add @react-native-community/cli`).

Further information can be found here: https://github.com/react-native-community/cli#about

### `react-native@0.62.0` or higher

```sh
# Setup the template
npx react-native init MyApp --template @lezzmo/razzle-treact-natigation

# Run web
yarn web
npm run web

# Run Android
yarn android
npm run android

# Run iOS
yarn ios
npm run ios
```

## 🔍 What's wrong with the name?

**No, it's not a typo**. It's properly named. The name comes from the weird combination of:

* **Razzle**
* (**T**)ypescript
* (**React Na**)tive
* React Naviga(**tion**)

I know. Creative, uh?

## 💻 Contributing

Contributions are very welcome. Please check out the [contributing document](CONTRIBUTING.md).

## 📚 License

This project is [MIT](LICENSE) licensed.

> Copyright (c) 2019 Emin Khateeb, Sinuhé Coronel