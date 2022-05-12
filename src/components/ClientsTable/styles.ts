import styled from 'styled-components'

export const Container = styled.div`
  margin-top: 4rem;

  table {
    width: 100%; // lergura 100%
    border-spacing: 0 0.5rem; // espaço entre os itens da tabela

    th {
      // cabeçario da tabela
      color: var(--text-body); // cor da letra
      font-weight: 400; // tonalidade do negrito
      padding: 1rem 2rem; // espeçamento interno
      text-align: left; // alinhando o texto a esquerda
      line-height: 1.5rem; // altura da linha
    }

    td {
      padding: 1rem 2rem;
      border: 0;
      background: var(--shape);
      color: var(--text-body);
      border-radius: 0.25rem;

      &:first-child {
        // quando for o primeiro td
        color: var(--text-title); // coloca essa cor
      }

      &.deposit {
        // se tiver uma class com nome deposit
        color: var(--green); // deixa a linha verde
      }

      &.withdraw {
        // se tiver uma class com nome withdraw
        color: var(--red); // deixa a linha vermelha
      }
    }
  }
`
