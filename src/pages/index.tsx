import { Dashboard } from "../components/Dashboard";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import { GlobalStyle } from "../styles/global";

export default function Home() {
  return (
    <>
      <Header />
      <div>
        <Sidebar />
        <Dashboard />
      </div>
      <GlobalStyle />
    </>
  )
}
