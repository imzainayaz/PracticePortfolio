import Link from "next/link";

function page() {
  return (
    <div className="h-full flex gap-36 py-12 px-4 sm:px-8 justify-center">
      <div>
        <h1 className="text-8xl">
          My <span className="text-red-500">Projects</span>
        </h1>
        <p className="text-lg sm:text-xl text-gray-300 max-w-lg mt-8">
          These four are the big projects that i have worked in these last few
          moths.
        </p>
      </div>
      <div className="">
        <ul className="flex flex-col gap-16 items-center justify-center text-2xl py-10">
          <li>
            <Link
              className="rounded-full  bg-accent-500 px-8 py-6 text-primary-800 text-lg font-semibold hover:bg-accent-600 transition-all cursor-pointer"
              href="https://omnifood.dev/"
              target="_blank"
            >
              Omnifood
            </Link>
          </li>
          <li>
            <Link
              className="rounded-full  bg-accent-500 px-8 py-6 text-primary-800 text-lg font-semibold hover:bg-accent-600 transition-all cursor-pointer"
              href="https://the-wild-oasis-huts.netlify.app/"
              target="_blank"
            >
              Wild Oasis Huts
            </Link>
          </li>
          <li>
            <Link
              className="rounded-full  bg-accent-500 px-8 py-6 text-primary-800 text-lg font-semibold hover:bg-accent-600 transition-all cursor-pointer"
              href="https://the-wild-oasis-website-beta-five.vercel.app/"
              target="_blank"
            >
              Wild Oasis Website
            </Link>
          </li>
          <li>
            <Link
              className="rounded-full  bg-accent-500 px-8 py-6 text-primary-800 text-lg font-semibold hover:bg-accent-600 transition-all cursor-pointer"
              href="https://fast-react-pizza.netlify.app/"
              target="_blank"
            >
              Fast React Pizza
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default page;
