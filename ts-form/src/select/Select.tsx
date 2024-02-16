import React, { useEffect, useState } from "react";
import styles from "./Select.module.css";

type SelectOption = {
  label: string;
  value: string | number;
};

type SelectProps = {
  options: SelectOption[];
  onChange: (value: SelectOption | undefined) => void;
  value?: SelectOption;
};

const Select = ({ value, onChange, options }: SelectProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState(0);

  const clearOptions = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    onChange(undefined);
  };

  const selectOption = (option: SelectOption) => {
    if (option !== value) onChange(option);
  };

  function isOptionSelected(option: SelectOption) {
    return option === value;
  }

  useEffect(() => {
    if (isOpen) setHighlightedIndex(0);
  }, [isOpen]);

  return (
    <div
      onClick={() => setIsOpen((prev) => !prev)}
      onBlur={() => setIsOpen(false)}
      tabIndex={0}
      className={styles.container}
    >
      <span className={styles.value}>{value?.label}</span>
      <button onClick={(e) => clearOptions(e)} className={styles["clear-btn"]}>
        &times;
      </button>
      <div className={styles.divider}></div>
      <div className={styles.caret}></div>
      <ul className={`${styles.options} ${isOpen ? styles.show : ""}`}>
        {options.map((option, index) => (
          <li
            onClick={(e) => {
              e.stopPropagation();
              selectOption(option);
              setIsOpen(false);
            }}
            onMouseEnter={() => setHighlightedIndex(index)}
            className={`${styles.option} ${
              isOptionSelected(option) ? styles.selected : ""
            } ${index === highlightedIndex ? styles.highlighted : ""} `}
            key={option.label}
          >
            {option.label}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Select;
