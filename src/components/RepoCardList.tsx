import useAppActions from '@hooks/actions';
import { useAppSelector } from '@hooks/redux';
import { FavouriteRepo } from '@store/github/github.slice';
import { Repo } from '@models/api';

type Props = {
  repos: Repo[] | FavouriteRepo[];
};

export default function RepoCardList({ repos }: Props) {
  const { favourites } = useAppSelector((state) => state.github);
  const favouritesIds = favourites.map((fav) => fav.id);

  const { addFavourite, removeFavourite } = useAppActions();

  const handleFavouriteClick = (repo: FavouriteRepo) => {
    if (favouritesIds.includes(repo.id)) {
      removeFavourite(repo.id);
    } else {
      addFavourite(repo);
    }
  };

  return (
    <>
      {repos.map((repo) => (
        <div
          key={repo.id}
          className="mb-2 rounded border py-3 px-5 transition-all hover:bg-gray-100 hover:shadow-md"
        >
          <a href={repo.html_url} target="_blank" rel="noreferrer" className="cursor-pointer">
            <h2 className="text-lg font-bold">{repo.full_name}</h2>
            <p className="text-sm">
              Forks: <span className="mr-2 font-bold">{repo.forks}</span>
              Watchers: <span className="font-bold">{repo.watchers}</span>
            </p>
            <p className="mb-2 text-sm font-thin">{repo.description}</p>
          </a>
          <button
            className="rounded py-1 px-2 transition-all hover:shadow-md"
            onClick={() => handleFavouriteClick(repo)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className={`h-5 w-5 transition-all ${
                favouritesIds.includes(repo.id) ? 'fill-yellow-300 stroke-yellow-300' : ''
              }`}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"
              />
            </svg>
          </button>
        </div>
      ))}
    </>
  );
}
