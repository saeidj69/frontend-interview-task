import { Toast } from "./Provider";
import { createContext, useContext } from "react";

type ToastContextType = {
  toasts: Toast[];
  removeToast: (id: string) => void;
  addToast: (type: "success" | "error", message: string) => void;
};

export const ToastContext = createContext<ToastContextType | null>(null);

const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used within a ToastProvider");
  }

  return context;
};

export default useToast;
