import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import LogInPage from "./pages/LogInPage";
import { useState } from "react";
import LabelPage from "./pages/LabelPage";
import { ProjectContext } from "./context/ProjectContext";
import IssuePage from "./pages/IssuePage";

// App Component, which is a container for all the other components.

function App() {
  const [id, setId] = useState<number>(0);
  const [name, setName] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  return (
    <div>
      <BrowserRouter>
        <ProjectContext.Provider
          value={{ id, setId, name, setName, description, setDescription }}
        >
          <Switch>

            <Route path="/labels">
              <LabelPage />
            </Route>
            <Route path="/issues">
              <IssuePage />
            </Route>
            <Route path="/">
              <LogInPage />
            </Route>
          </Switch>
        </ProjectContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
