import { FloatingNav } from "@/components/ui/FloatingNav";
import Hero from "../components/Hero";
import { FaHome } from "react-icons/fa";
import Grid from "../components/Grid";
import RecentProjects from "@/components/RecentProjects";
import { navItems } from "@/data";
import Clients from "@/components/Clients";
import Experience from "@/components/Experience";
import Approach from "@/components/Approach";
import Footer from "@/components/Footer";
import Home from "@/components/Home";
import Services from "@/components/Services";

export default function Main() {
  return (
    <main className="relative bg-black-100 flex justify-center overflow-clip items-center flex-col mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Home />
        <Grid />
        <Services />
        <RecentProjects />
        <Experience />
        <Approach />
        <Footer />
      </div>
    </main>
  );
}
