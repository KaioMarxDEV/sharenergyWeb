import Image from 'next/image';

export type User = {
  name: { title: string; first: string; last: string };
  email: string;
  login: {
    uuid: string;
    username: string;
    password: string;
    salt: string;
    md5: string;
    sha1: string;
    sha256: string;
  };
  cell: string;
  id: { name: string; value: string };
  picture: { large: string; medium: string; thumbnail: string };
  nat: string;
};

type Props = {
  user: User;
};

export default function RandomUser({ user }: Props) {
  return (
    <div className="flex w-full flex-col gap-3 rounded-md border border-black bg-slate-900 p-2 text-slate-300 sm:max-w-sm">
      <div className="flex gap-4 border-b-2 border-dashed border-slate-700 pb-2">
        <Image
          className="w-14 rounded-full"
          src={`${user.picture.medium}`}
          width={45}
          height={45}
          alt={`${user.name.first} ${user.name.last}`}
        />
        <div className="flex flex-col gap-1">
          <span className="text-xl font-bold">{`${user.name.first} ${user.name.last}`}</span>
          <span>@{user.login.username}</span>
        </div>
      </div>
      <div className="flex flex-col gap-1 pl-2 text-sm">
        <span className="flex gap-6">
          Email:
          <p>{user.email}</p>
        </span>
        <span className="flex gap-10">
          Cel:
          <p>{user.cell}</p>
        </span>
      </div>
    </div>
  );
}
