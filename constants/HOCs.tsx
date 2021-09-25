import { Session } from "next-auth";
import React from "react";
import { useAuth } from "./Hooks";
import Login from '../pages/dailylife/login'

type TSessionProps = {
  session: Session;
};

export function withAuth<P extends object>(refreshInterval?: number) {
  return function (Component: React.ComponentType<P>) {
    return function (props: Exclude<P, TSessionProps>) {
      const { session, loading } = useAuth(refreshInterval);

      if (typeof window !== undefined && loading) {
        return null;
      }

      if (!loading && !session) {
        return (
          <>
            <Login />
          </>
        );
      }

      return <Component session={session} {...props} />;
    };
  };
}
