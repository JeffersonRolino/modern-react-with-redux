import searchImages from "./api";
import SearchBar from "./components/SearchBar";

const handleSubmit = async (term) => {
  const result = await searchImages(term);
  console.log(result);
}

function App() {
  return (
    <div>
      <SearchBar onSubmit={handleSubmit} />
    </div>
  )
}

export default App
  