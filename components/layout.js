import Nav from "./nav";
export default function Layout({ children }) {
  return (
    <>
      <div className="flex relative flex-col sm:flex-row">
        <div className=" sm:w-full md:w-1/5 md:min-w-270  md:h-screen md:sticky top-0  ">
          <Nav />
        </div>
        <div className="w-full sm:w-4/5 py-6 "> {children}</div>
      </div>
    </>
  );
}
