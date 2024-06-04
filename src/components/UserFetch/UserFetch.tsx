import React, { FC, useEffect, useState } from "react";
import { Link, Navigate, Outlet, useLocation } from "react-router-dom";
import axios from "axios";

import TeliButton from "../TeliButton/TeliButton";
import TeliStandardLayout from "../../layouts/TeliStandardLayout/TeliStandardLayout";

type UserFetchProps = {
  ACCESS_URL?: string;
  appName: string;
  config: {
    beta: boolean;
    appList: {
      name?: string;
      url?: string;
    }[];
  };
};

type Error = Partial<{
  code: number;
  message: string;
}>;

export const ErrorPage: FC = () => {
  const {
    state: {
      err: { code, message },
      appName,
      config,
    },
  } = useLocation();

  return (
    <TeliStandardLayout
      appName={appName}
      beta={config.beta}
      apps={config.appList}
    >
      <section className="mt-4 ml-4">
        {code ? (
          <>
            <p>Error code: {code}</p>
            <p>{message}</p>
          </>
        ) : (
          <p>
            Your profile is currently inactive. Please contact your system
            administrator. You cannot continue until your profile is activated
            and attributes have been set.
          </p>
        )}
        <TeliButton variant="secondary" className="mt-6">
          <Link to="/">Retry</Link>
        </TeliButton>
      </section>
    </TeliStandardLayout>
  );
};

const UserFetch: FC<UserFetchProps> = ({
  ACCESS_URL = "http://localhost:8091",
  appName,
  config,
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [err, setErr] = useState({});

  const fetchUserStatus = async (ACCESS_URL: string) => {
    setIsLoading(true);

    try {
      const { data } = await axios.get(`${ACCESS_URL}/whoami`);
      setIsLoading(false);
      return { active: Boolean(data?.active), error: {} };
    } catch (error: Error | any) {
      setIsLoading(false);
      return { active: false, error };
    }
  };

  useEffect(() => {
    fetchUserStatus(ACCESS_URL).then(
      ({ active, error }: { active: boolean; error: Error }) => {
        const { code, message } = error;
        setErr({ code, message });
        setIsActive(active);
      }
    );
  }, []);

  if (isLoading) {
    return <section>Loading...</section>;
  }

  return isActive ? (
    <Outlet />
  ) : (
    <Navigate to="/error" replace state={{ err, appName, config }} />
  );
};

export default UserFetch;
