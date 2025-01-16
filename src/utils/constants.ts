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

export const pictures = [
  {
    id: 1,
    img: "mita.jpg",
  },
  {
    id: 2,
    img: "monkey.jfif",
  },

  {
    id: 3,
    img: "meme.png",
  },
  {
    id: 4,
    img: "meme2.jpg",
  },
  {
    id: 5,
    img: "nerd.jpg",
  },
  {
    id: 6,
    img: "me.webp",
  },

  {
    id: 7,
    img: "von.gif",
  },
];

export const colors = [
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
  {
    id: 4,
    name: "Red",
    hex: "#dc3545",
  },
  {
    id: 5,
    name: "Orange",
    hex: "#fd7e14",
  },
  {
    id: 6,
    name: "Yellow",
    hex: "#ffc107",
  },
  {
    id: 7,
    name: "Green",
    hex: "#28a745",
  },
  {
    id: 8,
    name: "Teal",
    hex: "#20c997",
  },
  {
    id: 9,
    name: "Pink",
    hex: "#e83e8c",
  },
  {
    id: 10,
    name: "Brown",
    hex: "#795548",
  },
  {
    id: 11,
    name: "Dark Gray",
    hex: "#343a40",
  },
  {
    id: 12,
    name: "Light Gray",
    hex: "#adb5bd",
  },
  {
    id: 13,
    name: "Cyan",
    hex: "#17a2b8",
  },
  {
    id: 14,
    name: "Magenta",
    hex: "#d63384",
  },
  {
    id: 15,
    name: "Lime",
    hex: "#c7ea46",
  },
  {
    id: 16,
    name: "Amber",
    hex: "#ffbf00",
  },
  {
    id: 17,
    name: "Violet",
    hex: "#8a2be2",
  },
  {
    id: 18,
    name: "Gold",
    hex: "#ffc300",
  },
  {
    id: 19,
    name: "Silver",
    hex: "#c0c0c0",
  },
  {
    id: 20,
    name: "Midnight Blue",
    hex: "#2c3e50",
  },
  {
    id: 21,
    name: "White",
    hex: "#fff",
  },
];
