import axios from 'axios';
import {
  ArrowCircleLeft,
  ArrowCircleRight,
  MagnifyingGlass,
  SpinnerGap,
} from 'phosphor-react';
import { FormEvent, useEffect, useState } from 'react';
import RandomUser, { User } from '../components/RandomUser';

export default function Dashboard() {
  const [argToSearch, setArgToSearch] = useState('');
  const [page, setPage] = useState(1);
  const [users, setUsers] = useState<User[]>([]);

  async function handlePrevUsersPage() {
    setPage(page - 1);

    const response = await axios.get(
      `https://randomuser.me/api?page=${
        page - 1
      }&format=json&nat=BR&results=15&seed=sharenergy&exc=location,gender,phone,dob,registered`
    );

    const responseObject = response.data;

    setUsers(responseObject.results);

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }

  async function handleNextUsersPage() {
    setPage(page + 1);

    const response = await axios.get(
      `https://randomuser.me/api?page=${
        page + 1
      }&format=json&nat=BR&results=15&seed=sharenergy&exc=location,gender,phone,dob,registered`
    );

    const responseObject = response.data;

    setUsers(responseObject.results);

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }

  async function LoadRandomUsers() {
    const response = await axios.get(
      `https://randomuser.me/api?page=${page}&format=json&nat=BR&results=15&seed=sharenergy&exc=location,gender,phone,dob,registered`
    );

    const responseObject = response.data;

    setUsers(responseObject.results);
  }

  useEffect(() => {
    async function FirstLoadRandomUsers() {
      const response = await axios.get(
        `https://randomuser.me/api?page=1&format=json&nat=BR&results=15&seed=sharenergy&exc=location,gender,phone,dob,registered`
      );

      const responseObject = response.data;

      setUsers(responseObject.results);
    }

    FirstLoadRandomUsers();
  }, []);

  function searchUser(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (argToSearch === '') LoadRandomUsers();
    console.log(page);
    const usersFound = users.filter((user) => {
      if (
        user.name.first.toLowerCase().includes(argToSearch.toLowerCase()) ||
        user.name.last.toLowerCase().includes(argToSearch.toLowerCase())
      ) {
        return user;
      }
      if (user.email.toLowerCase().includes(argToSearch.toLowerCase())) {
        return user;
      }
      if (
        user.login.username.toLowerCase().includes(argToSearch.toLowerCase())
      ) {
        return user;
      }
    });

    setUsers(usersFound);
  }

  // CONDITIONAL TO SHOW TEXT WHILE LOADING USERS
  if (users.length === 0) {
    return (
      <h1 className="flex flex-col items-center gap-2 text-slate-100">
        Carregando usuários
        <SpinnerGap className="animate-spin text-slate-100" size={32} />
      </h1>
    );
  }

  return (
    <div className="flex min-h-screen">
      <div className="w-full bg-slate-800 px-4 pt-16 md:pl-16">
        {/* SEARCH BAR */}
        <div className=" mx-auto mt-4 max-w-lg rounded-lg bg-slate-900">
          <form onSubmit={searchUser} className="flex">
            <input
              onChange={(e) => setArgToSearch(e.target.value)}
              className="flex flex-1 rounded-l-lg px-2 py-4 text-base outline-none placeholder:text-sm placeholder:text-gray-500"
              type="text"
              placeholder="Busque por nome, email, username"
            />
            <button
              type="submit"
              className="gray flex items-center gap-2 border-l py-4 px-4 text-share-blue sm:after:content-['Buscar']"
            >
              <MagnifyingGlass size={24} />
            </button>
          </form>
        </div>

        {/* RANDOM USERS */}
        <div className="my-6 grid auto-cols-max grid-cols-1 justify-items-center gap-3  sm:px-6 md:grid-cols-2 xl:grid-cols-3">
          {users.map((user) => (
            <RandomUser user={user} key={user.id.value} />
          ))}
        </div>

        {/* PAGINATION BUTTONS */}
        <div className="mb-10 flex items-center justify-center gap-6 text-slate-300">
          <button
            className="active:text-share-blue"
            onClick={handlePrevUsersPage}
          >
            <ArrowCircleLeft size={44} />
          </button>

          <span>{page}º página</span>

          <button
            className="active:text-share-blue"
            onClick={handleNextUsersPage}
          >
            <ArrowCircleRight size={44} />
          </button>
        </div>
      </div>
    </div>
  );
}
