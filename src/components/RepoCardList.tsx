import { Repo } from '@models/api';

type Props = {
  repos: Repo[];
};

export default function RepoCardList({ repos }: Props) {
  return (
    <>
      {repos.map((repo) => (
        <a
          key={repo.id}
          href={repo.html_url}
          target="_blank"
          rel="noreferrer"
          className="cursor-pointer"
        >
          <div className="mb-2 rounded border py-3 px-5 transition-all hover:bg-gray-100 hover:shadow-md">
            <h2 className="text-lg font-bold">{repo.full_name}</h2>
            <p className="text-sm">
              Forks: <span className="mr-2 font-bold">{repo.forks}</span>
              Watchers: <span className="font-bold">{repo.watchers}</span>
            </p>
            <p className="text-sm font-thin">{repo.description}</p>
          </div>
        </a>
      ))}
    </>
  );
}
