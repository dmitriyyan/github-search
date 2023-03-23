import { useForm } from 'react-hook-form';

import { useSearchUsersQuery } from '@store/github/github.api';
import useDebounce from '@hooks/useDebounce';
import UsersList from '@/components/UsersList';
import Input from '@/components/Input';

const Error = () => <p className="text-center text-red-600">Something went wrong...</p>;

export default function HomePage() {
  const { register, watch } = useForm({
    defaultValues: {
      search: '',
    },
  });

  const search = watch('search');
  const debouncedSearch = useDebounce(search);

  const { isFetching, isError, data } = useSearchUsersQuery(debouncedSearch, {
    skip: debouncedSearch.length < 3,
  });

  const isDropdownVisible = debouncedSearch.length > 3 && data?.length !== 0;
  return (
    <div className="mx-auto flex h-screen w-screen flex-col items-center gap-5 pt-10">
      {isError && <Error />}
      <div className="relative w-[35rem]">
        <Input register={register} placeholder="Search for Github username..." />
        {isDropdownVisible && (
          <div className="absolute top-10 left-0 max-h-[12.5rem] w-full overflow-y-auto  bg-white shadow-md">
            {isFetching ? (
              <p className="h-10 text-center leading-10">Loading...</p>
            ) : (
              <UsersList users={data || []} />
            )}
          </div>
        )}
      </div>
    </div>
  );
}
