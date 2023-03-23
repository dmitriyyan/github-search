import React from 'react';

type Props = {
  name: string;
  type: React.HTMLInputTypeAttribute;
  placeholder: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
  resetInput?: () => void;
};

export default React.forwardRef<HTMLInputElement, Props>(function Input(
  { name, type, onChange, onBlur, onFocus, placeholder, resetInput },
  ref
) {
  return (
    <div className="relative mb-2">
      <input
        type={type}
        name={name}
        onChange={onChange}
        onBlur={onBlur}
        onFocus={onFocus}
        placeholder={placeholder}
        ref={ref}
        className="h-10 w-full border py-2 px-4"
      />
      <button
        className="absolute top-1/2 right-0 -translate-y-1/2 text-gray-300 hover:text-gray-500"
        onClick={resetInput}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="h-6 w-6"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
  );
});
