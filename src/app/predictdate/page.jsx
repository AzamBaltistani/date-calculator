import DatePredictorApp from "./components/DatePredictorApp";
import Header from "./components/Header";

const PredictDate = () => {
  return (
    <div className="flex min-h-screen flex-col bg-gray-50">
      <Header />

      <div>
        <DatePredictorApp Days={0} />
      </div>
    </div>
  );
};

export default PredictDate;
