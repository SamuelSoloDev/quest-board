import { createPortal } from "react-dom";

function Modal({ children}) {
  const portalRoot = document.getElementById("portal-root");

  return createPortal(
    <div className="overlay fixed inset-0
    bg-black/50
    flex
    items-center
    justify-center
    z-50" >
      <div
        className="modal w-[90%]
    h-[90%] border rounded-md"
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>,
    portalRoot
  );
}

export default Modal;