import {
    Container,
    CategoriesContainer,
    MenuContainer,
    Footer,
    FooterConatiner,
} from "./styles";

import { Header } from "../components/Header";
import { Categories } from "../components/Categories";
import { Menu } from "../components/Menu";
import { Button } from "../components/Button";
import { TableModal } from "../components/TableModal";
import React from "react";
import { Cart } from "../components/Cart";
import { CartItem } from "../components/types/CartItem";
import { Product } from "../components/types/Product";

export function Main() {
    const [isTableModalVisible, setIsTableModalVisible] = React.useState(false);
    const [selectedTable, setSelectedTable] = React.useState("");
    const [cartItems, setCartItems] = React.useState<CartItem[]>([]);

    function handleSaveTable(table: string) {
        setSelectedTable(table);
        setIsTableModalVisible(false);
    }

    function handleResetOrder() {
        setSelectedTable("");
        setCartItems([]);
    }

    function updateCartItemQuantity(product: Product, change: number) {
        setCartItems((prevState) => {
            const itemIndex = prevState.findIndex(
                (cartItem) => cartItem.product._id === product._id
            );

            if (itemIndex < 0 && change > 0) {
                return prevState.concat({
                    quantity: 1,
                    product,
                });
            }

            const newCartItems = [...prevState];
            const item = newCartItems[itemIndex];

            if (item.quantity + change <= 0) {
                newCartItems.splice(itemIndex, 1);
                return newCartItems;
            }

            newCartItems[itemIndex] = {
                ...item,
                quantity: item.quantity + change,
            };

            return newCartItems;
        });
    }

    function handleAddToCart(product: Product) {
        if (!selectedTable) {
            setIsTableModalVisible(true);
        }

        updateCartItemQuantity(product, 1);
    }

    function handleDecrementCartItem(product: Product) {
        updateCartItemQuantity(product, -1);
    }

    return (
        <>
            <Container>
                <Header
                    selectedTable={selectedTable}
                    onCancelOrder={handleResetOrder}
                />

                <CategoriesContainer>
                    <Categories />
                </CategoriesContainer>

                <MenuContainer>
                    <Menu onAddToCart={handleAddToCart} />
                </MenuContainer>
            </Container>
            <Footer>
                <FooterConatiner>
                    {!selectedTable && (
                        <Button onPress={() => setIsTableModalVisible(true)}>
                            Novo Pedido
                        </Button>
                    )}

                    {selectedTable && (
                        <Cart
                            cartItems={cartItems}
                            onAdd={handleAddToCart}
                            onDecrement={handleDecrementCartItem}
                            onConfirmOrder={handleResetOrder}
                        />
                    )}
                </FooterConatiner>
            </Footer>

            <TableModal
                visible={isTableModalVisible}
                onClose={() => setIsTableModalVisible(false)}
                onSave={handleSaveTable}
            />
        </>
    );
}
