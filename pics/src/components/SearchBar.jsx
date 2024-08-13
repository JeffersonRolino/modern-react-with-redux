function SearchBar({onSubmit}) {
  const handleClick = () => {
    onSubmit('cats');
  }

  return (
    <div>
      <input/>
      <button onClick={handleClick}>Search</button>
    </div>
  )
}

export default SearchBar
