import { Initializer } from './components/Initializer';
import TimezoneSelectIcon from './components/TimezoneSelectIcon';
import { PLUGIN_ID } from './pluginId';
import { getTranslation } from './utils/getTranslation';

export default {
  register(app: any) {
    app.customFields.register({
      name: 'timezone',
      plugnId: PLUGIN_ID,
      type: 'string',
      icon: TimezoneSelectIcon,
      intlLabel: {
        id: getTranslation('label'),
        defaultMessage: 'Time zone',
      },
      intlDescription: {
        id: getTranslation('description'),
        defaultMessage: 'Select a time zone',
      },
      components: {
        Input: async () => import('./components/TimezoneSelect'),
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
