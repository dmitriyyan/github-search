import { useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';

import { useLazyGetUserReposQuery, useSearchUsersQuery } from '@store/github/github.api';
import useDebounce from '@hooks/useDebounce';
import useAppActions from '@hooks/actions';
import { useAppSelector } from '@hooks/redux';
import UsersList from '@components/UsersList';
import Input from '@components/Input';
import RepoCardList from '@components/RepoCardList';

const Error = () => <p className="text-center text-red-600">Something went wrong...</p>;

export default function HomePage() {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const defaultSearch = useAppSelector((state) => state.github.username);

  const { register, watch, resetField, getValues } = useForm({
    defaultValues: {
      search: defaultSearch,
    },
  });

  const { setUsername } = useAppActions();

  useEffect(() => {
    return () => {
      setUsername(getValues('search'));
    };
  }, []);

  const [fetchRepos, { data: reposData, isFetching: isReposFetching, isError: isUserReposError }] =
    useLazyGetUserReposQuery();

  useEffect(() => {
    if (defaultSearch !== '') {
      fetchRepos(defaultSearch, true);
    }
  }, []);

  const ref = useRef<HTMLDivElement>(null);

  const search = watch('search');
  const debouncedSearch = useDebounce(search);

  const {
    isFetching: isUsersFetching,
    isError: isUsersError,
    data,
  } = useSearchUsersQuery(debouncedSearch, {
    skip: debouncedSearch.length < 3,
  });

  const handleUserClick = (username: string) => {
    fetchRepos(username);
    setIsDropdownVisible(false);
  };

  const handleInputFocus = () => {
    setIsDropdownVisible(true);
  };

  const handleClickOutside = (e: React.MouseEvent<HTMLDivElement>) => {
    if (ref.current && !ref.current.contains(e.target as HTMLElement)) {
      setIsDropdownVisible(false);
      e.stopPropagation();
    }
  };

  const handleInputReset = () => {
    resetField('search', { defaultValue: '' });
  };

  return (
    <div className="flex flex-1 flex-col items-center gap-5 pt-10" onClick={handleClickOutside}>
      {(isUsersError || isUserReposError) && <Error />}
      <div className="relative mx-auto w-[35rem]">
        <div ref={ref}>
          <Input
            {...register('search')}
            onFocus={handleInputFocus}
            type="text"
            placeholder="Search for Github username..."
            resetInput={handleInputReset}
          />
          {isDropdownVisible && (
            <div className="absolute top-10 left-0 max-h-[12.5rem] w-full overflow-y-auto bg-white shadow-md scrollbar-thin">
              {isUsersFetching ? (
                <p className="h-10 text-center leading-10">Loading...</p>
              ) : (
                <UsersList onUserClick={handleUserClick} users={data || []} />
              )}
            </div>
          )}
        </div>
        <div className="container">
          {isReposFetching && <p className="text-center">Repos are loading...</p>}
          {!isReposFetching && <RepoCardList repos={reposData || []} />}
        </div>
      </div>
    </div>
  );
}
