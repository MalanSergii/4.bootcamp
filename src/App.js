import Footer from 'components/footer';
import Header from 'components/header';
import Main from 'components/main';
import Section from 'components/section';
import themes from 'themes';
import { data } from 'data';
import { ThemeProvider } from 'styled-components';

const theme = 'dark';
// const theme = 'light';

function App() {
  return (
    <ThemeProvider theme={themes[theme]}>
      <Header headeLinks={data.header}></Header>
      <Main>
        {data.courses.map(item => (
          <Section moduleList={item.modules} title={item.name} key={item.id}></Section>
        ))}
      </Main>
      <Footer></Footer>
    </ThemeProvider>
  );
}

export default App;
