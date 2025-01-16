import { useAppDispatch } from "../../../hooks/reduxHooks";
import { setColorScheme } from "../../../redux/slices/settingsSlice";
import { colors } from "../../../utils/constants";

const ColorScheme = () => {
  const dispatch = useAppDispatch();

  return (
    <div className="flex flex-col ">
      <h2 className="text-xl font-semibold text-center">Change Color Scheme</h2>
      <div className="grid grid-cols-7 gap-4 mt-4">
        {colors.map((colorItem) => (
          <div
            key={colorItem.id}
            onClick={() => dispatch(setColorScheme(colorItem.hex))}
            className="w-8 h-8 rounded-sm cursor-pointer"
            style={{ backgroundColor: colorItem.hex }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default ColorScheme;
