import { useEffect } from "react";
import UseLocalStorage from "../hooks/UseLocalstorage";

const Header: React.FC = () => {
  // Issues: Dark mode does not work properly and does not keep its state after reloading. Find the issueand fix it.
  const [isDarkMode, setIsDarkMode] = UseLocalStorage<boolean>(
    "isDarkMode",
    true
  );

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  return (
    <header className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">Social Feed</h1>
      <button
        onClick={() => setIsDarkMode(!isDarkMode)}
        className="bg-gray-700 px-4 py-2 rounded-md"
      >
        {isDarkMode ? "Light Mode" : "Dark Mode"}
      </button>
    </header>
  );
};

export default Header;
