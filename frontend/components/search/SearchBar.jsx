export default function SearchBar() {
  return (
    <>
      <form className="flex flex-row w-[400px] h-14 ml-10 bg-custom-1 rounded-2xl">
        <input
          type="text"
          placeholder="Search any things"
          className="w-full px-4 bg-custom-1 text-sm text-custom-5 placeholder:text-custom-5 outline-none rounded-2xl"
        />
        <button
          type="submit"
          className="w-[130px] bg-custom-3 font-semibold text-sm rounded-2xl"
        >
          Search
        </button>
      </form>
    </>
  );
}
