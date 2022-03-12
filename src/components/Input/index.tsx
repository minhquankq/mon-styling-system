import classNames from "classnames";
import { InputHTMLAttributes } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  invalid?: boolean;
}

const Input = ({ className, invalid, ...props }: Props) => {
  return (
    <input
      className={classNames(
        "rounded w-full",
        {
          "border-red-400": invalid,
        },
        className
      )}
      {...props}
    />
  );
};

export default Input;
