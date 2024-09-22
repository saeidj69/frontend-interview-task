import React from "react";
import Header from "./components/Header";
import Feed from "./components/Feed";

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <Header />
      <main>
        <Feed />
      </main>
    </div>
  );
};

export default App;
