export default function Navbar() {
  return (
    <>
      <div className="flex w-full h-auto justify-between items-center">
        <div className="w-3/12 flex justify-start items-center font-extrabold text-sm color">
          Pal Development Center
        </div>
        <div className="w-6/12 h-10 flex justify-center items-center border border-[#505155] bg-[#242629] rounded-xl">
          Search here...
        </div>
        <div className="w-3/12 flex justify-center items-center font-extrabold text-sm color">
          <div>1</div>
          <div>2</div>
          <div>3</div>
        </div>
      </div>
    </>
  );
}
