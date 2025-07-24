import React, { useState } from "react";
import Part1 from './Part1';
import Part2 from './Part2';

const RetroFitFormPage = () => {
  const [part, setPart] = useState("part1");

  return (
    <>
      {part === "part1" && <Part1 setPart={setPart} />}
      {part === "part2" && <Part2 />}
    </>
  );
};

export default RetroFitFormPage;
