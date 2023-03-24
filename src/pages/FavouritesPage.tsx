import { useAppSelector } from '@/hooks/redux';

export default function FavouritesPage() {
  const { favourites } = useAppSelector((state) => state.github);

  if (favourites.length === 0) {
    return <p className="text-center">No items</p>;
  }

  return (
    <div className="flex flex-1 flex-col items-center gap-5 pt-10">
      <ul className="list-none">
        {favourites.map((fav) => (
          <li key={fav}>
            <a
              target="_blank"
              rel="noreferrer"
              href={fav}
              className="text-blue-600 underline visited:text-purple-600 hover:text-blue-800"
            >
              {fav}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
