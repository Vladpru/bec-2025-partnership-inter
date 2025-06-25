'use client'

import { ReactNode, useEffect, useState, useRef } from 'react';

interface ModalProps {
  children: ReactNode;
  onClose: () => void;
}

const Modal = ({ children, onClose }: ModalProps) => {
  const [show, setShow] = useState(false);
  const modalContentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setShow(true);
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  // Закриваємо модалку при кліку поза нею
  const handleBackdropClick = (e: React.MouseEvent) => {
    if (modalContentRef.current && !modalContentRef.current.contains(e.target as Node)) {
      onClose();
    }
  };

  return (
    <div
      onClick={handleBackdropClick}
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-black/40 backdrop-blur-[2px]
        transition-opacity duration-300 ${show ? 'opacity-100' : 'opacity-0'}`}
    >
      <div
        ref={modalContentRef}
        onClick={e => e.stopPropagation()} // щоб клік всередині модалки не закривав її
        className={`bg-extra_bg p-6 rounded-md max-w-md w-full relative shadow-lg
          transform transition-all duration-300 ease-out
          ${show ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}
      >
        {children}
      </div>
    </div>
  );
};

export default Modal;
