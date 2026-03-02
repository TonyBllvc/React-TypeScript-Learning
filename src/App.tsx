import "./App.css";
import { PropsAndState } from "./components/PropsAndState";
import { FormsAndInputs } from "./components/FormsAndInputs";
import { UserProvider } from "./context/userContext";
import { UserContextComponent } from "./components/UserContextComponent";
import { Countries, EnumComponent } from "./components/EnumComponent";

function App() {
  return (
    <UserProvider>
      <PropsAndState name="Pedro" age={"22"} isMarried={false} />
      <FormsAndInputs name="Maria" age={"30"} isMarried={true} />
      <UserContextComponent />
      <EnumComponent
        name="Maria"
        age={"30"}
        isMarried={true}
        country={Countries?.BRAZIL}
      />
    </UserProvider>
  );
}

export default App;
