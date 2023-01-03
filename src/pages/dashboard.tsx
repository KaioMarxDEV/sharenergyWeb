import SideBar from '../components/SiderBar';

export default function Dashboard() {
  return (
    <div className="flex min-h-screen">
      <SideBar />
      <div className="ml-16 w-full">dash</div>
    </div>
  );
}
