import type {
  DeepMap,
  FieldError,
  FieldValues,
  UseControllerProps,
} from 'react-hook-form';
import { useController } from 'react-hook-form';

import type { InputProps } from './Input';
import { Input } from './Input';

export type InputControlProps<T extends FieldValues> = InputProps &
  UseControllerProps<T>;

/**
 * react-hook-formラッパー
 * このComponentには、nameとcontrolとplaceholderのみをPropsとして渡す
 */
export const InputControl = <T extends FieldValues>({
  control,
  name,
  placeholder,
}: InputControlProps<T>) => {
  const {
    field: { onChange, ref, value },
    formState: { errors, isSubmitting },
  } = useController<T>({ name, control });

  return (
    <Input
      onChange={onChange}
      name={name}
      inputRef={ref}
      value={value}
      isSubmitting={isSubmitting}
      placeholder={placeholder}
      error={
        errors[name] &&
        `${(errors[name] as DeepMap<FieldValues, FieldError>).message}`
      }
    />
  );
};
