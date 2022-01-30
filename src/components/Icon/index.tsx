import classNames from "classnames";
import { useCallback, useEffect, useState } from "react";
import { IconName } from "./Icon.type";

interface Props {
  name: IconName;
  // https://tailwindcss.com/docs/fill
  className?: string;
  size?: number;
  onError?: (error: Error) => void;
}

type IconComponentType = React.FunctionComponent<
  React.SVGProps<SVGSVGElement> & {
    title?: string | undefined;
  }
>;

const Icon = ({ name, className, size = 24, onError }: Props) => {
  const [IconComponent, setIconComponent] =
    useState<IconComponentType | null>(null);

  const loadIcon = useCallback(
    async (name: string) => {
      if (!name) return;

      try {
        const capitalizedName = name.charAt(0).toUpperCase() + name.slice(1);
        const componentName = `${capitalizedName}Icon`;
        const IconComponent = (await import(`./${componentName}`)).default;

        setIconComponent(IconComponent);
      } catch (err) {
        onError && onError(new Error(`Can not import the icon ${name}`));
      }
    },
    [onError]
  );

  useEffect(() => {
    name && loadIcon(name);
  }, [name, loadIcon]);

  return IconComponent !== null ? (
    <IconComponent
      className={classNames(className)}
      width={size}
      height={size}
    />
  ) : null;
};

export default Icon;
