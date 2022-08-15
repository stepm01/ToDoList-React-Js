import { useCallback, useState } from "react";

export const useTodoModal = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentTodoId, setCurrentTodoId] = useState();

    const openModal = useCallback((todoId) => {
        setCurrentTodoId(todoId)
        setIsModalOpen(true)
      },[]);

      const closeModal = useCallback(() => {
        setCurrentTodoId(undefined)
        setIsModalOpen(false)
      },[])

      return {
        isModalOpen,
        openModal,
        closeModal,
        currentTodoId
      }
}