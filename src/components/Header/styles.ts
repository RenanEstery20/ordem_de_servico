import styled from 'styled-components'

export const Container = styled.header`
  background: var(--text-title);
`

export const Content = styled.div`
  max-width: 2550px;
  margin: 0 auto;
  padding: 2rem 1rem 3rem;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  button {
    font-size: 1rem;
    color: #fff;
    background: var(--green);
    border: 0;
    padding: 0 3rem;
    border-radius: 0.25rem;
    height: 3rem;
  }

  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.9);
  }
`
