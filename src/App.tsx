import { useState } from 'react'
import { Dashboard } from './components/Dashboard'
import { Header } from './components/Header'
import { NewClientModal } from './components/NewClientModal'
import { GlobalStyle } from './styles/global'

export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] =
    useState(false) // se o modal de Transaction esta aberto

  function handleOpenNewTransactionModal() {
    // funcao para abrir modal
    setIsNewTransactionModalOpen(true)
  }

  function handleCloseNewTransactionModal() {
    // funcao para fechar modal
    setIsNewTransactionModalOpen(false)
  }
  return (
    <div>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
      <Dashboard />
      <NewClientModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      />
      <GlobalStyle />
    </div>
  )
}
