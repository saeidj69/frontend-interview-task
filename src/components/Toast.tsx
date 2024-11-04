import { useEffect } from "react";
import useStore from "../store/useStore";

const Toast: React.FC = () => {
  const toastMessage = useStore((state) => state.toastMessage);
  const setToastMessage = useStore((state) => state.setToastMessage);

  const message = toastMessage?.message;
  const type = toastMessage?.type || "info";
  const duration = toastMessage?.duration || 2000;

  useEffect(() => {
    const timer = setTimeout(() => {
      setToastMessage(undefined);
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, setToastMessage]);

  const bgColor = {
    success: "bg-green-500",
    error: "bg-red-500",
    warning: "bg-yellow-500",
    info: "bg-blue-500",
  }[type];

  return (
    <div
      className={`fixed top-5 right-5 p-4 rounded-lg shadow-md text-white ${bgColor}`}
    >
      {message}
    </div>
  );
};

export default Toast;
