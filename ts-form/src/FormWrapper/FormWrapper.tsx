import { ReactNode } from "react";
import styles from "./FormWrapper.module.css";

type FormWrapperProps = {
  title: string;
  children: ReactNode[];
};
const FormWrapper = ({ title, children }: FormWrapperProps) => {
  return (
    <>
      <h2 className={styles.header}>{title}</h2>
      <div className={styles.grid}>{children}</div>
    </>
  );
};

export default FormWrapper;
