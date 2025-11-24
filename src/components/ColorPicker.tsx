import { Label } from "@/components/ui/label";

interface ColorPickerProps {
  color: string;
  onChange: (color: string) => void;
}

export const ColorPicker = ({ color, onChange }: ColorPickerProps) => {
  return (
    <div className="flex items-center gap-2 p-2 bg-card rounded-lg border border-border">
      <Label htmlFor="color-picker" className="text-sm font-medium">
        Color:
      </Label>
      <input
        id="color-picker"
        type="color"
        value={color}
        onChange={(e) => onChange(e.target.value)}
        className="w-10 h-10 rounded cursor-pointer border border-border"
      />
    </div>
  );
};
