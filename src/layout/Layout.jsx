import Navbar from "@/components/navbar/navbar";
import { Outlet } from "react-router";

function Layout() {
  return (
    <main className="container">
      <Navbar />
      <hr />
      <Outlet />
    </main>
  );
}
export default Layout;
