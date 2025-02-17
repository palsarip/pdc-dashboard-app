import Header from "./Header";
import Navbar from "./Navbar";
// import MainSidebar from "./MainSidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <div className="min-h-screen p-14 text-[#F2F3F5]">
        <Navbar />
        {/* <MainSidebar /> */}
        {children}
      </div>
    </>
  );
}
