import { createPortal } from 'react-dom';

const Modal = ({ children }: { children: React.ReactNode }) => {
  if (typeof window === 'undefined') return null;

  return createPortal(
    <div className="fixed inset-0 flex items-center justify-center z-[999]">
      {children}
    </div>,
    document.body
  );
};

export default Modal;
