'use client';

import { createContext, useContext, useState, ReactNode } from 'react';
import WaitlistModal from '@/components/modals/WaitlistModal';
import EarlyCreatorModal from '@/components/modals/EarlyCreatorModal';

type ModalType = 'waitlist' | 'early-creator' | null;

interface ModalContextType {
  openModal: (modal: Exclude<ModalType, null>) => void;
  closeModal: () => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export function ModalProvider({ children }: { children: ReactNode }) {
  const [openModal, setOpenModal] = useState<ModalType>(null);

  const handleOpenModal = (modal: Exclude<ModalType, null>) => {
    setOpenModal(modal);
  };

  const handleCloseModal = () => {
    setOpenModal(null);
  };

  return (
    <ModalContext.Provider value={{ openModal: handleOpenModal, closeModal: handleCloseModal }}>
      {children}
      <WaitlistModal isOpen={openModal === 'waitlist'} onClose={handleCloseModal} />
      <EarlyCreatorModal isOpen={openModal === 'early-creator'} onClose={handleCloseModal} />
    </ModalContext.Provider>
  );
}

export function useModal() {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error('useModal must be used within ModalProvider');
  }
  return context;
}
