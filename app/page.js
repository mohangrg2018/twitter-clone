import Header from "@/components/Header";
import MainContent from "@/components/MainContent";
import RightSidebar from "@/components/RightSidebar";

export default function Home() {
  return (
    <main className="grid grid-cols-[250px,1fr,400px]">
      <Header />
      <MainContent />
      <RightSidebar />
    </main>
  );
}
