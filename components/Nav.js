import Link from "next/link";
import Image from "next/image";
import { FiTwitter } from "react-icons/fi";

const Navbar = () => {
  return (
    <nav className="bg-transparent py-2 px-4 tablet:px-8 desktop:px-20 z-10 absolute w-full">
      <div className="mx-auto flex justify-between items-center ">
        <div>
          <Link href="/">
            <Image
              src="/typelabs.svg"
              alt="Typelabs logo"
              width={142}
              height={32}
            />
          </Link>
        </div>

        <div className="flex justify-evenly items-center">
          <a
            href="https://twitter.com/TypelabsHQ?s=20"
            className="mona text-base font-medium inline-flex tracking-wide items-center text-reef-200"
          >
          <FiTwitter className="w-6 h-6 text-Reef200" />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
