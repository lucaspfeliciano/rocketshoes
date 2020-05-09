import React from 'react';
import { MdAddCircleOutline, MdRemoveCircleOutline, MdDelete } from 'react-icons/md';

import { Container, ProductTable, Total } from './styles';

export default function Cart() {
    return (
        <Container>
            <ProductTable>
                <thead>
                    <tr>
                        <th />
                        <th>PRODUTO</th>
                        <th>QUANTIDADE</th>
                        <th>SUBTOTAL</th>
                        <th />
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <img src="https://static.netshoes.com.br/produtos/tenis-adidas-run-falcon-feminino/12/NQQ-0553-012/NQQ-0553-012_zoom2.jpg?ts=1587049970&ims=326x" alt="Tenis Adidas"/>
                        </td>
                        <td>
                            <strong>Tênis Adidas T50</strong>
                             <span>R$149,90</span>
                         </td>
                         <td>
                             <div>
                                <button type="button">
                                    <MdRemoveCircleOutline size={20} color="00BFFF" />
                                </button>
                                <input type="number" readOnly value={2} />
                                <button type="button">
                                    <MdAddCircleOutline size={20} color="00BFFF" />
                                </button>
                            </div>
                         </td>
                         <td>
                             <strong>R$299,80</strong>
                         </td>
                         <td>
                             <button type="button">
                                <MdDelete size={20} color="00BFFF" />
                             </button>
                         </td>
                    </tr>
                </tbody>
            </ProductTable>

            <footer>
                <button type="button">Finalizar pedido</button>
                <Total>
                    <span>TOTAL</span>
                    <strong>R$149,90</strong>
                </Total>
            </footer>
        </Container>
    )
}