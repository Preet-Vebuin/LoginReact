import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";

const App: React.FC = () => {
  return (
        <Router>
          <AppRoutes /> {/* Routes are handled here */}
        </Router>
     );
};

export default App;
