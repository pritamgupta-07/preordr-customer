import SearchCards from "@/components/cards/SearchCards";
import Navbar from "@/components/navbar/Navbar";

const SearchResults = () => {
  return (
    <div className="bg-[var(--color-background-100)] h-screen">
      <Navbar />

      {/* LIST */}
      <div className="container mx-auto">
        <div className="grid md:grid-cols-3 gap-2">
          <SearchCards />
          <SearchCards />
          <SearchCards />
          <SearchCards />
          <SearchCards />
          <SearchCards />
          <SearchCards />
        </div>
      </div>
    </div>
  );
};

export default SearchResults;
