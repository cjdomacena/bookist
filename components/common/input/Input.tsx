import classNames from "classnames";
import { HTMLInputTypeAttribute, InputHTMLAttributes, forwardRef } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  label?: string;
  type: HTMLInputTypeAttribute;
  errorMessage?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ id, label, type, errorMessage, ...props }, forwardRef) => {
    return (
      <div className="space-y-1">
        <label htmlFor={id} className="block text-xs dark:text-neutral-400">
          {label}
        </label>
        <input
          id={id}
          type={type}
          {...props}
          className={classNames(
            props.className,
            "w-full max-w-md rounded bg-neutral-100 px-3 py-3   focus:bg-neutral-50  focus:outline focus:outline-neutral-300 dark:bg-neutral-900 dark:text-neutral-300 dark:outline-neutral-700 placeholder:dark:text-neutral-600 focus:dark:bg-neutral-800"
          )}
          ref={forwardRef}
        />

        {errorMessage ? (
          <p className="text-xs text-red-500" data-test={`error-${id}`}>
            {errorMessage}
          </p>
        ) : null}
      </div>
    );
  }
);

Input.displayName = "Input";
