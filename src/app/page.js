import Link from "next/link";
import { AiFillGithub, AiOutlineYoutube } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";

export default function Home() {
  return (
    <main className="flex h-full min-h-screen w-full flex-col items-center justify-start bg-gray-50 pt-20">
      <div className="flex w-full flex-col items-center rounded bg-white p-2 px-4 shadow sm:w-4/5 md:w-3/5 lg:w-2/5">
        <h1 className="text-xl font-semibold">Its all open sourse!</h1>
        <h2 className="text-sm font-light">Please contribute on GitHub</h2>
        <Link
          href={"#"}
          className="m-2 h-auto w-auto rounded-full border p-2 hover:border-green-300"
        >
          <AiFillGithub size={30} />
        </Link>
        <span className="text-xs text-gray-600">Download Source Code</span>
        <hr className="my-4 w-full" />
        <h1>Follow me</h1>
        <div className="flex h-auto w-auto p-2">
          <Link
            href={"#"}
            className="m-2 h-auto w-auto rounded-full border p-2 hover:border-gray-300"
          >
            <AiFillGithub size={20} />
          </Link>
          <Link
            href={"#"}
            className="m-2 h-auto w-auto rounded-full border p-2 hover:border-blue-300"
          >
            <FaXTwitter size={20} />
          </Link>
          <Link
            href={"#"}
            className="m-2 h-auto w-auto rounded-full border p-2 hover:border-red-300 hover:bg-gray-100"
          >
            <AiOutlineYoutube size={20} />
          </Link>
        </div>
      </div>
    </main>
  );
}
