import { zodResolver } from "@hookform/resolvers/zod";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { z } from "zod";
import { selectTheme } from "../Redux/slice/themeSlice";
import SuccessAlert from "../components/SuccessAlert";

const schema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Email is invalid").min(1, "Email is required"),
  phone: z.string().min(1, "Phone number is required"),
  message: z.string().min(1, "Message is required"),
});

const ContactPage: React.FC = () => {
  const theme = useSelector(selectTheme);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    resolver: zodResolver(schema),
  });

  const [showSuccess, setShowSuccess] = useState(false);

  const onSubmit = (data: any) => {
    console.log(data);
    setShowSuccess(true);
    setTimeout(() => {
      setShowSuccess(false);
      reset();
    }, 3000);
  };

  const getErrorMessage = (error: any) => {
    if (error) {
      return error.message as string;
    }
    return "";
  };

  return (
    <div
      className={`${
        theme?.theme === "Light"
          ? "bg-appLightGray text-appBlack"
          : "bg-appBlack text-white"
      }  `}
    >
      <div className="grid md:grid-cols-2 grid-cols-1 gap-12 justify-between max-w-[68rem] w-full mx-auto lg:px-0 px-5 my-14">
        <div className="w-full ">
          <div className="border-[#8fc0b789] border flex justify-center items-center rounded-full py-2.5 mb-3 px-2 max-w-[8rem]">
            <h3>Get in Touch</h3>
          </div>
          <h1 className="font-extrabold text-4xl text-appGreen">
            Let's connect
          </h1>
          <p className="text-base font-light my-2.5 max-w-[22rem]">
            Reach out to me directly! Whether you have questions or just want to
            say hello, I'm here to chat. I can't wait to hear from you!
          </p>
        </div>

        {/* form inputs section */}
        <div className="lg:mt-0 mt-5 w-full">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid lg:grid-cols-2 grid-cols-1 gap-4">
              <div
                className={`${
                  theme?.theme === "Dark"
                    ? "bg-black/50 border-[#222121]"
                    : "bg-[#e5ebebc9] text-appBlack border-[#8fc0b789]"
                } border lg:max-w-[18rem] py-2.5 px-2 rounded-md w-full`}
              >
                <input
                  type="text"
                  placeholder="Name"
                  {...register("name")}
                  className="w-full text-sm lg:text-[15px] outline-none bg-transparent"
                />
              </div>
              <div
                className={`${
                  theme?.theme === "Dark"
                    ? "bg-black/50 border-[#222121]"
                    : "bg-[#e5ebebc9] text-appBlack border-[#8fc0b789]"
                } border border-appGreen lg:max-w-[18rem] py-2.5 px-2 rounded-md w-full`}
              >
                <input
                  type="email"
                  placeholder="Email"
                  {...register("email")}
                  className="w-full text-sm lg:text-[15px] outline-none bg-transparent"
                />
              </div>
            </div>
            <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 mt-1">
              {errors.name && (
                <p className="text-red-500 text-sm">
                  {getErrorMessage(errors.name)}
                </p>
              )}

              {errors.email && (
                <p className="text-red-500 text-sm">
                  {getErrorMessage(errors.email)}
                </p>
              )}
            </div>
            <div
              className={`${
                theme?.theme === "Dark"
                  ? "bg-black/50 border-[#222121]"
                  : "bg-[#e5ebebc9] text-appBlack border-[#8fc0b789]"
              } border border-appGreen text-apptextAlt  py-3 px-2 rounded-md w-full my-4`}
            >
              <input
                type="text"
                placeholder="Your phone no."
                {...register("phone")}
                className="w-full text-sm lg:text-[15px] outline-none bg-transparent"
              />
            </div>
            {errors.phone && (
              <p className="text-red-500 text-sm mt-1">
                {getErrorMessage(errors.phone)}
              </p>
            )}
            {/* textarea */}
            <div
              className={`${
                theme?.theme === "Dark"
                  ? "bg-black/50 border-[#222121]"
                  : "bg-[#e5ebebc9] text-appBlack border-[#8fc0b789]"
              } border border-appGreen  py-3 px-2 rounded-md w-full my-4 h-[14rem]`}
            >
              <textarea
                placeholder="Message"
                {...register("message")}
                className="bg-transparent outline-none w-full h-full"
              ></textarea>
            </div>
            {errors.message && (
              <p className="text-red-500 text-sm mt-1">
                {getErrorMessage(errors.message)}
              </p>
            )}
            {/* submit button */}
            <div className="relative">
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-linear-gradient text-[#323232] text-sm py-4 px-2 rounded-lg w-full mt-4"
              >
                {isSubmitting ? "Sending..." : "Send message"}
              </button>

              {showSuccess && (
                <SuccessAlert
                  message="Form submitted successfully!"
                  onClose={() => setShowSuccess(false)}
                />
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
