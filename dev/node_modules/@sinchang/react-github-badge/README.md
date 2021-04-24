# react-github-badge

> Inspired by [vue-github-badge](https://github.com/egoist/vue-github-badge)

[![NPM version](https://img.shields.io/npm/v/@sinchang/react-github-badge.svg?style=flat)](https://npmjs.com/package/@sinchang/react-github-badge) 
[![NPM downloads](https://img.shields.io/npm/dm/@sinchang/react-github-badge.svg?style=flat)](https://npmjs.com/package/@sinchang/react-github-badge)

## Demo

[see here](https://react-github-badge.netlify.com)

## Install

```bash
yarn add @sinchang/react-github-badge
```

## Usage

```react
import GithubBadge from '@sinchang/react-github-badge'

...

render () {
  return (
    <GithubBadge
      url='sinchang/react-github-badge'
    />
  )
}
```

## API

### Props

#### slug

Type: `string`<br>
Required: `true`

GitHub slug (owner/repo)

#### width/height

Type: `number`<br>
Default: `36`

width/height of svg icon

#### fill

Type: `string`<br>
Default: `black`

The `fill` color of svg icon, you can set it to `currentColor` to inherit from parent element.

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D


## Author

**react-github-badge** © [sinchang](https://github.com/sinchang), Released under the [MIT](./LICENSE) License.<br>
Authored and maintained by sinchang with help from contributors ([list](https://github.com/sinchang/react-github-badge/contributors)).

> [sinchang.me](https://sinchang.me) · GitHub [@sinchang](https://github.com/sinchang) · Twitter [@sinchangwen](https://twitter.com/sinchangwen)