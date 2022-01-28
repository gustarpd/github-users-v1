import { Header } from "./components/Header";
import { InputArea } from "./components/InputArea";
import { Rotas } from "./Rotas";
import { CreateProvider } from "./context";
export type Image = {
  name: string;
  url: string;
  bio: string;
  username: string;
};

function App() {
  return (
    <>
      <CreateProvider>
        <Header></Header>
        <InputArea></InputArea>
        <Rotas />
      </CreateProvider>
    </>
  );
}

export default App;
