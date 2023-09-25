import { TbLoader3 } from "react-icons/tb";

const Loading = () => {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <span className="animate-spin">
        <TbLoader3 size={50} />
      </span>
    </div>
  );
};

export default Loading;
