import { Dashboard } from "../components/Dashboard";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import { GlobalStyle } from "../styles/global";
import { Container } from "./styles";

export default function Home() {
  return (
    <>
      <Header />
      <Container>
      <Sidebar />
        <Dashboard />
      </Container>
      <Footer />

      <GlobalStyle />
    </>
  )
}
