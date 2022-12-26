import { Input } from "@components/common/input/Input";
import { registerSchema } from "@lib/schema/user";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { useSupabaseClient } from "@supabase/auth-helpers-react";

type FormData = z.infer<typeof registerSchema>;

export const RegisterForm = () => {
  const supabase = useSupabaseClient();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    mode: "onSubmit",
    resolver: zodResolver(registerSchema),
    defaultValues: {
      fullName: "",
      password: "",
      email: "",
    },
  });
  const [loading, setLoading] = useState<boolean>(false);

  const onSubmit = async (data: FormData) => {
    setLoading(true);
    const { error } = await supabase.auth.signUp({
      email: data.email,
      password: data.password,
      options: {
        data: {
          full_name: data.fullName,
          school_id: "20b3c4f2-ad24-4852-b50a-eb80136066b7",
        },
      },
    });
    if (error) throw error;
    reset({
      email: "",
      password: "",
      fullName: "",
    });
    setLoading(false);
  };

  return (
    <form
      className="mx-auto w-full max-w-md space-y-6"
      onSubmit={handleSubmit(onSubmit)}
    >
      <h4 className="text-5xl">Create an Account</h4>
      <Input
        id={"email"}
        type={"email"}
        label="Email"
        placeholder="Enter Email"
        disabled={loading}
        {...register("email")}
        errorMessage={errors.email ? errors.email.message : undefined}
        required
      />
      <Input
        id={"fullName"}
        type={"text"}
        label="Full Name"
        placeholder="Enter Full Name"
        disabled={loading}
        {...register("fullName")}
        errorMessage={errors.fullName ? errors.fullName.message : undefined}
        required
      />
      <Input
        id={"password"}
        type={"password"}
        label="Password"
        placeholder="Enter Password"
        disabled={loading}
        errorMessage={errors.password ? errors.password.message : undefined}
        {...register("password")}
        required
      />
      <button
        type="submit"
        className="flex w-full items-center justify-center gap-2 rounded bg-purple-500 p-3 text-center text-purple-100 hover:bg-purple-700"
        disabled={loading}
      >
        {loading ? (
          <AiOutlineLoading3Quarters className="animate-spin" />
        ) : null}
        {loading ? "Loading" : "Get Started"}
      </button>
    </form>
  );
};
