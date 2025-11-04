import { Paintbrush } from "lucide-react";
import { Label } from "./ui/label";

interface ColorPickerProps {
  color: string;
  onChange: (color: string) => void;
}

export const ColorPicker = ({ color, onChange }: ColorPickerProps) => {
  const presetColors = [
    "#8b5cf6", // purple
    "#3b82f6", // blue
    "#10b981", // green
    "#f59e0b", // orange
    "#ef4444", // red
    "#ec4899", // pink
    "#000000", // black
    "#6b7280", // gray
  ];

  return (
    <div className="flex items-center gap-3 p-2 bg-card rounded-xl border shadow-lg">
      <Paintbrush className="h-5 w-5 text-muted-foreground" />
      <div className="flex gap-2">
        {presetColors.map((presetColor) => (
          <button
            key={presetColor}
            className={`w-8 h-8 rounded-lg border-2 transition-all hover:scale-110 ${
              color === presetColor ? "border-foreground scale-110" : "border-transparent"
            }`}
            style={{ backgroundColor: presetColor }}
            onClick={() => onChange(presetColor)}
            title={presetColor}
          />
        ))}
      </div>
      <div className="w-px h-8 bg-border mx-1" />
      <div className="flex items-center gap-2">
        <Label htmlFor="color-input" className="text-sm text-muted-foreground">
          Custom
        </Label>
        <input
          id="color-input"
          type="color"
          value={color}
          onChange={(e) => onChange(e.target.value)}
          className="w-10 h-10 rounded-lg cursor-pointer border-2 border-border"
        />
      </div>
    </div>
  );
};
