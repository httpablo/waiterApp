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
import { products } from "../mocks/products";

export function Main() {
    const [isTableModalVisible, setIsTableModalVisible] = React.useState(false);
    const [selectedTable, setSelectedTable] = React.useState("");
    const [cartItems, setCartItems] = React.useState<CartItem[]>([
        
    ]);

    function handleSaveTable(table: string) {
        setSelectedTable(table);
        setIsTableModalVisible(false);
    }

    function handleCancelOrder() {
        setSelectedTable("");
    }

    return (
        <>
            <Container>
                <Header
                    selectedTable={selectedTable}
                    onCancelOrder={handleCancelOrder}
                />

                <CategoriesContainer>
                    <Categories />
                </CategoriesContainer>

                <MenuContainer>
                    <Menu />
                </MenuContainer>
            </Container>
            <Footer>
                <FooterConatiner>
                    {!selectedTable && (
                        <Button onPress={() => setIsTableModalVisible(true)}>
                            Novo Pedido
                        </Button>
                    )}

                    {selectedTable && <Cart cartItems={cartItems} />}
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
