import { Canvas } from "@/components/Canvas";

const Index = () => {
  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-2">Blank Canvas</h1>
          <p className="text-muted-foreground">Create freely with simple drawing tools</p>
        </header>
        <main className="flex justify-center">
          <Canvas />
        </main>
      </div>
    </div>
  );
};

export default Index;
