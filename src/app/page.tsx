import Elsewhere from "@/components/Elsewhere";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import JournalLoud from "@/components/journal/JournalLoud";
import LoudIntro from "@/components/LoudIntro";
import NavStrip from "@/components/NavStrip";
import WhatIDo from "@/components/WhatIDo";
import getJournal from "@/lib/journal";

export default async function Home() {
  const journal = await getJournal();
  console.log("in page jour -> ", journal);
  
  return (
    <>
      <Header />
      <main className="flex-1 max-w-4xl mx-auto px-6 py-12">
        <NavStrip />
        <LoudIntro />
        <WhatIDo />
        <JournalLoud />
        <Elsewhere />
      </main>
      <Footer />
    </>
  );
}
