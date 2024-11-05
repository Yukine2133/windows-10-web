import { settingItems } from "../../utils/constants";
import WindowControls from "../WindowControls";

const Settings = () => {
  return (
    <div className="absolute  bg-black text-white top-[100px] left-20 w-[75rem] ">
      <div className="flex items-center  justify-between">
        <h3 className="px-4 text-sm">Settings</h3>
        <WindowControls closeApp={() => {}} minimizeApp={() => {}} />
      </div>

      <div className="mt-5 text-center text-lg">Windows Settings</div>

      <section className="grid p-12 grid-cols-4 gap-10">
        {settingItems.map((setting) => {
          const { desc, Icon, label, id } = setting;
          return (
            <div
              key={id}
              className="flex items-center gap-4 outline outline-1 outline-transparent hover:outline-[#191919] transition-colors duration-200 p-4"
            >
              <Icon className="size-7 text-[#731380]" />
              <div className="flex flex-col gap-2">
                <h4 className="text-sm">{label}</h4>
                <h4 className="text-xs text-[#838383]">{desc}</h4>
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default Settings;
