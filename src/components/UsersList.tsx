import { User } from '@models/api';
import { useLazyGetUserReposQuery } from '@store/github/github.api';

type Props = {
  users: User[];
  onUserClick: (username: string) => void;
};

export default function UsersList({ users, onUserClick }: Props) {
  return (
    <ul className="list-none">
      {users.map((user) => (
        <li
          key={user.id}
          onClick={() => onUserClick(user.login)}
          className="cursor-pointer py-2 px-4 transition-colors hover:bg-gray-500 hover:text-white"
        >
          {user.login}
        </li>
      ))}
    </ul>
  );
}
