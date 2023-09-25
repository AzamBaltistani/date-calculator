"use client";
import { global } from "styled-jsx/css";

import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { useEffect } from "react";
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";
import { RxCross2 } from "react-icons/rx";

const DatePredictorApp = () => {
  const router = useRouter();
  const currentPath = usePathname();
  const searchParams = useSearchParams();

  let multi = Number(searchParams.get("multi"));
  let days = Number(searchParams.get("days"));

  if (multi <= 0) {
    multi = 1;
  }

  // handle range change for multi
  // const handleChange = (e) => {
  //   router.push(`${currentPath}?days=${days}&multi=${e.target.value}`);
  // };

  // handle day minus btn
  const handleMinusBtn = () => {
    router.push(`${currentPath}?days=${days - multi}&multi=${multi}`);
  };
  // handle day plus btn
  const handlePlusBtn = () => {
    router.push(`${currentPath}?days=${days + multi}&multi=${multi}`);
  };
  // handle day input
  const handleDaysInput = (e) => {
    router.push(`${currentPath}?days=${e.target.value}&multi=${multi}`);
  };
  const handleDayResetBtn = () => {
    router.push(`${currentPath}?days=${0}&multi=${multi}`);
  };

  // handle days scroll
  const handleDaysWheel = (e) => {
    if (e.deltaY > 0) {
      handlePlusBtn();
    }
    if (e.deltaY < 0) {
      handleMinusBtn();
    }
  };

  // handle multi plus btn
  const handleMultPlusBtn = () => {
    router.push(`${currentPath}?days=${days}&multi=${multi + 1}`);
  };
  const handleMultMinuBtn = () => {
    if (multi > 1)
      router.push(`${currentPath}?days=${days}&multi=${multi - 1}`);
  };
  const handleMultResetBtn = () => {
    router.push(`${currentPath}?days=${days}&multi=${1}`);
  };
  const handleMultWheel = (e) => {
    if (e.deltaY > 0) {
      handleMultPlusBtn();
    }
    if (e.deltaY < 0) {
      handleMultMinuBtn();
    }
  };

  // const multiRange = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

  const today = Date.now();
  const predict = today + days * (1000 * 60 * 60 * 24);
  const format = new Date(predict).toDateString();

  return (
    <div className="mt-4 flex flex-col p-0 sm:p-6 md:p-8 lg:p-10">
      <div className="flex h-full w-full items-center justify-center rounded-md border border-gray-300 bg-white shadow ">
        <div className="flex h-full w-full items-center justify-between pr-1">
          <div className=" w-full rounded-r-full bg-sky-100 p-2 py-3">
            Multiple / Steps
            <br />
            <span className="text-sm text-gray-500">
              (* mouse wheel, * arrows)
            </span>
          </div>
          <div className="flex">
            <div
              className="flex w-16 flex-col items-center justify-between p-2"
              onWheel={handleMultWheel}
            >
              <p className="text-sm font-extralight text-gray-400 text-opacity-50 ">
                {multi > 2 ? multi - 2 : "X"}
              </p>
              <p className="text-sm text-gray-500 text-opacity-50">
                {multi > 1 ? multi - 1 : "X"}
              </p>
              <p className="py-2">{multi}</p>
              <p className="text-sm text-gray-500 text-opacity-50">
                {multi + 1}
              </p>
              <p className="text-sm font-extralight text-gray-400 text-opacity-50">
                {multi + 2}
              </p>
            </div>
            <div className="flex flex-col justify-between bg-gray-100 transition-all">
              <button
                className=" bg-opacity-50 p-2 transition-all hover:bg-sky-300"
                onClick={handleMultMinuBtn}
              >
                <AiFillCaretUp />
              </button>
              <button
                className=" bg-opacity-50 p-2 transition-all hover:bg-sky-300"
                onClick={handleMultResetBtn}
              >
                <RxCross2 />
              </button>
              <button
                className=" bg-opacity-50 p-2 transition-all hover:bg-sky-300"
                onClick={handleMultPlusBtn}
              >
                <AiFillCaretDown />
              </button>
            </div>
          </div>
        </div>
        <div className="flex h-full w-full items-center justify-between border-l border-gray-300 pr-1">
          <div className="w-full rounded-r-full bg-sky-100 p-2 py-3">
            Days
            <br />
            <span className="text-sm text-gray-500">
              (* custom input, * mouse wheel [click for reverse], * arrows)
            </span>
          </div>
          <div className="flex w-auto">
            <div
              className="flex w-16 flex-col items-center justify-between p-2"
              onWheel={handleDaysWheel}
            >
              <p className="text-sm font-extralight text-gray-400 text-opacity-50 ">
                {days - 2}
              </p>
              <p className="text-sm text-gray-500 text-opacity-50">
                {days - 1}
              </p>
              <input
                className="remove-arrow h-10 w-10 text-center outline-none hover:cursor-pointer hover:bg-gray-200"
                value={days}
                type="number"
                onChange={handleDaysInput}
              />
              <p className="text-sm text-gray-500 text-opacity-50">
                {days + 1}
              </p>
              <p className="text-sm font-extralight text-gray-400 text-opacity-50">
                {days + 2}
              </p>
            </div>
            <div className="flex flex-col justify-between bg-gray-100 transition-all">
              <button
                className=" bg-opacity-50 p-2 transition-all hover:bg-sky-300"
                onClick={handleMinusBtn}
              >
                <AiFillCaretUp />
              </button>
              <button
                className=" bg-opacity-50 p-2 transition-all hover:bg-sky-300"
                onClick={handleDayResetBtn}
              >
                <RxCross2 />
              </button>
              <button
                className=" bg-opacity-50 p-2 transition-all hover:bg-sky-300"
                onClick={handlePlusBtn}
              >
                <AiFillCaretDown />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div
        suppressHydrationWarning={true}
        className="mt-6 rounded bg-white p-2 py-10 shadow"
      >
        <div className="flex flex-col items-center justify-between md:flex-row">
          <h1 className="">
            Predicted Date:{" "}
            <span className="rounded-full border border-gray-300 bg-sky-100 p-2 px-5">
              {format}
            </span>
          </h1>
          <h1 className="">
            Today:{" "}
            <span className="rounded-full border border-gray-300 bg-sky-100 p-2 px-5">
              {new Date(today).toDateString()}
            </span>
          </h1>
        </div>
      </div>

      <p className="m-2 mt-10 rounded bg-orange-100 p-2 text-center">
        You can use {`browser's`}
        <span className="m-1 h-full rounded-full border border-orange-400 bg-orange-200 p-1 px-2">
          go back
        </span>
        and
        <span className="m-1 h-full rounded-full border border-orange-400 bg-orange-200 p-1 px-2">
          go forward
        </span>
        button for
        <span className="m-1 h-full rounded-full border border-sky-400 bg-sky-200 p-1 px-2">
          undo
        </span>
        and
        <span className="m-1 h-full rounded-full border border-sky-400 bg-sky-200 p-1 px-2">
          redo
        </span>
      </p>
    </div>
  );
};

export default DatePredictorApp;
