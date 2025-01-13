import { useState } from "react";
import { useAppDispatch, useAppSelector } from "./reduxHooks";
import { setPersonalization } from "../redux/slices/settingsSlice";
const useSettingsLogic = () => {
  const dispatch = useAppDispatch();

  const [isDragging, setIsDragging] = useState(true);

  const { isPersonalizationOpen } = useAppSelector((state) => state.settings);

  const handleClick = (label: string) => {
    if (label === "Personalization") {
      dispatch(setPersonalization(true));
    }
  };
  return { isDragging, setIsDragging, isPersonalizationOpen, handleClick };
};

export default useSettingsLogic;
