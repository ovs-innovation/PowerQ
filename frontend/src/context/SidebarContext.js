import React, { useState, useMemo, createContext } from "react";

// create context
export const SidebarContext = createContext();

export const SidebarProvider = ({ children }) => {
  const [categoryDrawerOpen, setCategoryDrawerOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const toggleCategoryDrawer = () => setCategoryDrawerOpen(!categoryDrawerOpen);
  const closeCategoryDrawer = () => setCategoryDrawerOpen(false);

  const toggleModal = () => setIsModalOpen(!isModalOpen);
  const closeModal = () => setIsModalOpen(false);

  const handleChangePage = (p) => {
    setCurrentPage(p);
  };

  const value = useMemo(
    () => ({
      categoryDrawerOpen,
      toggleCategoryDrawer,
      closeCategoryDrawer,
      isModalOpen,
      toggleModal,
      closeModal,
      currentPage,
      setCurrentPage,
      handleChangePage,
      isLoading,
      setIsLoading,
    }),

    [categoryDrawerOpen, isModalOpen, currentPage, isLoading]
  );

  return (
    <SidebarContext.Provider value={value}>{children}</SidebarContext.Provider>
  );
};
