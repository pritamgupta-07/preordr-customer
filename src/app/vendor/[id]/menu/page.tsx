import SearchCards from "@/components/cards/SearchCards";
import Navbar from "@/components/navbar/Navbar";
import MenuSearchPhone from "@/components/vendor/MenuSearchPhone";
import Sidebar from "@/components/vendor/Sidebar";

const page = () => {
  return (
    <div className="flex">
      <div className="fixed">
        <Sidebar />
      </div>
      {/* Content */}
      <div className="w-full overflow-x-auto ml-0 md:ml-[200px]">
        <Navbar />
        
        <div className="container mx-auto">
          <h1 className="mx-4 font-bold text-2xl">Menu</h1>

          {/* Search bar */}
          <MenuSearchPhone />

          <div className="mx-4 py-4 flex flex-col gap-3 w-[450px]">
              <SearchCards />
              <SearchCards />
              <SearchCards />
              <SearchCards />
              <SearchCards />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
