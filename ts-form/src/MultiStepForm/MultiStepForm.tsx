import styles from "./MultiStepForm.module.css";
import { useMultiStep } from "../hooks/useMultiStep";
import UserForm from "../userForm/UserForm";
import AdressForm from "../AdressForm/AdressForm";
import AccountForm from "../AccountForm/AccountForm";
import { FormEvent, useState } from "react";

type FormData = {
  firstName: string;
  lastName: string;
  age: number;
  street: string;
  city: string;
  postalCode: string;
  email: string;
  password: string;
};

const INITIAL_DATA: FormData = {
  firstName: "",
  lastName: "",
  age: 0,
  street: "",
  city: "",
  postalCode: "",
  email: "",
  password: "",
};

const MultiStepForm = () => {
  const [data, setData] = useState(INITIAL_DATA);

  const updateFields = (fields: Partial<FormData>) => {
    setData((prev) => {
      return { ...prev, ...fields };
    });
  };

  const { steps, currentStepIndex, step, isFirstStep, isLastStep, back, next } =
    useMultiStep([
      <UserForm {...data} updateFields={updateFields} />,
      <AdressForm {...data} updateFields={updateFields} />,
      <AccountForm {...data} updateFields={updateFields} />,
    ]);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!isLastStep) return next();
    alert("Succesfull Account Creation");
  };

  return (
    <div className={styles.formWrapper}>
      <form onSubmit={onSubmit}>
        <div className={styles.stepsWrapper}>
          {currentStepIndex + 1} / {steps.length}
        </div>
        {step}
        <div className={styles.buttonsContainer}>
          {isFirstStep ? null : (
            <button type="button" onClick={back}>
              BACK
            </button>
          )}

          <button type="submit">{isLastStep ? "FINISH" : "NEXT"}</button>
        </div>
      </form>
    </div>
  );
};

export default MultiStepForm;
