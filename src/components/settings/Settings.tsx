import { settingItems } from "../../utils/constants";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { setPersonalization } from "../../redux/slices/settingsSlice";
import { useState } from "react";
import Personalization from "./Personalization";
import AppWindow from "../apps/AppWindow";
import SettingItem from "./SettingItem";

const Settings = ({
  constraintRef,
}: {
  constraintRef: React.MutableRefObject<null>;
}) => {
  const dispatch = useAppDispatch();

  const [isDragging, setIsDragging] = useState(true);

  const { isPersonalizationOpen } = useAppSelector((state) => state.settings);

  const handleClick = (label: string) => {
    if (label === "Personalization") {
      dispatch(setPersonalization(true));
    }
  };

  return (
    <AppWindow
      title="Settings"
      drag={isDragging}
      isDragging={isDragging}
      type="Settings"
      constraintRef={constraintRef}
      className=" bg-black z-10  top-[3.125rem] left-[calc(42%-30rem)]  w-[75rem] overflow-y-auto h-[80%] scrollbar-hidden"
    >
      {isPersonalizationOpen ? (
        <Personalization setIsDragging={setIsDragging} />
      ) : (
        <>
          <div className="mt-5 text-center text-lg">Windows Settings</div>

          <section className="grid p-12 grid-cols-4 gap-10">
            {settingItems.map((setting) => {
              const { desc, Icon, label, id } = setting;
              return (
                <SettingItem
                  desc={desc}
                  handleClick={handleClick}
                  key={id}
                  label={label}
                  Icon={Icon}
                />
              );
            })}
          </section>
        </>
      )}
    </AppWindow>
  );
};

export default Settings;
