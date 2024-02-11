"use client";
import { signUp } from "@/lib/auth/auth_wirh_email_and_pass/signup_with_email";
import PrimaryBtn from "@/sharedComponents/buttons/Primary_btn/Primary_btn";
import { Input } from "@/sharedComponents/input/input";

import { login } from "@/lib/auth/auth_wirh_email_and_pass/login_with_email";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { useContext, useEffect, useState } from "react";
import { AppLoadingContext } from "@/app/StorePorvider";
import { redirect, usePathname, useRouter } from "next/navigation";
import { LoginCard, LoginCardAlt } from "../login/LoginCard";
import { use_selector } from "@/lib/redux/hooks/hooks";
import { MemberShip } from "../component/FormCard";

export function SignupCard() {
  const { formState, register, handleSubmit } = useForm();
  const { errors } = formState;
  const [formError, setFormError] = useState("");
  const { setLoading } = useContext(AppLoadingContext);

  async function submit(data) {
    setLoading(true);
    const erorr = await signUp(
      data.sign_email,
      data.sign_password,
      data.user_name,
    );
    setLoading(false);
    if (!erorr) {
      return;
    }
    setFormError(erorr);
  }

  return (
    <div className="login_card  ">
      <h3 className="text-center font-bold  mb-5" style={{ lineHeight: "1.2" }}>
        Create an account
      </h3>
      <MemberShip pathname={"/signup"} />
      <form
        className="flex flex-col"
        noValidate
        onSubmit={handleSubmit(submit)}
      >
        <div className="form-flex flex flex-col gap-5">
          <SignUpInputs errors={errors} register={register} />
          <PrimaryBtn text={"sign up"} arrow={true} class_name="login_btn" />

          <p className="form_error">{formError}</p>
        </div>
      </form>
    </div>
  );
}

export function SignUpInputs({ register, errors }) {
  return (
    <>
      <Input
        id={"user_name"}
        type={"text"}
        e={"User Name"}
        register={register}
        errors={errors}
        pattern={{
          required: {
            value: true,
            message: "Please enter a user name",
          },
        }}
      />
      <Input
        id={"sign_email"}
        type={"email"}
        e={"Email"}
        register={register}
        errors={errors}
        pattern={{
          required: {
            value: true,
            message: "Please enter an email",
          },
          pattern: {
            value: /\w+@[a-z]+\.[a-z]{2,}/gi,
            message: "Please enter a valid email",
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
            message: "Please enter a password",
          },
          pattern: {
            value: /^(?=.*[a-z])(?=.*[A-Z]).{8,}$/g,
            message:
              "Your password must be at least 8 characters long and contain at least one lowercase letter, one uppercase letter, and one number.                    ",
          },
        }}
      />
    </>
  );
}
