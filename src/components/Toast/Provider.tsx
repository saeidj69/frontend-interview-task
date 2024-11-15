import { ToastContext } from ".";
import { useCallback, useMemo, useState } from "react";

export type Toast = {
  id: string;
  message: string;
  type: "success" | "error";
};

export const ToastProvider = ({ children }: { children: React.ReactNode }) => {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const addToast = useCallback((type: "success" | "error", message: string) => {
    const id = Math.random().toString(36).slice(2);

    setToasts((prev) => [...prev, { id, type, message }]);
    setTimeout(() => removeToast(id), 3000);
  }, []);

  const removeToast = useCallback((id: string) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  }, []);

  const value = useMemo(
    () => ({ toasts, addToast, removeToast }),
    [toasts, addToast, removeToast]
  );

  return (
    <ToastContext.Provider value={value}>
      {children}

      <div className="fixed bottom-4 right-4 z-[100]">
        {toasts.map((toast) => (
          <div
            key={toast.id}
            onClick={() => removeToast(toast.id)}
            className={`
              mb-2 rounded-lg p-4 shadow-lg cursor-pointer text-white animate-fadeInUp hover:opacity-80 ${
                toast.type === "success" ? "bg-green-500" : "bg-red-500"
              }`}
          >
            {toast.message}
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
};
