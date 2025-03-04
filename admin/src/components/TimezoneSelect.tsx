import { Combobox, ComboboxOption } from '@strapi/design-system/Combobox';
import { Field, FieldError, FieldHint, FieldLabel } from '@strapi/design-system/Field';
import { Stack } from '@strapi/design-system/Stack';
import { FieldValue, InputProps } from '@strapi/strapi/admin';
import { useIntl } from 'react-intl';
import timezones from '../timezones.json';
import { getTranslation } from '../utils/getTranslation';

type TimezoneSelectProps = InputProps & FieldValue & {
    labelAction?: React.ReactNode;
};

const TimezoneSelect: React.FC<TimezoneSelectProps> = ({
    value,
    onChange,
    name,
    label,
    labelAction,
    required,
    hint,
    placeholder,
    disabled,
    error,
}) => {
    const { formatMessage } = useIntl();
    const isValidValue = value && timezones.includes(value);

    return (
        <Field
            name={name}
            id={name}
            required={required}
            hint={hint}
            error={!isValidValue ? formatMessage({ id: getTranslation('unsupported-timezone') }, { timezone: value }) : error}
        >
            <Stack spacing={1}>
                <FieldLabel action={labelAction}>{label}</FieldLabel>
                <Combobox
                    placeholder={placeholder}
                    aria-label={label}
                    aria-disabled={disabled}
                    disabled={disabled}
                    value={isValidValue ? value : null}
                    onChange={(timezone: string) => onChange(name, timezones.includes(timezone) ? timezone : null)}
                >
                    {timezones.map((timezone) => (
                        <ComboboxOption value={timezone} key={timezone}>{timezone}</ComboboxOption>
                    ))}
                </Combobox>

                <FieldHint />
                <FieldError />
            </Stack>
        </Field>
    )
}

export default TimezoneSelect;
