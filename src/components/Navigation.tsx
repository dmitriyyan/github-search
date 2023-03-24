import { NavLink } from 'react-router-dom';

export default function Navigation() {
  return (
    <nav className="flex h-12 items-center justify-between rounded-b-md bg-gray-500 px-5 text-white shadow-md">
      <h3 className="font-bold">Github Search</h3>
      <span className="flex gap-2">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/favourites">Favourites</NavLink>
      </span>
    </nav>
  );
}
