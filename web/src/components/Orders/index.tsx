import React, { useEffect } from "react";
import { Container } from "./styles";
import { OrdersBoard } from "../OrdersBoard";
import type { Order } from "../../types/Order";
import { api } from "../../utils/api";

export function Orders() {
    const [orders, setOrders] = React.useState<Order[]>([]);

    useEffect(() => {
        api.get("/orders").then(({ data }) => {
            setOrders(data);
        });
    }, []);

    const waiting = orders.filter((order) => order.status === "WAITING");
    const inProduction = orders.filter(
        (order) => order.status === "IN_PRODUCTION"
    );
    const done = orders.filter((order) => order.status === "DONE");

    return (
        <Container>
            <OrdersBoard icon="⏱️" title="Fila de espera" orders={waiting} />
            <OrdersBoard
                icon="👩‍🍳"
                title="Em preparação"
                orders={inProduction}
            />
            <OrdersBoard icon="✅" title="Pronto!" orders={done} />
        </Container>
    );
}
