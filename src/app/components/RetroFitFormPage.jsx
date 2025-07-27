import React, { useState } from "react";
import Part1 from './Part1';
import Part2 from './Part2';

const RetroFitFormPage = ({setCurrentPage}) => {
  const [formData, setFormData] = useState({
    city: "Bhubaneswar",
    builtUpArea: "",
    areaUnit: "",
    numberOfStoreys: "",
    envelopeComponent: "",
    windows: "",
    roof: "",
    walls: "",
    wr: "",
    rw: "",
    ww: "",
    wwr: "",
  });


  const [part, setPart] = useState("part1");

  return (
    <>
      {part === "part1" && <Part1 setPart={setPart} setCurrentPage={setCurrentPage} setFormData={setFormData} formData={formData}/>}
      {part === "part2" && <Part2 setPart={setPart} setCurrentPage={setCurrentPage} setFormData={setFormData} formData={formData}/>}
    </>
  );
};

export default RetroFitFormPage;
