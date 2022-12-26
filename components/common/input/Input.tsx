import classNames from "classnames";
import { HTMLInputTypeAttribute, InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  label?: string;
  type: HTMLInputTypeAttribute;
}

export const Input: React.FC<InputProps> = ({ id, label, type, ...props }) => {
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
          "w-full max-w-md rounded bg-neutral-100 px-3 py-3   placeholder:text-neutral-600  focus:bg-neutral-50 focus:outline focus:outline-neutral-300 dark:bg-neutral-900 dark:text-neutral-300 dark:outline-neutral-700 focus:dark:bg-neutral-800"
        )}
      />
    </div>
  );
};
