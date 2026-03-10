<div align="center">
<h1>
  Stoat Admin Panel
  
  [![Stars](https://img.shields.io/github/stars/revoltchat/admin-panel?style=flat-square&logoColor=white)](https://github.com/revoltchat/admin-panel/stargazers)
  [![Forks](https://img.shields.io/github/forks/revoltchat/admin-panel?style=flat-square&logoColor=white)](https://github.com/revoltchat/admin-panel/network/members)
  [![Pull Requests](https://img.shields.io/github/issues-pr/revoltchat/admin-panel?style=flat-square&logoColor=white)](https://github.com/revoltchat/admin-panel/pulls)
  [![Issues](https://img.shields.io/github/issues/revoltchat/admin-panel?style=flat-square&logoColor=white)](https://github.com/revoltchat/admin-panel/issues)
  [![Contributors](https://img.shields.io/github/contributors/revoltchat/admin-panel?style=flat-square&logoColor=white)](https://github.com/revoltchat/admin-panel/graphs/contributors)
  [![Licence](https://img.shields.io/github/license/revoltchat/admin-panel?style=flat-square&logoColor=white)](https://github.com/revoltchat/admin-panel/blob/main/LICENCE)
</h1>
Dashboard containing tools to handle platform administration
</div>
<br/>

> [!IMPORTANT]
> This admin panel is very much a work in progress, and support won't be offered unless you contribute financially or via code, as we are currently very much resource constrained.

## Development Guide

Before contributing, make yourself familiar with [our contribution guidelines](https://developers.revolt.chat/contrib).

Before getting started, you'll want to install:

- Bun
- Docker
- Git

> A **default.nix** is available for Nix users!
> Just run `nix-shell` and continue.

Now you can clone and run the project:

```bash
git clone --recursive https://github.com/revoltchat/admin-panel
cd admin-panel
bun install
```

Then copy `.env.local.example` to `.env.local` and fill it out with the relevant information.

```bash
bun run dev
```

## Deployment Guide

```bash
bun install
```

Then copy `.env.local.example` to `.env.local` and fill it out with the relevant information.

```bash
bun run build
bun run start
```

## License

The Stoat admin panel is generally licensed under the [GNU Affero General Public License v3.0](https://github.com/revoltchat/admin-panel/blob/master/LICENSE).
