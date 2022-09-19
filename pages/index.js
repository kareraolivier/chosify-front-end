import styles from "../styles/Home.module.scss";
import NavBar from "../src/components/navBar/NavBar";
import { Header, About, Footer } from "../src/container";

export default function Home() {
  return (
    <div>
      <NavBar />
      <Header />
      <About />
      <Footer />
    </div>
  );
}
