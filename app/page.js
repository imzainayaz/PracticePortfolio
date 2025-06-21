import Image from "next/image";
import pic from "@/public/zain.jpg";
import Link from "next/link";

function page() {
  return (
    <div className="flex gap-4 justify-between">
      <div className="mt-28">
        <h1 className="text-6xl">
          <span className="text-red-500">Full</span>stack Devolper
        </h1>
        <p className="mt-8 text-xl mb-10">
          I am a fullstack Devolper based in Pakistan and i will help you make
          beautiful and interactive websites perfect for your needs.
        </p>
        <Link
          href="/about"
          className="rounded-full  bg-accent-500 px-8 py-6 text-primary-800 text-lg font-semibold hover:bg-accent-600 transition-all cursor-pointer"
        >
          Contact me
        </Link>
      </div>
      <Image
        className="w-[500px] h-[500px] object-cover rounded-full"
        src={pic}
        height={500}
        width={500}
        alt="Picture of Zain Ayaz"
        placeholder="blur"
      />
    </div>
  );
}

export default page;
