import { useState } from "react";
import s from "./ColorPicker.module.scss";
import { ChromePicker, ColorResult } from "react-color";

const lightenColor = (color: string, percentage: number) => {
  const decimalPercentage = percentage / 100;
  const num = parseInt(color.slice(1), 16);
  const r = (num >> 16) + Math.round(255 - (num >> 16)) * decimalPercentage;
  const g =
    ((num >> 8) & 0x00ff) +
    Math.round(255 - ((num >> 8) & 0x00ff)) * decimalPercentage;
  const b =
    (num & 0x0000ff) + Math.round(255 - (num & 0x0000ff)) * decimalPercentage;

  return `#${((r << 16) | (g << 8) | b).toString(16).padStart(6, "0")}`;
};

interface PropsI {
  color?: string;
  onChangeColor?: (color: string, lightColor: string) => void;
}
export const ColorPicker: React.FC<PropsI> = (props) => {
  const { color = "#ff0000", onChangeColor } = props;
  const [selectedColor, setSelectedColor] = useState<string>(color);
  const [lightColor, setLightColor] = useState<string>("color");
  const [showColorPicker, setShowColorPicker] = useState<boolean>(false);

  const handlerColorChange = (color: ColorResult) => {
    const colorSelected = color.hex;
    setSelectedColor(colorSelected);
    setLightColor(lightenColor(colorSelected, 50));
    onChangeColor && onChangeColor(colorSelected, lightColor);
  };

  const toggleColorPicker = () => {
    setShowColorPicker((prev) => !prev);
  };

  return (
    <div>
      <div className={s.colorBox} onClick={toggleColorPicker}>
        <div
          className={s.color_half}
          style={{
            backgroundColor: selectedColor,
          }}
        ></div>
        <div
          className={`${s.color_half} ${s.lighter}`}
          style={{
            backgroundColor: lightColor,
          }}
        ></div>
      </div>
      {showColorPicker && (
        <div className={s.picker_wrapper}>
          <ChromePicker
            color={selectedColor}
            onChangeComplete={handlerColorChange}
          />
        </div>
      )}
    </div>
  );
};
