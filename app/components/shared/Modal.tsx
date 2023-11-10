import { AnimatePresence, motion } from "framer-motion";
import { Dispatch, SetStateAction, useState } from "react";
import { IconType } from "react-icons";

type ModalButtonProps = {
  buttonText: string;
  modalContent: React.ReactNode;
  modalTitle: string;
  goBackText: string;
  proceedText: string;
  onProceed: () => void;
  buttonIcon?: IconType;
  goBackIcon?: IconType;
  proceedIcon?: IconType;
};

const ModalButton: React.FC<ModalButtonProps> = ({
  buttonText,
  modalContent,
  modalTitle,
  goBackText,
  proceedText,
  onProceed,
  buttonIcon: ButtonIcon,
  goBackIcon: GoBackIcon,
  proceedIcon: ProceedIcon,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="px-4 py-64 bg-slate-900 grid place-content-center">
      <button
        onClick={() => setIsOpen(true)}
        className="bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-medium px-4 py-2 rounded hover:opacity-90 transition-opacity"
      >
        {ButtonIcon && <ButtonIcon />}
        {buttonText}
      </button>
      <SpringModal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        modalContent={modalContent}
        modalTitle={modalTitle}
        goBackText={goBackText}
        proceedText={proceedText}
        onProceed={onProceed}
        proceedIcon={ProceedIcon}
      />
    </div>
  );
};

type SpringModalProps = {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  modalContent: React.ReactNode;
  modalTitle: string;
  goBackText: string;
  proceedText: string;
  onProceed: () => void;
  goBackIcon?: IconType;
  proceedIcon?: IconType;
};

const SpringModal: React.FC<SpringModalProps> = ({
  isOpen,
  setIsOpen,
  modalContent,
  modalTitle,
  goBackText,
  proceedText,
  onProceed,
  goBackIcon: GoBackIcon,
  proceedIcon: ProceedIcon,
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsOpen(false)}
          className="bg-slate-900/20 backdrop-blur p-8 fixed inset-0 z-50 grid place-items-center overflow-y-scroll cursor-pointer"
        >
          <motion.div
            initial={{ scale: 0, rotate: "12.5deg" }}
            animate={{ scale: 1, rotate: "0deg" }}
            exit={{ scale: 0, rotate: "0deg" }}
            onClick={(e) => e.stopPropagation()}
            className="bg-gradient-to-br from-violet-600 to-indigo-600 text-white p-6 rounded-lg w-full max-w-lg shadow-xl cursor-default relative overflow-hidden"
          >
            <h3 className="text-3xl font-bold text-center mb-2">
              {modalTitle}
            </h3>
            {modalContent}
            <div className="flex gap-2">
              <button
                onClick={() => setIsOpen(false)}
                className="bg-transparent hover:bg-white/10 transition-colors text-white font-semibold w-full py-2 rounded"
              >
                {goBackText}
              </button>
              <button
                onClick={onProceed}
                className="bg-white hover:opacity-90 transition-opacity text-indigo-600 font-semibold w-full py-2 rounded"
              >
                {proceedText}
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export { ModalButton, SpringModal };
