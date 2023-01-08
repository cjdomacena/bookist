import classNames from "classnames";
import { ButtonHTMLAttributes } from "react";
import { MdArrowBack } from "react-icons/md";

type BackButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export const BackButton = ({ ...props }: BackButtonProps) => {
  return (
    <button
      className={classNames(
        props.className,
        "flex items-center gap-1 rounded px-4 py-2 text-sm font-bold dark:bg-primary"
      )}
      {...props}
    >
      <MdArrowBack />
      Back
    </button>
  );
};
