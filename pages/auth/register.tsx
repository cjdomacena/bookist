import { ThemeSwitcher } from "@components/common/button";
import { Input } from "@components/common/input/Input";
import { AuthLayout } from "@components/common/layout/AuthLayout";
import { RegisterForm } from "@components/ui/auth";
import { NextPage } from "next";

const Register: NextPage = () => {
  return <AuthLayout form={<RegisterForm />} />;
};

export default Register;
