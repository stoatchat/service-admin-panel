<div align="center">
<h1>
  Revolt Admin Panel
  
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

### Without Auth

Before getting started, you'll want to install/host:

- [Bun](https://bun.sh)
- [Git](https://git-scm.com)
- Revolt's backend. Either via Docker using [self-hosted](https://github.com/revoltchat/self-hosted) or directly from source using the [instructions in the backend repo](https://github.com/revoltchat/backend).

Now you can clone the project:

```console
git clone --recursive https://github.com/revoltchat/admin-panel
cd admin-panel
```

Then you'll need to install the dependencies:

```console
bun install
```

Then copy `.env.local.example` to `.env.local` and populate it with the relevant information.

You'll need to make sure you've got Revolt's backend running.

Now you'll need to generate `NEXTAUTH_SECRET`. You can do this automatically by running `npx auth secret`. Also set `NEXTAUTH_URL` to the location the panel will be hosted. For example, <http://localhost:3000>.

As we're running things without any auth, we can uncomment the line `NEXT_PUBLIC_AUTH_TYPE=none`.

Make sure you populate the `REDIS`, `MONGODB`, and `PLATFORM_ACCOUNT_ID` env vars with values for your Revolt instance.

You can then proceed to bring the panel up in a dev environment:

```console
corepack enable
bun run dev
```

### With Auth

Before getting started, you'll want to install/host:

- [Bun](https://bun.sh)
- [Git](https://git-scm.com)
- Revolt's backend. Either via Docker using [self-hosted](https://github.com/revoltchat/self-hosted) or directly from source using the [instructions in the backend repo](https://github.com/revoltchat/backend).
- [Authentik](https://docs.goauthentik.io/docs/install-config).

Now you can clone the project:

```console
git clone --recursive https://github.com/revoltchat/admin-panel
cd admin-panel
```

Then you'll need to install the dependencies:

```console
bun install
```

Then copy `.env.local.example` to `.env.local` and populate it with the relevant information.

You'll need to make sure you've got Revolt's backend and Authentik running.

Once logged into Authentik, create a new application with the Application Wizard. Set the name to "Admin Panel" and slug to `admin-panel`. Choose "OAuth2/OpenID Provider" as your provider. Set the "Authorization flow" to "default-provider-authorization-implicit-consent (Authorize Application)".

Copy the "Client ID" and "Client Secret" seen on the "Choose Provider" step and use them to populate `AUTHENTIK_ID` and `AUTHENTIK_SECRET` respectively.

You will also need to set `AUTHENTIK_ISSUER` to `http://localhost:9000/application/o/admin-panel/`. You may need to adapt that value to wherever your Authentik is hosted.

Next you must update `INTEGRATION_AUTHENTIK_ENDPOINT` to your Authentik API endpoint such as `http://localhost:9000/api/v3`. You will also need to create an API Token at <http://localhost:9000/if/admin/#/core/tokens> and use it to populate `INTEGRATION_AUTHENTIK_API_TOKEN`.

Now you'll need to generate `NEXTAUTH_SECRET`. You can do this automatically by running `npx auth secret`. Also set `NEXTAUTH_URL` to the location the panel will be hosted. For example, <http://localhost:3000>.

Make sure you populate the `REDIS`, `MONGODB`, and `PLATFORM_ACCOUNT_ID` env vars with values for your Revolt instance.

You can then proceed to bring the panel up in a dev environment:

```console
corepack enable
bun run dev
```

## License

The Revolt admin panel is generally licensed under the [GNU Affero General Public License v3.0](https://github.com/revoltchat/admin-panel/blob/master/LICENSE).
