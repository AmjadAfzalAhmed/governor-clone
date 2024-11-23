import Image from "next/image";
import logo from "/public/logo.png";
import Link from "next/link";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default function Header() {
  return (
    <header className="flex justify-around fixed z-30 w-[100%] h-[80px] top-0 left-0 bg-red-600 p-4">
      <div className="logo relative mt-2 cursor-pointer">
        <Image src={logo} alt="logo" width={90} height={90} />
      </div>
      <h1 className="text-[#f8a9a3] text-2xl font-extrabold flex items-center">
        Tuition Free Program On Latest Technologies
      </h1>
      <ul className="flex text-[20px] text-[#faf9f6] justify-around items-center space-x-11">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/apply">Apply</Link>
        </li>
        <li>
          <Link href="/jobs">Jobs</Link>
        </li>
        <li>
          <Link href="/result">Result</Link>
        </li>
        <li>
          <div className="flex items-center">
            <Link href="/courses">Courses</Link>
            <FontAwesomeIcon
              icon={faChevronDown}
              className="relative w-3 h-3 ml-2 cursor-pointer"              
            />            
            
          </div>
        </li>
      </ul>
    </header>
  );
}
