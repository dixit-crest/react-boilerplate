import React, { useState } from "react";
import Input from "../../components/common/Input";
import Button from "../../components/common/Button";
import classes from "./rrp.module.scss";
import { useForm } from "react-hook-form";
import { api, EMAIL_REGEX } from "../../utils";
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";

const ResetPassword = () => {
  const [isRequestLoading, setIsRequestLoading] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => resetPassword(data);
  const navigate = useNavigate();
  const { token } = useParams();

  const resetPassword = async (payload) => {
    try {
      const response = await api.post("/auth/reset-password", {
        ...payload,
        token,
      });
      if (response.status === 200) {
        toast.success(
          "Your password has been reset successfully, Please login to continue."
        );
        return navigate("/signin");
      }
    } catch (error) {
      console.log(error.message);
      toast.error(error?.response?.data?.message || error.message);
    } finally {
      setIsRequestLoading(false);
    }
  };

  return (
    <div className={classes.container}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          props={register("password", {
            required: "Password is required",
            minLength: {
                value: 8,
                message: "Password should be atleast 8 characters long",
              },
          })}
          
          label={"Password"}
          type="password"
          error={errors?.password?.message}
        />

        <Input
          props={register("confirmPassword", {
            required: "Confirm password is required",
            minLength: {
                value: 8,
                message: "Password should be atleast 8 characters long",
              },
            validate: (val) => {
              if (watch("password") !== val) {
                return "Your passwords do no match";
              }
            },
          })}
          label={"Confirm password"}
          type="password"
          error={errors?.confirmPassword?.message}
        />
        <Button type="submit" disabled={isRequestLoading}>
          Reset password
        </Button>
      </form>
    </div>
  );
};

export default ResetPassword;
