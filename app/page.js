import SplitterCard from "@/components/SplitterCard"
export default function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-lightCyan space-y-12 p-2">
      <label className="uppercase tracking-[10px] text-xl text-darkCyan break-all ml-[10px]">spli<br/>tter</label>
      <SplitterCard />
    </main>
  )
}
