import React, { FC, useEffect, useState } from "react";
import { Link, Navigate, Outlet, useLocation } from "react-router-dom";
import axios from "axios";

import TeliButton from "../TeliButton/TeliButton";
import TeliStandardLayout from "../../layouts/TeliStandardLayout/TeliStandardLayout";

type Error = Partial<{
  code: number;
  message: string;
}>;

type UserFetchProps = Partial<{
  ACCESS_URL: string;
}>;

const UserFetch: FC<UserFetchProps> = ({
  ACCESS_URL = "http://localhost:8091",
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [err, setErr] = useState(null);

  const fetchUserStatus = async (ACCESS_URL: string) => {
    setIsLoading(true);

    try {
      const { data } = await axios.get(`${ACCESS_URL}/whoami`);
      return { active: Boolean(data?.active), error: {} };
    } catch (error: unknown) {
      return { active: false, error };
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchUserStatus(ACCESS_URL).then(
      ({ active, error }: { active: boolean; error: unknown }) => {
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
    <Navigate to="/error" replace state={{ err }} />
  );
};

export const ErrorPage = () => {
  const {
    state: {
      err: { code, message },
    },
  } = useLocation();

  return (
    <TeliStandardLayout
      appName="graph"
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

export default UserFetch;
