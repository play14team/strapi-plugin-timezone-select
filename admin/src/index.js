import { prefixPluginTranslations } from '@strapi/helper-plugin';
import pluginId from './pluginId';
import TimezoneSelectIcon from './components/TimezoneSelectIcon';
import getTrad from './utils/getTrad';

export default {
    register(app) {
        app.customFields.register({
            name: 'timezone',
            pluginId: 'timezone-select',
            type: 'string',
            icon: TimezoneSelectIcon,
            intlLabel: {
                id: getTrad('timezone-select.label'),
                defaultMessage: 'Timezone',
            },
            intlDescription: {
                id: getTrad('timezone-select.description'),
                defaultMessage: 'Select any timezone',
            },
            components: {
                Input: async () =>
                    import('./components/TimezoneSelect'),
            },
            options: {
                advanced: [
                    {
                        sectionTitle: {
                            id: 'global.settings',
                            defaultMessage: 'Settings',
                        },
                        items: [
                            {
                                name: 'required',
                                type: 'checkbox',
                                intlLabel: {
                                    id: 'form.attribute.item.requiredField',
                                    defaultMessage: 'Required field',
                                },
                                description: {
                                    id: 'form.attribute.item.requiredField.description',
                                    defaultMessage: "You won't be able to create an entry if this field is empty",
                                },
                            },
                        ],
                    },
                ],
            },
        });
    },

    async registerTrads({ locales }) {
        const importedTrads = await Promise.all(
            locales.map((locale) => {
                return Promise.all([
                    import(`./translations/${locale}.json`)                  
                ])
                .then(([pluginTranslations, timezoneTranslations]) => {
                    countries.registerLocale(timezoneTranslations.default);

                    return {
                        data: {
                            ...prefixPluginTranslations(pluginTranslations.default, pluginId)
                        },
                        locale,
                    };
                })
                .catch(() => {
                    return {
                        data: {},
                        locale,
                    };
                });
            })
        );
        return Promise.resolve(importedTrads);
    },
};
