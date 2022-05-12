import styled from 'styled-components'

export const Container = styled.form`
  h2 {
    color: var(--text-title);
    font-size: 1.4rem;
    margin-bottom: 2rem;
  }

  // aplica estilo em botao somente do tipo submit
  button[type='submit'] {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    background: var(--green);
    color: #fff;
    border-radius: 0.25rem;
    border: 0;
    font-size: 1rem;
    margin-top: 1.5rem;
    transition: filter 0.2s;
    font-weight: 600;

    &:hover {
      filter: brightness(0.9);
    }
  }
`

export const Context = styled.div`
  margin: 0 auto;
  padding: 1rem 2rem 3rem 1rem;
  display: grid;
  grid-template-columns: repeat(3, 3fr);
  gap: 1rem 2rem;
`
