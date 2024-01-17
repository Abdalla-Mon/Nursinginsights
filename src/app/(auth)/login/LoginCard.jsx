"use client";

import PrimaryBtn from "@/sharedComponents/Primary_btn";
import { Input } from "@/sharedComponents/input";
import Link from "next/link";
import { MemberShip } from "../component/FormCard";
import { AppLoadingContext } from "@/app/StorePorvider";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { login } from "@/lib/auth/auth_wirh_email_and_pass/login_with_email";
import { signWithGoogle } from "@/lib/auth/google/google_login";
export function LoginCard() {
  const { formState, register, handleSubmit } = useForm();
  const { errors } = formState;
  const [formError, setFormError] = useState("");
  const { setLoading } = useContext(AppLoadingContext);
  async function submit(data) {
    setLoading(true);
    const erorr = await login(data.sign_email, data.sign_password);
    setLoading(false);
    if (!erorr) {
      return;
    }
    setFormError(erorr);
  }
  return (
    <div className="login_card  ">
      <h3 className="text-center font-bold  mb-5" style={{ lineHeight: "1.2" }}>
        Login to Nursing Insights
      </h3>
      <MemberShip pathname={"login"} />
      <form
        className="flex flex-col"
        noValidate
        onSubmit={handleSubmit(submit)}
      >
        <div className="form-flex flex flex-col gap-5">
          <LoginInputs errors={errors} register={register} />
          <button type="button" onClick={signWithGoogle}>
            google
          </button>
          <PrimaryBtn text={"Login"} arrow={true} class_name="login_btn" />

          <p className="form_error">{formError}</p>
        </div>
      </form>
    </div>
  );
}
export function LoginInputs({ register, errors }) {
  return (
    <>
      <Input
        id={"sign_email"}
        type={"email"}
        e={"Email"}
        register={register}
        errors={errors}
        pattern={{
          required: {
            value: true,
            message: "Please enter your email",
          },
        }}
      />
      <Input
        id={"sign_password"}
        type={"password"}
        e={"Password"}
        register={register}
        errors={errors}
        pattern={{
          required: {
            value: true,
            message: "Please enter your password",
          },
        }}
      />
      <Link href="/reset_password" className="reset-link">
        Forgot password?
      </Link>
    </>
  );
}
