import Home from "../Pages/Home";
import Navbar from '../Components/Global/Navbar';

export default function Layout() {
  return (
    <>
        <Navbar />
        <div className="max-w-7xl mt-10 gap-y-10 flex flex-col mx-auto px-4 sm:px-6 lg:px-8 pb-10">
          <Home />
        </div>
    </>
  )
}
