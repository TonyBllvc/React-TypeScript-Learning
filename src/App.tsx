import "./App.css";
import { PropsAndState } from "./components/PropsAndState";
import {FormsAndInputs } from "./components/FormsAndInputs";
import { UserProvider } from "./context/userContext";

function App() {
  return (
    <UserProvider>
      <PropsAndState name="Pedro" age={"22"} isMarried={false} />
      <FormsAndInputs name="Maria" age={"30"} isMarried={true} />
    </UserProvider>
  );
}

export default App;
