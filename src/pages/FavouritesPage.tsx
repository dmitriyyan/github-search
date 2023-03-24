import RepoCardList from '@/components/RepoCardList';
import { useAppSelector } from '@/hooks/redux';

export default function FavouritesPage() {
  const { favourites } = useAppSelector((state) => state.github);

  if (favourites.length === 0) {
    return <p className="text-center">No items</p>;
  }

  return (
    <div className="flex flex-1 flex-col items-center gap-5 pt-10">
      <ul className="list-none">
        <RepoCardList repos={favourites} />
      </ul>
    </div>
  );
}
