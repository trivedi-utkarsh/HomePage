import Link from "next/link";
import DropDown from "./DropDown";
const Header = () => {
  return (
    <div className="bg-headerBg text-white flex justify-between pt-3 px-8 border-b border-opacity-5 border-white/15">
      <Link href="/" className="font-bruno text-2xl">
        X- ACK
      </Link>
      <div className="flex gap-x-8 font-light text-sm py-2">
        <Link href="/About">About Us</Link>
        <Link href="/Blog">Blog</Link>
        <DropDown name="Contact Us" />
        <DropDown name="Pricing" />
        <Link href="/Business">Business</Link>
        <Link href="/Universities">Universities</Link>
      </div>
      <div className="flex gap-x-4">
        <button className="text-sm font-light mb-2">Log In</button>
        <button className="text-sm font-light mb-2 border b-1 bg-gray-900 rounded-full px-3 hover:bg-slate-900 transition-all">
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default Header;
