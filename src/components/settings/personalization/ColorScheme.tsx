import { useAppDispatch } from "../../../hooks/reduxHooks";
import { setColorScheme } from "../../../redux/slices/settingsSlice";

const ColorScheme = () => {
  const dispatch = useAppDispatch();
  const colors = [
    {
      id: 1,
      name: "Purple",
      hex: "#731380",
    },
    {
      id: 2,
      name: "Blue",
      hex: "#0d6efd",
    },
    {
      id: 3,
      name: "Light Blue",
      hex: "#0dcaf0",
    },
  ];
  return (
    <div className="flex gap-4">
      {colors.map((colorItem) => (
        <div key={colorItem.id}>
          <div
            onClick={() => dispatch(setColorScheme(colorItem.hex))}
            className="w-8 h-8 rounded-sm cursor-pointer"
            style={{ backgroundColor: colorItem.hex }}
          ></div>
        </div>
      ))}
    </div>
  );
};

export default ColorScheme;
