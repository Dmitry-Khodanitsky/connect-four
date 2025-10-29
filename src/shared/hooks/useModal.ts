import { useState } from 'react'
import type { UseModalReturn } from './useModal.types'

const useModal = (): UseModalReturn => {
  const [isModalVisible, setIsModalVisible] = useState(false)

  const openModal = (): void => {
    setIsModalVisible(true)
  }
  const closeModal = (): void => {
    setIsModalVisible(false)
  }

  return { isModalVisible, openModal, closeModal }
}

export default useModal
