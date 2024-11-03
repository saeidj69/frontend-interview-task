import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Feed from "./components/Feed";
import Header from "./components/Header";

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <Header />
      <main>
        <Router>
          <Routes>
            <Route path="/" element={<Feed />} />
            <Route path="/bookmark" element={<Feed onlyLikedItems />} />
          </Routes>
        </Router>
      </main>
    </div>
  );
};

export default App;
