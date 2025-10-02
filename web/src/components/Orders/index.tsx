import React from "react";
import { Container } from "./styles";
import { OrdersBoard } from "../OrdersBoard";
import type { Order } from "../../types/Order";

const orders: Order[] = [
    {
        _id: "68d566c6476edfe3f7455adf",
        table: "123",
        status: "DONE",
        products: [
            {
                product: {
                    _id: "68d55c8141b60c1758fe92b7",
                    name: "Pizza quatro queijos",
                    imagePath: "1758813313757-quatro-queijos.png",
                    price: 40,
                },
                quantity: 3,
                _id: "68d566c6476edfe3f7455ae0",
            },
            {
                product: {
                    _id: "68d55c8141b60c1758fe92b7",
                    name: "Pizza quatro queijos",
                    imagePath: "1758813313757-quatro-queijos.png",
                    price: 40,
                },
                quantity: 3,
                _id: "68d566c6476edfe3f7455ae0",
            },
        ],
    },
];

export function Orders() {
    return (
        <Container>
            <OrdersBoard icon="⏱️" title="Fila de espera" orders={orders} />
            <OrdersBoard icon="👩‍🍳" title="Em preparação" orders={[]} />
            <OrdersBoard icon="✅" title="Pronto!" orders={[]} />
        </Container>
    );
}
