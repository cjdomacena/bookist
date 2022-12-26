import { Input } from "@components/common/input/Input";

export const RegisterForm = () => {
  return (
    <form className="mx-auto w-full max-w-md space-y-6">
      <h4 className="text-5xl">Create an Account</h4>
      <Input
        id={"email"}
        type={"email"}
        label="Email"
        placeholder="Enter Email"
      />
      <Input
        id={"Full Name"}
        type={"text"}
        label="Full Name"
        placeholder="Enter Full Name"
      />
      <Input
        id={"password"}
        type={"password"}
        label="Password"
        placeholder="Enter Password"
      />
      <button
        type="button"
        className=" w-full rounded bg-purple-500 p-3 text-center text-purple-100 hover:bg-purple-700"
      >
        Get Started
      </button>
    </form>
  );
};
