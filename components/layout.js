import Nav from "./nav";
export default function Layout({ children }) {
  return (
    <>
      <div className="flex relative flex-col sm:flex-row">
        <div className="    sm:w-full md:w-1/5 md:h-screen md:sticky top-0">
          <Nav />
        </div>
        <div className="md:w-4/5 py-6 sm:w-full"> {children}</div>
      </div>
    </>
  );
}
