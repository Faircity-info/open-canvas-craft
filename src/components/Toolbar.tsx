import { MousePointer2, Pencil, Square, Circle, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ToolbarProps {
  activeTool: "select" | "draw" | "rectangle" | "circle";
  onToolClick: (tool: "select" | "draw" | "rectangle" | "circle") => void;
  onClear: () => void;
}

export const Toolbar = ({ activeTool, onToolClick, onClear }: ToolbarProps) => {
  const tools = [
    { id: "select" as const, icon: MousePointer2, label: "Select" },
    { id: "draw" as const, icon: Pencil, label: "Draw" },
    { id: "rectangle" as const, icon: Square, label: "Rectangle" },
    { id: "circle" as const, icon: Circle, label: "Circle" },
  ];

  return (
    <div className="flex gap-2 p-2 bg-card rounded-lg border border-border">
      {tools.map((tool) => (
        <Button
          key={tool.id}
          variant={activeTool === tool.id ? "default" : "outline"}
          size="icon"
          onClick={() => onToolClick(tool.id)}
          title={tool.label}
        >
          <tool.icon className="h-4 w-4" />
        </Button>
      ))}
      <div className="w-px bg-border mx-1" />
      <Button variant="outline" size="icon" onClick={onClear} title="Clear Canvas">
        <Trash2 className="h-4 w-4" />
      </Button>
    </div>
  );
};
