import { User } from '@models/api';

type Props = {
  users: User[];
};

export default function UsersList({ users }: Props) {
  return (
    <ul className="list-none">
      {users.map((user) => (
        <li
          className="cursor-pointer py-2 px-4 transition-colors hover:bg-gray-500 hover:text-white"
          key={user.id}
        >
          {user.login}
        </li>
      ))}
    </ul>
  );
}
