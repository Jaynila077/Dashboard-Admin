"use client"

import { useStoreModal } from "@/hooks/use-store-modal"
import { Modal } from "@/components/ui/modal"

export const StoreModal = () => {

  const storeModal = useStoreModal();

  return (
    <Modal
        title="Create store"
        description="Create a new store"
        isOpen = {storeModal.isOpen}
        onClose={storeModal.onClose}
    >
      Store Form
    </Modal>
  );
}
