import { Header } from "./components/Header";
import { InputArea } from "./components/InputArea";
import { Rotas } from "./Rotas";
import { useState } from "react";
import client from "./services/client";
import { ContextProvider } from "./contexts/Context";

export type Image = {
  name: string;
  url: string;
  bio: string;
  username: string;
  follower: string;
  follow: string;
  repos: string;
};

function App() {
  return (
    <>
      <ContextProvider>
        <Header></Header>
        <InputArea></InputArea>
        <Rotas />
      </ContextProvider>
    </>
  );
}

export default App;
