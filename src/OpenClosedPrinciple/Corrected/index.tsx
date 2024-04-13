import { FC, ReactElement } from "react";

type TitleProps = {
  title: string;
  children: ReactElement;
};

type TitleWithLinkProps = {
  title: string;
  href: string;
  buttonText: string;
};

type TitleWithButtonProps = {
  title: string;
  buttonText: string;
  onClick: () => void;
};

const Title: FC<TitleProps> = ({ title, children }) => {
  return (
    <div style={{ display: "flex", justifyContent: "space-around" }}>
      <h1>{title}</h1>
      {children}
    </div>
  );
};

export const TitleWithLink: FC<TitleWithLinkProps> = ({
  title,
  href,
  buttonText,
}) => {
  return (
    <Title title={title}>
      <div>
        <a href={href}>{buttonText}</a>
      </div>
    </Title>
  );
};

export const TitleWithButton: FC<TitleWithButtonProps> = ({
  title,
  buttonText,
  onClick,
}) => {
  return (
    <Title title={title}>
      <button onClick={onClick}>{buttonText}</button>
    </Title>
  );
};
