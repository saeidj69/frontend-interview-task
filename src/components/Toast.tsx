import { useEffect } from "react";
import useStore from "../store/useStore";

const Toast: React.FC = () => {
  const toasts = useStore((state) => state.toasts);
  const removeToast = useStore((state) => state.removeToastMessage);

  useEffect(() => {
    const timers = toasts.map((_, index) => {
      const duration = toasts[index].duration || 2000; // Default duration
      return setTimeout(() => {
        removeToast(index);
      }, duration);
    });

    return () => {
      timers.forEach((timer) => clearTimeout(timer));
    };
  }, [toasts, removeToast]);

  return (
    <div className="fixed bottom-5 left-1/2 transform -translate-x-1/2 flex flex-col space-y-2">
      {toasts.map((toast, index) => {
        const bgColor = {
          success: "bg-green-500",
          error: "bg-red-500",
          warning: "bg-yellow-500",
          info: "bg-blue-500",
        }[toast.type || "info"];

        return (
          <div
            key={index}
            className={`px-4 py-2 rounded-lg shadow-md text-white min-w-[200px] text-center ${bgColor}`}
          >
            {toast.message}
          </div>
        );
      })}
    </div>
  );
};

export default Toast;
