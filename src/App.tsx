import React from "react";
import { ElectronicAwvForm } from "./pages/awv";
import FormPropsTextFields from "./pages/demo/demo_TextField";

function App() {
  return (
    <>
      <FormPropsTextFields />
      <ElectronicAwvForm readOnly={false} />
    </>
  );
}

export default App;
