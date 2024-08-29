import { Icon } from "@iconify/react/dist/iconify.js";
import React from "react";

interface SuccessAlertProps {
  message: string;
  onClose: () => void;
}

const SuccessAlert: React.FC<SuccessAlertProps> = ({ message }) => {
  return (
    <div className="my-5 px-2 py-2.5 rounded-md bg-[#88d38895] border border-[#3baa3b] w-full  text-green-900  z-50 animate-slideIn">
      <h2 className="flex items-center gap-2">
        <p className="text-sm">{message}</p>
        <span className="text-lg">
          <Icon icon="ic:round-check" />
        </span>
      </h2>
    </div>
  );
};

export default SuccessAlert;
