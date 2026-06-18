import type { Core } from '@strapi/strapi';

const register = ({ strapi }: { strapi: Core.Strapi }) => {
  strapi.customFields.register({
    name: 'timezone',
    type: 'text',
    plugin: 'timezone-select',
  });
};

export default register;
