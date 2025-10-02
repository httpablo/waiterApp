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
    const [selectedOrder, setSelectedOrder] = React.useState<null | Order>(
        null
    );

    function handleOpenModal(order: Order) {
        setIsModalVisible(true);
        setSelectedOrder(order);
    }

    function handleCloseModal() {
        setIsModalVisible(false);
        setSelectedOrder(null);
    }

    return (
        <Board>
            <OrderModal
                visible={isModalVisible}
                order={selectedOrder}
                onClose={handleCloseModal}
            />

            <header>
                <span>{icon}</span>
                <strong>{title}</strong>
                <span>({orders.length})</span>
            </header>

            {orders.length > 0 && (
                <OrdersContainer>
                    {orders.map((order) => (
                        <button
                            onClick={() => handleOpenModal(order)}
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
