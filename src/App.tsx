import React from "react";
import Panel from "./pages/panel";
import { GlobalStyles, defaultTheme } from "./styles";
import { ThemeProvider } from "styled-components";
import Header from "./components/header";
import styled from "styled-components";
import { LabelProvider } from "./Contexts/LabelContext";
import { TaskListProvider } from "./Contexts/TaskListContext";

function App() {
  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyles />
        <LabelProvider>
          <TaskListProvider>
            <Container>
              <Header />
              <Panel />
            </Container>
          </TaskListProvider>
        </LabelProvider>
      </ThemeProvider>
    </>
  );
}

export default App;

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  width: 100%;
  min-height: 100vh;

  display: flex;
  flex-direction: column;

  background: #0079bf;
`;
