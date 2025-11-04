import { MousePointer2, Pencil, Square, Circle, Trash2 } from "lucide-react";
import { Button } from "./ui/button";

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
    <div className="flex items-center gap-2 p-2 bg-card rounded-xl border shadow-lg">
      {tools.map((tool) => {
        const Icon = tool.icon;
        return (
          <Button
            key={tool.id}
            variant={activeTool === tool.id ? "default" : "ghost"}
            size="icon"
            onClick={() => onToolClick(tool.id)}
            title={tool.label}
            className="transition-all"
          >
            <Icon className="h-5 w-5" />
          </Button>
        );
      })}
      <div className="w-px h-8 bg-border mx-1" />
      <Button
        variant="ghost"
        size="icon"
        onClick={onClear}
        title="Clear Canvas"
        className="hover:bg-destructive/10 hover:text-destructive transition-all"
      >
        <Trash2 className="h-5 w-5" />
      </Button>
    </div>
  );
};
