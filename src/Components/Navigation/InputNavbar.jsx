export default function InputNavbar() {
  const HandleSubmitSearch = (e) => {
    e.preventDefault();
    console.log("submit");
  };
  return (
    <div className=" w-[380px] mx-auto text-gray-600  ">
      <form onSubmit={HandleSubmitSearch}>
        <input
          className="  bg-white border border-grey h-9 pl-3 w-full rounded-md text-sm focus:outline-none leading-normal placeholder-darkGrey font-normal text-text1 "
          type="search"
          name="search"
          placeholder="Search here"
          autoComplete="off"
        />
      </form>
    </div>
  );
}
