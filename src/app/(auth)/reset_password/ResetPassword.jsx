"use client";
import {signUp} from "@/lib/auth/auth_wirh_email_and_pass/signup_with_email";
import PrimaryBtn from "@/sharedComponents/Primary_btn/Primary_btn";
import {Input} from "@/sharedComponents/input/input";

import {login} from "@/lib/auth/auth_wirh_email_and_pass/login_with_email";
import Link from "next/link";
import {useForm} from "react-hook-form";
import {useContext, useEffect, useState} from "react";
import {AppLoadingContext} from "@/app/StorePorvider";
import {redirect, usePathname, useRouter} from "next/navigation";
import {LoginCard, LoginCardAlt} from "../login/LoginCard";
import {use_selector} from "@/lib/redux/hooks/hooks";
import {MemberShip} from "../component/FormCard";
import {resetPassword} from "@/lib/auth/handleUser/resetPassword";

export function ResetPasswordCard() {
    const {formState, register, handleSubmit} = useForm();
    const {errors} = formState;
    const [formError, setFormError] = useState(null);
    const [isResetCodeSent, setIsResetCodeSent] = useState(false);
    const {setLoading} = useContext(AppLoadingContext);

    async function submit(data) {
        setLoading(true);
        const erorr = await resetPassword(data.sign_email);
        setLoading(false);
        if (!erorr) {
            setIsResetCodeSent(true);

            return;
        }
        setFormError(erorr);
    }

    return (
        <div className="login_card  ">
            <h3 className="text-center font-bold  mb-5" style={{lineHeight: "1.2"}}>
                Reset your account{" "}
            </h3>
            <MemberShip pathname={"/signup"}/>
            <form
                className="flex flex-col"
                noValidate
                onSubmit={handleSubmit(submit)}
            >
                <div className="form-flex flex flex-col gap-5">
                    {isResetCodeSent && "We send a reset code to your email "}
                    {!isResetCodeSent && (
                        <ResetPasswordInputs errors={errors} register={register}/>
                    )}
                    {!isResetCodeSent && (
                        <PrimaryBtn
                            text={"Send reset code"}
                            arrow={true}
                            class_name="login_btn"
                        />
                    )}

                    <p className="form_error">{formError}</p>
                </div>
            </form>
        </div>
    );
}

export function ResetPasswordInputs({register, errors}) {
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
                        message: "Please enter an email",
                    },
                    pattern: {
                        value: /\w+@[a-z]+\.[a-z]{2,}/gi,
                        message: "Please enter a valid email",
                    },
                }}
            />
        </>
    );
}
