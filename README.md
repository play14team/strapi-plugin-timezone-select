# Strapi plugin timezone-select

A Strapi custom field to select a Olson/IANA time zone.

Examples:

- Africa/Ndjamena
- America/New_York,
- Asia/Bangkok,
- Europe/Paris,
- Oceania/Sydney

## Installation

To install this plugin, you need to add an NPM dependency to your Strapi application:

```
# Using Yarn
yarn add strapi-plugin-timezone-select

# Or using NPM
npm install strapi-plugin-timezone-select
```

Then, you'll need to build your admin panel:

```
# Using Yarn
yarn build

# Or using NPM
npm run build
```

## Usage

After installation you will find the timezone-select at the custom fields section of the content-type builder.

![timezone select screenshot](./timezone-select-custom-field.png)

Now you can select any country from the list. The Alpha-2 code of the selected timezone is stored in the database.

![timezone select screenshot](./timezone-select.png)

## Related

This plugin is inspired by Chris Ebert's [strapi-plugin-country-select](https://github.com/ChrisEbert/strapi-plugin-country-select)
