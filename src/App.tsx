import React from "react";

import Header from "./components/Header";
import Routes from "./routes";

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <Header />
      <main>
        <Routes />
      </main>
    </div>
  );
};

export default App;
