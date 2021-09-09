import { Redirect, Route as ReactRoute, RouteProps } from "react-router-dom";
import { ComponentType } from "react";

interface Props extends RouteProps {
  component: ComponentType;
  isPrivate?: boolean;
}

export const Route = ({ component: Component, isPrivate, ...rest }: Props) => {
  const accessToken = "foobar"; //pegar token do provider context
  return (
    <ReactRoute
      {...rest}
      render={() =>
        isPrivate === !!accessToken ? (
          <Component />
        ) : (
          <Redirect to={isPrivate ? "/" : "/dashboard"} />
        )
      }
    />
  );
};
