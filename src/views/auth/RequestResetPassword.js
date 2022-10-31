import React, { useState } from "react";
import Input from "../../components/common/Input";
import Button from "../../components/common/Button";
import classes from "./rrp.module.scss";
import { useForm } from "react-hook-form";
import { api, EMAIL_REGEX } from "../../utils";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const RequestResetPasswor = () => {
  const [isRequestLoading, setIsRequestLoading] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => requestForResetPassword(data);
  const navigate = useNavigate();

  const requestForResetPassword = async (payload) => {
    try {
      setIsRequestLoading(true);
      const response = await api.post("/auth/request-reset-password", payload);
      if (response.status === 200) {
        navigate("/signin");
        return toast.success(response?.data.message);
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
          props={register("email", {
            required: "Email address is required",
            pattern: {
              value: EMAIL_REGEX,
              message: "Please enter valid email address.",
            },
          })}
          label={"Email"}
          type="email"
          error={errors?.email?.message}
        />
        <Button type="submit" disabled={isRequestLoading}>
         Send email
        </Button>
      </form>
    </div>
  );
};

export default RequestResetPasswor;
