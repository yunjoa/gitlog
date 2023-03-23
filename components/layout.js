import Nav from "./nav";
export default function Layout({ children }) {
  return (
    <>
      <div className="flex relative flex-col sm:flex-row">
        <div className=" w-full sm:w-2/5 sm:h-screen  md:w-2/5 lg:w-1/5 ">
          <Nav />
        </div>
        <div
          className="w-full md:py-6 py-0 sm:w-3/5 md:w-3/5  lg:w-4/5"
          id="contents"
        >
          {children}
        </div>
      </div>
    </>
  );
}
