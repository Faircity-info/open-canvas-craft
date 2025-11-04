import { useEffect, useRef, useState } from "react";
import { Canvas as FabricCanvas, Circle, Rect } from "fabric";
import { Toolbar } from "./Toolbar";
import { ColorPicker } from "./ColorPicker";
import { toast } from "sonner";

export const Canvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [fabricCanvas, setFabricCanvas] = useState<FabricCanvas | null>(null);
  const [activeColor, setActiveColor] = useState("#8b5cf6");
  const [activeTool, setActiveTool] = useState<"select" | "draw" | "rectangle" | "circle">("select");

  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = new FabricCanvas(canvasRef.current, {
      width: Math.min(1200, window.innerWidth - 100),
      height: Math.min(700, window.innerHeight - 200),
      backgroundColor: "#ffffff",
    });

    canvas.freeDrawingBrush.color = activeColor;
    canvas.freeDrawingBrush.width = 3;

    setFabricCanvas(canvas);
    toast.success("Canvas ready! Start creating!");

    return () => {
      canvas.dispose();
    };
  }, []);

  useEffect(() => {
    if (!fabricCanvas) return;

    fabricCanvas.isDrawingMode = activeTool === "draw";
    
    if (activeTool === "draw" && fabricCanvas.freeDrawingBrush) {
      fabricCanvas.freeDrawingBrush.color = activeColor;
      fabricCanvas.freeDrawingBrush.width = 3;
    }
  }, [activeTool, activeColor, fabricCanvas]);

  const handleToolClick = (tool: typeof activeTool) => {
    setActiveTool(tool);

    if (tool === "rectangle") {
      const rect = new Rect({
        left: 100,
        top: 100,
        fill: activeColor,
        width: 150,
        height: 100,
        stroke: activeColor,
        strokeWidth: 2,
      });
      fabricCanvas?.add(rect);
      toast.success("Rectangle added!");
    } else if (tool === "circle") {
      const circle = new Circle({
        left: 100,
        top: 100,
        fill: activeColor,
        radius: 60,
        stroke: activeColor,
        strokeWidth: 2,
      });
      fabricCanvas?.add(circle);
      toast.success("Circle added!");
    }
  };

  const handleClear = () => {
    if (!fabricCanvas) return;
    fabricCanvas.clear();
    fabricCanvas.backgroundColor = "#ffffff";
    fabricCanvas.renderAll();
    toast.success("Canvas cleared!");
  };

  return (
    <div className="flex flex-col gap-6 items-center">
      <div className="flex gap-4 items-center flex-wrap justify-center">
        <Toolbar activeTool={activeTool} onToolClick={handleToolClick} onClear={handleClear} />
        <ColorPicker color={activeColor} onChange={setActiveColor} />
      </div>
      <div className="border-2 border-border rounded-2xl shadow-2xl overflow-hidden bg-white">
        <canvas ref={canvasRef} />
      </div>
    </div>
  );
};
