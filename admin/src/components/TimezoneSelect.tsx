import { Field, SingleSelect, SingleSelectOption } from '@strapi/design-system';
import { useEffect, useState } from 'react';
import { useIntl } from 'react-intl';
import moment from 'moment-timezone';

export const TimezoneSelect = ({
    value,
    onChange,
    name,
    intlLabel,
    error,
    }: {
      value: string | null;
      onChange: (name: string, value: string | null) => void;
      name: string;
      intlLabel: { id: string; defaultMessage: string };
      error?: string;
    }) => {
  const { formatMessage } = useIntl();
  const label = formatMessage(intlLabel);
  const errorMessage = error ? formatMessage({ id: error, defaultMessage: error }) : '';

  const [timezones, setTimezones] = useState<Array<{ value: string; label: string }>>([]);

  useEffect(() => {
    const zones = moment.tz.names().map((zone) => ({
      value: zone,
      label: `${zone} (${moment.tz(zone).format('Z')})`,
    }));
    setTimezones(zones.sort((a, b) => a.label.localeCompare(b.label)));
  }, []);

  return (
    <Field.Root error={errorMessage} name={name}>
      <Field.Label>{label}</Field.Label>
      <SingleSelect 
        onChange={(timezone: string) => onChange(name, timezones.find((tz) => tz.value === timezone)?.value || null)}
        onClear={() => onChange(name, null)}
        value={value || ''}
      >
        {timezones.map(({ value, label }) => (
          <SingleSelectOption key={value} value={value}>
            {label}
          </SingleSelectOption>
        ))}
      </SingleSelect>
      <Field.Error />
    </Field.Root>
  );
};
