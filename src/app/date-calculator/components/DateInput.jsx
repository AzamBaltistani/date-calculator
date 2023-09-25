"use client";
import React from "react";

const DateInput = ({ HandleOnChange, label, id }) => {
  return (
    <div className="flex h-full w-full border bg-sky-200 ">
      <label
        htmlFor={id}
        className="mr-2 h-full w-1/3 bg-sky-600 p-2 text-white hover:cursor-pointer hover:bg-sky-500"
      >
        {label}
      </label>
      <input
        id={id}
        type="date"
        className="w-full bg-sky-200 p-2 outline-none"
        onChange={HandleOnChange}
      />
    </div>
  );
};

export default DateInput;
