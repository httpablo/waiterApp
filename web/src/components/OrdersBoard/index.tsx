import React from "react";
import { Board, OrdersContainer } from "./styles";
import type { Order } from "../../types/Order";
import { OrderModal } from "../OrderModal";

interface OrdersBoardProps {
    icon: string;
    title: string;
    orders: Order[];
}

export function OrdersBoard({ icon, title, orders }: OrdersBoardProps) {
    const [isModalVisible, setIsModalVisible] = React.useState(false);

    function handleOpenOrder() {
        setIsModalVisible(true);
    }

    return (
        <Board>
            <OrderModal visible={isModalVisible} />

            <header>
                <span>{icon}</span>
                <strong>{title}</strong>
                <span>({orders.length})</span>
            </header>

            {orders.length > 0 && (
                <OrdersContainer>
                    {orders.map((order) => (
                        <button
                            onClick={handleOpenOrder}
                            type="button"
                            key={order._id}
                        >
                            <strong>Mesa {order.table}</strong>
                            <span>{order.products.length} itens</span>
                        </button>
                    ))}
                </OrdersContainer>
            )}
        </Board>
    );
}
