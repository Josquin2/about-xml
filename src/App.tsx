import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "@patternfly/react-core/dist/styles/base.css";
import { PageStickySectionGroup } from "./pages/HomePage";

function App() {
  return (
    <div className="App">
      <PageStickySectionGroup />
    </div>
  );
}

export default App;
