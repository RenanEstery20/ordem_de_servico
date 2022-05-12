import styled from 'styled-components'

export const InputForm = styled.input`
  width: 100%;
  padding: 0 1.5rem;
  height: 4rem;
  border-radius: 0.25rem;
  border: 1px solid #d7d7d7;
  background: #e7e9ee;
  font-weight: 400;
  font-size: 1rem;
  justify-content: space-between;

  &::placeholder {
    color: var(--text-body);
  }

  & + input {
  }
`

export const Fieldset = styled.fieldset`
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  padding-block-start: 0em;
  padding-inline-start: 0em;
  padding-inline-end: 0em;
  padding-block-end: 0em;
  min-inline-size: min-content;
  border-width: 0px;
  border-style: groove;
  border-color: var(--text-body);
  border-image: initial;
`
