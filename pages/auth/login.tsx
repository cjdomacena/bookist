import { AuthLayout } from "@components/common/layout/AuthLayout";
import { LoginForm } from "@components/ui/auth";
import { NextPage } from "next";

const Login: NextPage = () => {
  return <AuthLayout form={<LoginForm />} />;
};

export default Login;
