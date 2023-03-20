import Link from "next/link";
import Image from "next/image";
import { FiTwitter } from "react-icons/fi";
import { AiOutlineMail } from "react-icons/ai";
const Navbar = () => {
  return (
    <nav className="bg-transparent py-2 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto flex justify-between items-center ">
        <div className="">
          <Link href="/">
            <Image
              className="h-8 w-auto flex items-center"
              src="/typelabs.svg"
              alt="Typelabs logo"
              width={167}
              height={40}
            />
          </Link>
        </div>

        <div className="flex justify-evenly items-center">
          <a
            href="mailto:michael@typelabs.io"
            className="mona text-base font-medium inline-flex tracking-wide items-center text-Reef200 py-2 px-4"
          >
            <AiOutlineMail className="h-7 w-7" />
          </a>
          <FiTwitter className="w-7 h-7 text-Reef200" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
