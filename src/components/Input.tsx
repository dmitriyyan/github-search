import { UseFormRegister } from 'react-hook-form';

type Props = {
  register: UseFormRegister<{ search: string }>;
  placeholder: string;
};

export default function Input({ register, placeholder }: Props) {
  return (
    <input
      {...register('search')}
      type="text"
      className="mb-2 h-10 w-full border py-2 px-4"
      placeholder={placeholder}
    />
  );
}
