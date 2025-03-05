# Strapi plugin timezone-select

A strapi custom field for selecting any timezone based on the [moment.js](https://momentjs.com/) timezones.

## Installation

To install this plugin, you need to add an NPM dependency to your Strapi application:

```sh
# Using yarn
yarn add strapi-plugin-timezone-select

# Using npm
npm install strapi-plugin-timezone-select

# Using pnpm
pnpm add strapi-plugin-timezone-select
```

Then, you'll need to build your admin panel:

```sh
# Using yarn
yarn build

# Using npm
npm run build

# Using pnpm
pnpm build
```

## Usage

After installation you will find the timezone-select at the custom fields section of the content-type builder.

![timezone select screenshot](/assets/timezone-select-custom-field.png)

Now you can select any country from the list. The Alpha-2 code of the selected timezone is stored in the database.

![timezone select screenshot](/assets/timezone-select.png)

## Development

### Start watch mode on the plugin

To start working on your plugin

- Open a terminal
- Navigate to your plugin folder `strapi-plugin-timezone-select`
- Run command

  ```sh
  # Using yarn
  yarn watch:link

  # Using npm
  npm run watch:link

  # Using pnpm
  pnpm watch:link
  ```

### Link the plugin to your Strapi project

To link the plugin to your Strapi project

- Open a terminal
- Navigate to your Strapi project
- Run command

  ```sh
  # Using yarn
  yarn dlx yalc add --link strapi-plugin-timezone-select
  yarn install

  # Using npm
  npx yalc add strapi-plugin-timezone-select
  npx yalc link strapi-plugin-timezone-select
  npm install

  # Using pnpm
  pnpm dlx yalc add --link strapi-plugin-timezone-select
  pnpm install

  ```

## Related

This plugin is inspired by Chris Ebert's [strapi-plugin-country-select](https://github.com/ChrisEbert/strapi-plugin-country-select)
