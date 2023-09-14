import { Fragment, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { Dialog, Transition } from "@headlessui/react";
import Link from "next/link";
import { Button } from ".";

/**
 * Drawer component that opens on user click.
 * @param heading - string. Shown at the top of the drawer.
 * @param open - boolean state. if true opens the drawer.
 * @param onClose - function should set the open state.
 * @param openFrom - right, left
 * @param children - react children node.
 */
function Drawer({ heading, open, onClose, openFrom = "right", children }) {
  const offScreen = {
    right: "translate-x-full",
    left: "-translate-x-full",
  };

  return (
    <Transition appear show={open} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0 left-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0">
          <div className="absolute inset-0 overflow-hidden">
            <div
              className={`fixed inset-y-0 flex max-w-full ${
                openFrom === "right" ? "right-0" : ""
              }`}
            >
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-300"
                enterFrom={offScreen[openFrom]}
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-300"
                leaveFrom="translate-x-0"
                leaveTo={offScreen[openFrom]}
              >
                <Dialog.Panel className="w-screen max-w-lg text-left font-body align-middle transition-all transform shadow-xl h-screen bg-[#031221]">
                  <header
                    className={`sticky top-0 flex items-center px-6 py-[3rem] font-body h-nav sm:px-8 md:px-12 ${
                      heading ? "justify-between" : "justify-end"
                    }`}
                  >
                    {heading !== null && (
                      <Dialog.Title>
                        <h2 className="text-[2.5rem] font-body text-white">
                          {heading}
                        </h2>
                      </Dialog.Title>
                    )}
                    <button
                      type="button"
                      className="p-4 -m-4 transition text-[2.4rem] font-body text-white hover:text-white/50"
                      onClick={onClose}
                    >
                      <AiOutlineClose />
                    </button>
                  </header>
                  <div className="font-body">
                    {children}
                    <div className="px-[20px] flex justify-center items-center flex-col gap-[12px] mt-[12px]">
                      <Link
                        href="/"
                        className="text-[20px] md:px-[16px] md:py-[10px] text-[#525252] font-[500] cursor-pointer font-body transition-all duration-500 hover:font-[600]"
                      >
                        Sign in
                      </Link>
                      <Button />
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}

/* Use for associating arialabelledby with the title*/
Drawer.Title = Dialog.Title;

export { Drawer };

export function useDrawer(openDefault = false) {
  const [isOpen, setIsOpen] = useState(openDefault);

  function openDrawer() {
    setIsOpen(true);
  }

  function closeDrawer() {
    setIsOpen(false);
  }

  return {
    isOpen,
    openDrawer,
    closeDrawer,
  };
}
