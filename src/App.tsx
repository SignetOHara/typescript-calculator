import { Provider as ThemeProvider } from './theme/Provider';
import { Page } from './components/Page/Page';
import { Calculations } from './containers/Calculations';

function App() {
  return (
    <ThemeProvider>
      <Page>
        <Calculations />
      </Page>
    </ThemeProvider>
  );
}

export default App;
