import React from 'react';

type Props = {
  name: string;
  type: React.HTMLInputTypeAttribute;
  placeholder: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
};

export default React.forwardRef<HTMLInputElement, Props>(function Input(
  { name, type, onChange, onBlur, placeholder },
  ref
) {
  return (
    <input
      type={type}
      name={name}
      onChange={onChange}
      onBlur={onBlur}
      placeholder={placeholder}
      ref={ref}
      className="mb-2 h-10 w-full border py-2 px-4"
    />
  );
});
