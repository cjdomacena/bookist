import { Input } from "@components/common/input/Input";
import { loginSchema } from "@lib/schema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { AuthError } from "@supabase/supabase-js";

type FormData = z.infer<typeof loginSchema>;

export const LoginForm = () => {
  const supabase = useSupabaseClient();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    mode: "onSubmit",
    resolver: zodResolver(loginSchema),
    defaultValues: {
      password: "",
      email: "",
    },
  });
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const onSubmit = async (data: FormData) => {
    setLoading(true);
    try {
      const { error } = await supabase.auth.signInWithPassword({
        email: data.email,
        password: data.password,
      });
      if (error) throw error;
    } catch (error: unknown) {
      if (error instanceof AuthError) {
        setError(error.message);
      } else if (error instanceof Error) {
        setError(error.message);
      }
    } finally {
      reset({
        email: "",
        password: "",
      });
      setLoading(false);
    }
  };

  return (
    <form
      className="mx-auto w-full max-w-md space-y-6"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div>
        <h4 className="text-5xl">Welcome back!</h4>
        {error ? (
          <p className="p-1 text-xs text-red-500" data-test="errorMessage">
            {error}
          </p>
        ) : null}
      </div>
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
        {loading ? "Loading" : "Login"}
      </button>
    </form>
  );
};
