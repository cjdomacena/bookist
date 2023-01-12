import classNames from "classnames";
import { ButtonHTMLAttributes } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

interface SubmitButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  buttonText: string;
}

export const SubmitButton = ({ buttonText, ...props }: SubmitButtonProps) => {
  return (
    <button
      className={classNames(
        props.className,
        "flex w-full items-center justify-center gap-2 rounded bg-purple-500 p-3 text-center text-purple-100 hover:bg-purple-700"
      )}
      {...props}
    >
      {props.disabled ? (
        <AiOutlineLoading3Quarters className="animate-spin" />
      ) : null}
      {props.disabled ? "Loading" : buttonText}
    </button>
  );
};
