import Nav from "./nav";
export default function Layout({ children }) {
  return (
    <>
      <div className="flex relative flex-col sm:flex-row">
        <div className=" w-full sm:w-2/5 sm:h-screen  md:w-2/5 lg:w-1/5 ">
          <Nav />
        </div>
        <div className="w-full sm:w-3/5 md:w-3/5 py-6 lg:w-4/5">{children}</div>
      </div>
    </>
  );
}
