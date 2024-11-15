import React from "react";

import Header from "./components/Header";
import { ToastProvider } from "./components/Toast/Provider";
import Routes from "./routes";

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <Header />
      <ToastProvider>
        <main>
          <Routes />
        </main>
      </ToastProvider>
    </div>
  );
};

export default App;
