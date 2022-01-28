import classNames from "classnames";

interface Props {
  children: React.ReactNode;
  primary?: boolean;
  secondary?: boolean;
  rounded?: boolean;
  size?: "small" | "medium" | "large";
  disabled?: boolean;
  className?: string;
  onClick?: () => void;
}

const Button = ({
  children,
  primary = false,
  secondary = false,
  disabled = false,
  rounded = false,
  size = "medium",
  className,
  ...props
}: Props) => {
  return (
    <button
      disabled={disabled}
      className={classNames(
        "outline-none transition inline-flex items-center hover:opacity-80 rounded-sm",
        // color
        {
          "text-white bg-primary": primary,
          "text-white bg-secondary": secondary,
        },
        // size
        {
          "text-sm py-1 px-5": size === "small",
          "text-base py-3 px-7": size === "medium",
          "text-lg py-5 px-10": size === "large",
        },
        //disabled
        {
          "cursor-not-allowed opacity-50": disabled,
        },
        // rounded
        {
          "rounded-full": rounded,
        },
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
