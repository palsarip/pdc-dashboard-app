import Header from "./Header";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <div className="w-full h-full px-6">{children}</div>
    </>
  );
}
