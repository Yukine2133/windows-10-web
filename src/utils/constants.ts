import {
  AiOutlinePoweroff,
  AiOutlineSetting,
  AiOutlinePicture,
  AiOutlineFile,
  AiOutlineUser,
  AiOutlineAppstore,
} from "react-icons/ai";

import { FaLaptop, FaGlobe, FaGamepad, FaAccessibleIcon } from "react-icons/fa";
import {
  MdOutlineDevices,
  MdOutlinePhone,
  MdOutlinePerson,
  MdLockOutline,
} from "react-icons/md";
import { RiBrush4Fill } from "react-icons/ri";
import { IoMdTime, IoIosSearch } from "react-icons/io";
import { GrUpdate } from "react-icons/gr";
import { AnyAction, Dispatch } from "@reduxjs/toolkit";
import {
  addFolder,
  addTextDocument,
  DesktopItem,
  removeFolder,
  removeTextDocument,
} from "../redux/slices/desktopItemsSlice";

export const menuItems = [
  { Icon: AiOutlineUser, label: "User" },
  {
    Icon: AiOutlineFile,
    label: "Documents",
  },
  {
    Icon: AiOutlinePicture,
    label: "Pictures",
  },
  {
    Icon: AiOutlineSetting,
    label: "Settings",
  },
  {
    Icon: AiOutlinePoweroff,
    label: "Power",
  },
];

export const calculatorButtons = [
  ["%", "CE", "C", "⌫"],
  ["1/x", "x²", "√x", "/"],
  ["7", "8", "9", "*"],
  ["4", "5", "6", "-"],
  ["1", "2", "3", "+"],
  ["+/-", "0", ".", "="],
];

export const settingItems = [
  {
    id: 1,
    Icon: FaLaptop,
    label: "System",
    desc: "Display, sound, notifications, power",
  },
  {
    id: 2,
    Icon: MdOutlineDevices,
    label: "Devices",
    desc: "Bluetooth, printers, mouse",
  },
  {
    id: 3,
    Icon: MdOutlinePhone,
    label: "Mobile devices",
    desc: "Link your Android, iPhone",
  },
  {
    id: 4,
    Icon: FaGlobe,
    label: "Network & Internet",
    desc: "Wi-FI, airplane mode, VPN",
  },
  {
    id: 5,
    Icon: RiBrush4Fill,
    label: "Personalization",
    desc: "Background, lоck screen, colors",
  },
  {
    id: 6,
    Icon: AiOutlineAppstore,
    label: "Apps",
    desc: "Uninstall, defaults",
  },
  {
    id: 7,
    Icon: MdOutlinePerson,
    label: "Accounts",
    desc: "Your accounts, email, sync, work, family",
  },
  {
    id: 8,
    Icon: IoMdTime,
    label: "Time & Language",
    desc: "Speech, region, date",
  },
  {
    id: 9,
    Icon: FaGamepad,
    label: "Gaming",
    desc: "Game bar, captures, Game Mode",
  },
  {
    id: 10,
    Icon: FaAccessibleIcon,
    label: "Ease of Access",
    desc: "Narrator, magnifer, high contrast",
  },
  {
    id: 11,
    Icon: IoIosSearch,
    label: "Search",
    desc: "Find my files, permissions",
  },
  {
    id: 12,
    Icon: MdLockOutline,
    label: "Privacy",
    desc: "Location, camera, microphone",
  },
  {
    id: 13,
    Icon: GrUpdate,
    label: "Update & Security",
    desc: "Windows Update, recovery backup",
  },
];

export const contextMenuItems = [
  {
    label: "Create Folder",
    action: () => {
      alert("ddsds");
    },
  },
  {
    label: "Create Text Document",
    action: () => {
      alert("ddsds");
    },
  },
];

export const getContextMenuItems = (
  dispatch: Dispatch<AnyAction>,
  closeContextMenu: () => void,
  targetItem: DesktopItem
) => [
  {
    label: "Rename",
    action: () => {
      const itemElement = document.querySelector(
        `[data-order='${targetItem.order}']`
      );
      if (itemElement) {
        itemElement.dispatchEvent(new Event("dblclick"));
      }
      closeContextMenu();
    },
  },
  {
    label: "Delete",
    action: () => {
      if (targetItem.name.toLowerCase().includes("folder")) {
        dispatch(removeFolder(targetItem.name));
      } else if (targetItem.name.toLowerCase().includes("text document")) {
        dispatch(removeTextDocument(targetItem.name));
      }

      closeContextMenu();
    },
  },
];

export const getContextMenuItemsDesktop = (
  dispatch: Dispatch<AnyAction>,
  closeContextMenu: () => void
) => [
  {
    label: "Create Folder",
    action: () => {
      dispatch(addFolder());
      closeContextMenu();
    },
  },
  {
    label: "Create Text Document",
    action: () => {
      dispatch(addTextDocument());
      closeContextMenu();
    },
  },
];
