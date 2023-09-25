import RoutesListDesktop from "./RoutesListDesktop";
import RoutesListMobile from "./RoutesListMobile";

const SideBar = ({ children }) => {
  const routes = [
    {
      name: "Home",
      url: "/",
    },
    {
      name: "Next Date Predictor",
      url: "/predictdate",
    },
    {
      name: "Date Calculator",
      url: "/date-calculator",
    },
    {
      name: "Age Calculator",
      url: "/agecalculator",
    },
    {
      name: "Calender",
      url: "/calender",
    },
  ];
  return (
    <div className="flex h-full min-h-screen w-full">
      <div className="hidden min-h-full w-full md:block md:w-3/12 lg:w-4/12">
        <RoutesListDesktop routes={routes} />
      </div>
      <div className="block min-h-full w-auto md:hidden">
        <RoutesListMobile routes={routes} />
      </div>

      <div className="h-full min-h-full w-full">{children}</div>
    </div>
  );
};

export default SideBar;
