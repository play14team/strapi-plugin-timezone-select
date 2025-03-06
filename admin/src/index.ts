import { getTranslation } from './utils/getTranslation';
import { PLUGIN_ID } from './pluginId';
import { Initializer } from './components/Initializer';
import { PluginIcon } from './components/PluginIcon';
import TimezoneSelectIcon from './components/TimezoneSelectIcon';

export default {
  register(app: any) {

    app.customFields.register({
      name: 'timezone',
      pluginId: PLUGIN_ID,
      type: 'string',
      icon: TimezoneSelectIcon,
      intlLabel: {
        id: getTranslation('label'),
        defaultMessage: 'Time zone',
      },
      intlDescription: {
        id: getTranslation('description'),
        defaultMessage: 'Select any time zone',
      },
      components: {
        Input: async () => import('./components/TimezoneSelect'),
      },
      options: {},
    });


    app.addMenuLink({
      to: `plugins/${PLUGIN_ID}`,
      icon: PluginIcon,
      intlLabel: {
        id: `${PLUGIN_ID}.plugin.name`,
        defaultMessage: PLUGIN_ID,
      },
      Component: async () => {
        const { App } = await import('./pages/App');

        return App;
      },
    });

    app.registerPlugin({
      id: PLUGIN_ID,
      initializer: Initializer,
      isReady: false,
      name: PLUGIN_ID,
    });
  },

  async registerTrads({ locales }: { locales: string[] }) {
    return Promise.all(
      locales.map(async (locale) => {
        try {
          const { default: data } = await import(`./translations/${locale}.json`);

          return { data, locale };
        } catch {
          return { data: {}, locale };
        }
      })
    );
  },
};
