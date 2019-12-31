import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Table, Content, Actions } from './styles';

export default function Students() {
  return (
    <Container>
      <Actions>
        <h1>Gerenciando alunos</h1>
        <div>
          <Link to="/students-create">+ Cadastrar</Link>
          <button type="button"> + Cadastrar</button>

          <input type="text" placeholder="Buscar aluno" />
        </div>
      </Actions>
      <Content>
        <Table>
          <thead>
            <tr>
              <th>NAME</th>
              <th>E-MAIL</th>
              <th>AGE</th>
              <th />
              <th />
            </tr>
          </thead>
          <tbody>
            <tr key="">
              <td>Danilo de Sousa</td>
              <td>danilods@teste.com</td>
              <td>33</td>
              <td align="right">editar</td>
              <td align="left">apagar</td>
            </tr>
            <tr key="">
              <td>Danilo de Sousa</td>
              <td>danilods@teste.com</td>
              <td>33</td>
              <td align="right">editar</td>
              <td align="left">apagar</td>
            </tr>
            <tr key="">
              <td>Danilo de Sousa</td>
              <td>danilods@teste.com</td>
              <td>33</td>
              <td align="right">editar</td>
              <td align="left">apagar</td>
            </tr>
            <tr key="">
              <td>Danilo de Sousa</td>
              <td>danilods@teste.com</td>
              <td>33</td>
              <td align="right">editar</td>
              <td align="left">apagar</td>
            </tr>
            <tr key="">
              <td>Danilo de Sousa</td>
              <td>danilods@teste.com</td>
              <td>33</td>
              <td align="right">editar</td>
              <td align="left">apagar</td>
            </tr>
            <tr key="">
              <td>Danilo de Sousa</td>
              <td>danilods@teste.com</td>
              <td>33</td>
              <td align="right">editar</td>
              <td align="left">apagar</td>
            </tr>
            <tr key="">
              <td>Danilo de Sousa</td>
              <td>danilods@teste.com</td>
              <td>33</td>
              <td align="right">editar</td>
              <td align="left">apagar</td>
            </tr>
            <tr key="">
              <td>Danilo de Sousa</td>
              <td>danilods@teste.com</td>
              <td>33</td>
              <td align="right">editar</td>
              <td align="left">apagar</td>
            </tr>
            <tr key="">
              <td>Danilo de Sousa</td>
              <td>danilods@teste.com</td>
              <td>33</td>
              <td align="right">editar</td>
              <td align="left">apagar</td>
            </tr>
            <tr key="">
              <td>Danilo de Sousa</td>
              <td>danilods@teste.com</td>
              <td>33</td>
              <td align="right">editar</td>
              <td align="left">apagar</td>
            </tr>
          </tbody>
        </Table>
      </Content>
    </Container>
  );
}
