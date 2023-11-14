"use client";
import Link from "next/link";
import Image from "next/image";

interface CaresModalProps {
  closeCaresModal: () => void;
}

const PocketModal: React.FC<CaresModalProps> = ({ closeCaresModal }) => {
  return (
    <section className="fixed inset-0 flex items-center justify-center z-50">
      <div className="bg-black bg-opacity-50 absolute inset-0" />
      <div className="relative w-full max-w-md mx-2 bg-gray-800 rounded-lg shadow-lg md:mx-0">
        <header className="px-4 py-3 bg-gray-700 text-gray-50 rounded-t-lg">
          <h2 className="text-lg font-semibold">Modal Header</h2>
        </header>
        <main className="p-4 text-gray-300">
          <p>
            This is the body of the modal, where you can place your content.
          </p>
        </main>
        <footer className="flex justify-end px-4 py-3 bg-gray-700 rounded-b-lg">
          <button
            onClick={closeCaresModal}
            className="text-gray-50 border-gray-50 mr-2"
          >
            Cancel
          </button>
          <button className="text-gray-800 bg-gray-50">Confirm</button>
        </footer>
      </div>
    </section>
  );
};

export default PocketModal;
