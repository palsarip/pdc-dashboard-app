import Header from "./Header";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <Sidebar>
        {/* <Navbar /> */}
        {children}
      </Sidebar>
    </>
  );
}
