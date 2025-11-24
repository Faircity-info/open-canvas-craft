import { Canvas } from "@/components/Canvas";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-foreground mb-8 text-center">
          Canvas Drawing App
        </h1>
        <Canvas />
      </div>
    </div>
  );
};

export default Index;
