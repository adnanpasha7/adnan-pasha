import Elsewhere from "@/components/Elsewhere";
import Header from "@/components/Header";
import JournalLoud from "@/components/journal/JournalLoud";
import LoudIntro from "@/components/LoudIntro";
import NavStrip from "@/components/NavStrip";
import WhatIDo from "@/components/WhatIDo";

export default async function Home() {  
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
    </>
  );
}
