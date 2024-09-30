import Header from "@/components/header";
import {Outlet} from "react-router-dom";

const AppLayout = () => {
  return (
    <div>
      <main className="min-h-screen container">
        <Header />
        <Outlet />
      </main>
      <div className="p-1 text-center bg-gray-800 mt-10">
        Eaily Remember Your URLs...!
      </div>
    </div>
  );
};

export default AppLayout;
