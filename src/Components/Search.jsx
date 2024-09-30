const Search = () => {
  return (
    <div className="search_container">
      <label className="label_search" htmlFor="search">
        <img src="../../public/search.svg" alt="" width={24}/>
      </label>
      <input
        className="input_search"
        type="text"
        id="search"
        placeholder="Search for place or coordinates"
      />
      <div className="btn_search_container">
        <button className="btn_search"><img src="../../public/square.svg" alt="" width={24}/></button>
      </div>
    </div>
  );
};

export default Search;
