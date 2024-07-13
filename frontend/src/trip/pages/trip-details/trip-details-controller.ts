import { useState } from "react";

export function useTripDetailsController() {
  const [isCreateActivityModalOpen, setIsCreateActivityModalOpen] =
    useState(false);

  function openCreateActivityModal() {
    setIsCreateActivityModalOpen(true);
  }

  function closeCreateActivityModal() {
    setIsCreateActivityModalOpen(false);
  }
  return {
    isCreateActivityModalOpen,
    openCreateActivityModal,
    closeCreateActivityModal,
  };
}
