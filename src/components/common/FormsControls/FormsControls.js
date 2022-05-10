import React from "react";
import css from "./FormsControls.module.css"

const Element = (Element) => ({input, meta: {error, touched}, ...props}) => {
  const hasError = error && touched;
  return (
    <div className={css.formControl + " " + (hasError ? css.error : "")}>
      <Element {...input} {...props} />
      <div>
        {hasError && <span> {error} </span>}
      </div>
    </div>
  );
};

export const Textarea = Element("textarea");
export const Input = Element("input");
