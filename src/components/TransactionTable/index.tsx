import React from "react";
import { Container } from "./styles";

export function TransactionTable () {
    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Titulo</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Transação</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>Desenvolvimento de Website</td>
                        <td className="winner">R$12.000</td>
                        <td>Desenvolvimento</td>
                        <td>07/12/2022</td>
                    </tr>
                    <tr>
                        <td>Monitor</td>
                        <td className="fall">- R$1.250</td>
                        <td>Desenvolvimento</td>
                        <td>07/12/2022</td>
                    </tr>
                </tbody>
            </table>
        </Container>
    );
}