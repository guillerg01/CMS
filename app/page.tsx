import Product from "@/components/Product";


export default function Home() {
  return (
    <main className="flex flex-col h-screen bg-zinc-300 items-center justify-center ">
      <h1 className="text-3xl font-medium animate-pulse">Productos</h1>
    <Product></Product>
    </main>
  )
}
