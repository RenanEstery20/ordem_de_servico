import { Container } from './styles'

export function ClintsTable() {
  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Sobrenome</th>
            <th>Cidade</th>
            <th>Bairro</th>
            <th>Rua</th>
            <th>Nº</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Cleiton</td>
            <td>Paz</td>
            <td>Carazinho</td>
            <td>Centro</td>
            <td>Rua da facada</td>
            <td>1637</td>
          </tr>
          <tr>
            <td>Cleiton</td>
            <td>Paz</td>
            <td>Carazinho</td>
            <td>Centro</td>
            <td>Rua da facada</td>
            <td>1637</td>
          </tr>
          <tr>
            <td>Cleiton</td>
            <td>Paz</td>
            <td>Carazinho</td>
            <td>Centro</td>
            <td>Rua da facada</td>
            <td>1637</td>
          </tr>
        </tbody>
      </table>
    </Container>
  )
}
