import { FC, ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  color: string;
  size: string;
};

const Button: FC<ButtonProps> = ({ children, color, size }) => {
  return (
    <button style={{ color, fontSize: size === "xl" ? "32px" : "16px" }}>
      {children}
    </button>
  );
};

type RedButtonProps = {
  children: ReactNode;
  isBig: boolean;
};

const RedButton: FC<RedButtonProps> = ({ children, isBig }) => {
  return (
    <Button color="red" size={isBig ? "xl" : "m"}>
      {children}
    </Button>
  );
};

export const BadImplementation = () => {
  return <RedButton size="xl">Mi botón que funciona</RedButton>;
};
