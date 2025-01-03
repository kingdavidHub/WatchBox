import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex-between px-[5rem] py-[1rem]">
      <h3 className="uppercase">WatchBox</h3>
      {/* Desktop Nav */}
      <nav>
        <ul className="flex-center gap-5">
          <li><Link href={"/"}>WatchBox</Link></li>
          <li><Link href={"/"}>Genre</Link></li>
          <li><Link href={"/"}>Country</Link></li>
          <li><Link href={"/"}>Movie</Link></li>
          <li><Link href={"/"}>Tv Series</Link></li>
        </ul>
      </nav>
    </div>
  );
};
export default Navbar;
