import { Combobox, ComboboxOption, Field } from '@strapi/design-system';
import { Clock } from '@strapi/icons';
import { useField, type FieldValue, type InputProps } from '@strapi/strapi/admin';
import React from 'react';
import { useIntl } from 'react-intl';
import { getTranslation } from '../utils/getTranslation';

const timezones = Intl.supportedValuesOf('timeZone'); // Outputs: ["Africa/Abidjan", "Africa/Accra", ...]
const currentTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;

type TimezoneSelectProps = InputProps & FieldValue;

const TimezoneSelect = React.forwardRef<HTMLDivElement, TimezoneSelectProps>(
  ({
    name,
    value,
    hint,
    required,
    disabled,
    error,
  }, forwardedRef) => {
    const { formatMessage } = useIntl();
    const field = useField(name);

    return (
      <Field.Root
        id={name}
        name={name}
        error={error}
        required={required}
        hint={hint}
      >
        <Field.Label>
          {name}
        </Field.Label>
        <Combobox
          placeholder={formatMessage({
            id: getTranslation('placeholder'),
            defaultMessage: 'Select a time zone or start typing the name of a city',
          })}
          aria-label={formatMessage({
            id: getTranslation('aria-label'),
            defaultMessage: 'Select a time zone',
          })}
          aria-disabled={disabled}
          disabled={disabled}
          startIcon={<Clock />}
          value={value ?? currentTimeZone}
          clearLabel="Clear"
          onClear={() => { field.onChange(name, "") }}
          onChange={(timezone: string) => { field.onChange(name, timezone) }}
          autocomplete={{ type: 'list', filter: 'contains' }}
        >
          {timezones.map((timezone) => (
            <ComboboxOption key={timezone} value={timezone}>{timezone}</ComboboxOption>
          ))}
        </Combobox>
        <Field.Error />
        <Field.Hint />
      </Field.Root>
    )
  })

export default TimezoneSelect;
