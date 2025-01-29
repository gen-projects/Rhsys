interface SearchBarProps {
  setSearchQuery: (query: string) => void;
}

function SearchBar({ setSearchQuery }: SearchBarProps) {
  return (
    <input
      type="text"
      placeholder="Pesquisar funcionário..."
      className="p-2 w-full border border-violet-400 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-violet-500"
      onChange={(e) => setSearchQuery(e.target.value)}
    />
  );
}

export default SearchBar;
