import Link from "next/link";
import Image from "next/image";
import { FiTwitter } from "react-icons/fi";
import { BsLinkedin } from "react-icons/bs";

const Navbar = () => {
  return (
    <nav className="bg-transparent py-6 px-4 tablet:px-8 desktop:px-20 w-full">
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

        <div className="flex justify-evenly space-x-4 items-center">
          <a
            target="_blank"
            href="https://twitter.com/TypelabsHQ?s=20"
            className="font-work text-base inline-flex tracking-wide items-center text-reef-200"
          >
            <FiTwitter className="w-6 h-6 hover:text-reef-300 text-reef-200" />
          </a>
          <a
            target="_blank"
            href="https://www.linkedin.com/company/typelabs-io/"
            className="font-work text-base inline-flex tracking-wide items-center text-reef-200"
          >
            <BsLinkedin className="w-6 h-6 hover:text-reef-300 text-reef-200" />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
