import { ActivityIndicator } from "react-native";
import {
    Container,
    CategoriesContainer,
    MenuContainer,
    Footer,
    FooterConatiner,
    CenterContainer,
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

import { Empty } from "../components/Icons/Empty";
import { Text } from "../components/Text";

export function Main() {
    const [isTableModalVisible, setIsTableModalVisible] = React.useState(false);
    const [selectedTable, setSelectedTable] = React.useState("");
    const [cartItems, setCartItems] = React.useState<CartItem[]>([]);
    const [isLoading, setIsLoading] = React.useState(false);
    const [products] = React.useState<Product[]>([]);

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

                {isLoading ? (
                    <CenterContainer>
                        <ActivityIndicator color="#d73035" size="large" />
                    </CenterContainer>
                ) : (
                    <>
                        <CategoriesContainer>
                            <Categories />
                        </CategoriesContainer>

                        {products.length > 0 ? (
                            <MenuContainer>
                                <Menu
                                    onAddToCart={handleAddToCart}
                                    products={products}
                                />
                            </MenuContainer>
                        ) : (
                            <CenterContainer>
                                <Empty />

                                <Text color="#666" style={{ marginTop: 24 }}>
                                    Nenhum produto foi encontrado!
                                </Text>
                            </CenterContainer>
                        )}
                    </>
                )}
            </Container>

            <Footer>
                <FooterConatiner>
                    {!selectedTable && (
                        <Button
                            onPress={() => setIsTableModalVisible(true)}
                            disabled={isLoading}
                        >
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
