const Header = () => {
  return (
    <div className="flex h-10 items-baseline bg-cyan-900">
      <h1 className="p-2 text-xl text-white">Date Predictor </h1>
      <span className="text-gray-50">
        <a
          target="_blank"
          className="hover:underline"
          href="https://nextjs.org/docs/app/api-reference/file-conventions/page#searchparams-optional"
        >
          with dynamic routes
        </a>
        <a
          className="px-2 text-blue-100 underline hover:text-blue-500"
          href="http://localhost:3000/predictdate?&days=5&multi=2"
        >
          try /predictdate/2/5
        </a>
      </span>
    </div>
  );
};

export default Header;
