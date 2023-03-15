import React from 'react';
import PropTypes from 'prop-types';
import { Combobox, ComboboxOption } from '@strapi/design-system/Combobox';
import {Stack } from '@strapi/design-system/Stack';
import { Field, FieldLabel, FieldError, FieldHint } from '@strapi/design-system/Field';
import { useIntl } from 'react-intl';
import getTrad from '../../utils/getTrad';
import timezones from '../../timezones.json';

const TimezoneSelect = ({
    value,
    onChange,
    name,
    intlLabel,
    labelAction,
    required,
    attribute,
    description,
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
            hint={description && formatMessage(description)}
        >
            <Stack spacing={1}>
                <FieldLabel action={labelAction}>
                    {formatMessage(intlLabel)}
                </FieldLabel>

                <Combobox
                    placeholder={placeholder && formatMessage(placeholder)}
                    aria-label={formatMessage(intlLabel)}
                    aria-disabled={disabled}
                    disabled={disabled}
                    value={isValidValue ? value : null}
                    onChange={timezone => onChange({ target: { name, value: timezone, type: attribute.type }})}
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

TimezoneSelect.defaultProps = {
    description: null,
    disabled: false,
    error: null,
    labelAction: null,
    required: false,
    value: '',
};

TimezoneSelect.propTypes = {
    intlLabel: PropTypes.object.isRequired,
    onChange: PropTypes.func.isRequired,
    attribute: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.object,
    disabled: PropTypes.bool,
    error: PropTypes.string,
    labelAction: PropTypes.object,
    required: PropTypes.bool,
    value: PropTypes.string,
};

export default TimezoneSelect;
