"use client";
import React, { useState } from "react";
import DateInput from "./DateInput";
import DateDifference from "./DateDifference";

const DateCalculatorPage = () => {
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();

  const handleStartDateChange = (e) => {
    setStartDate(e.target.value);
  };
  const handleEndDateChange = (e) => {
    setEndDate(e.target.value);
  };

  return (
    <div className="h-full w-full bg-gray-100">
      <div className="flex h-full  flex-col gap-2  p-2 py-10 sm:flex-row">
        <DateInput
          HandleOnChange={handleStartDateChange}
          label={"Start Date"}
          id={"start-date"}
        />
        <DateInput
          HandleOnChange={handleEndDateChange}
          label={"End Date"}
          id={"end-date"}
        />
      </div>
      <DateDifference start={startDate} end={endDate} />
    </div>
  );
};

export default DateCalculatorPage;
