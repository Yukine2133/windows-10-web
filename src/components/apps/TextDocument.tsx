import { motion } from "framer-motion";

const TextDocument = ({
  constraintRef,
  name,
}: {
  constraintRef: React.MutableRefObject<null>;
  name: string;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      drag
      dragConstraints={constraintRef}
      dragMomentum={false}
      className="absolute w-[20rem] text-white bg-[#202020] left-[42%] top-[21%] "
    >
      <header className="p-2 bg-gray-700">{name}</header>
      <div className="p-4">TextDocument Content</div>
    </motion.div>
  );
};

export default TextDocument;
