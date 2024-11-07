import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Feed from "./pages/Feed";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="/bookmark" element={<Feed onlyBookmarkedItems />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
