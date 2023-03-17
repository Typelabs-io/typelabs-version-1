import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="bg-transparent py-2">
      <div className="max-w-7xl mx-auto px-12 flex justify-between items-center">
        <div>
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
        <div>
          <a
            href="mailto:michael@typelabs.io"
            className="mona text-base text-medium inline-flex tracking-wide items-center text-Teal py-2 px-4 "
          >
            Get in touch{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-5 h-5 ml-2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
              />
            </svg>
          </a>
        </div>
      </div>
      
    </nav>
  );
};

export default Navbar;
