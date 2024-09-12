function Search() {
  return (
    <div className="flex justify-center my-5">
      <input
        type="search"
        placeholder="Enter your destination"
        aria-label="Search input"
        className="w-full max-w-lg px-4 py-2 border bg-white border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
}

export default Search;
