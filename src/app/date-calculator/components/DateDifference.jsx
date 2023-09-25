"use client";

import { useEffect, useState } from "react";

const DateDifference = ({ start, end }) => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  // differences
  const [dateDiff, setDateDiff] = useState(new Date());
  const [dayDiff, setDayDiff] = useState(0);
  const [yearDiff, setYearDiff] = useState(0);
  const [monthDiff, setMonthDiff] = useState(0);
  const [overflowDays, setOverflowDays] = useState(0);

  useEffect(() => {
    setStartDate(new Date(start));
    setEndDate(new Date(end));
  }, [start, end]);

  useEffect(() => {
    let startMili = startDate.getTime();
    let endMili = endDate.getTime();
    let diffMili = endMili - startMili;
    var dayDiff = diffMili / (1000 * 60 * 60 * 24);

    let startYear = startDate.getFullYear();
    let endYear = endDate.getFullYear();
    let yearDiff = endYear - startYear;

    let startMonth = startDate.getMonth();
    let endMonth = endDate.getMonth();
    let monthDiff = endMonth - startMonth + 12 * yearDiff;

    if (yearDiff || yearDiff === 0) {
      setYearDiff(yearDiff);
    } else {
      setYearDiff("Wrong Year");
    }

    if (monthDiff || monthDiff === 0) {
      setMonthDiff(monthDiff);
    } else {
      setMonthDiff("Wrong Month");
    }

    if (dayDiff || dayDiff === 0) {
      setDayDiff(dayDiff);
    } else {
      setDayDiff("Wrong Day");
    }
  }, [startDate, endDate]);

  return (
    <div className="flex h-full w-full flex-col bg-gray-100 p-2">
      <h1 className="my-1 rounded-md border-sky-500 bg-sky-400 p-2 text-center">
        Result
      </h1>

      <div className="flex h-full w-full rounded-md border border-sky-500 bg-sky-100 p-1 sm:p-3 md:p-10">
        <table className="w-full table-fixed rounded-md border border-sky-500">
          <caption className="border-b ">Quick Analysis</caption>
          <thead className="bg-sky-500">
            <tr>
              <th className="border border-sky-700 p-2 text-start">
                Difference by (total)
              </th>
              <th className="border border-sky-700 p-2 text-start">Is</th>
            </tr>
          </thead>
          <tbody className="bg-sky-200">
            <tr>
              <td className="border border-sky-300 p-2">Days</td>
              <td className="border border-sky-300 p-2">{dayDiff}</td>
            </tr>
            <tr>
              <td className="border border-sky-300 p-2">Months</td>
              <td className="border border-sky-300 p-2">{monthDiff}</td>
            </tr>
            <tr>
              <td className="border border-sky-300 p-2">Years</td>
              <td className="border border-sky-300 p-2">{yearDiff}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DateDifference;
