import { useContext } from 'react';
// import { AuthGoogleProvider } from './Contexts/authGoogle';
import { Context } from './Contexts/ContextGeral'
import { Router } from './Routes/router';
import { GlobalStyles } from "./styles/GlobalStyle";

function App() {
  const { state } = useContext(Context)
  
  return (
    <>
      <GlobalStyles bg={state.themeStatus.bg} text={state.themeStatus.text} />
      <Router />
    </>
  );
}

export default App;