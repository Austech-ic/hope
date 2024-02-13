import Image from "next/image";

import Navbar from "@/components/website/home/Navbar/Navbar";
import Sectionone from "@/components/website/home/sectionone/sectionone";
import Footer from "@/components/website/home/Footer/footer";



export default function Home() {
  return (
   <main>
    <Navbar />
    <Sectionone />
    <Footer />
   </main>
  );
}
