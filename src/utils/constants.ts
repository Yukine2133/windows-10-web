import {
  AiOutlinePoweroff,
  AiOutlineSetting,
  AiOutlinePicture,
  AiOutlineFile,
  AiOutlineUser,
} from "react-icons/ai";

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