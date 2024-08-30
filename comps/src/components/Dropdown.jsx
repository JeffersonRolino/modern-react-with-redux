import { useState, useEffect } from "react";
import { GoChevronDown, GoChevronLeft } from "react-icons/go";
import Panel from "./Panel";

function Dropdown({ options, value, onChange }) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handler = (event) => {
      console.log(event.target);
    };

    document.addEventListener("click", handler, true);
  }, []);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    // Close Dropdown
    setIsOpen(false);

    // Selected Option
    onChange(option);
  };

  const renderedOptions = options.map((option) => {
    return (
      <div
        className="hover:bg-sky-100 rounded cursor-pointer p-1"
        onClick={() => handleOptionClick(option)}
        key={option.value}
      >
        {option.value}
      </div>
    );
  });

  return (
    <div className="w-48 relative">
      <Panel
        className="flex justify-between items-center cursor-pointer"
        onClick={handleClick}
      >
        {value?.label || "Select..."}
        {isOpen ? <GoChevronDown /> : <GoChevronLeft />}
      </Panel>
      {isOpen && <Panel className="absolute top-full">{renderedOptions}</Panel>}
    </div>
  );
}

export default Dropdown;
