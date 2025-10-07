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

export function Main() {
    const [isTableModalVisible, setIsTableModalVisible] = React.useState(false);
    const [selectedTable, setSelectedTable] = React.useState("");

    function handleSAaveTable(table: string) {
        setSelectedTable(table);
    }

    return (
        <>
            <Container>
                <Header />

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
                </FooterConatiner>
            </Footer>

            <TableModal
                visible={isTableModalVisible}
                onClose={() => setIsTableModalVisible(false)}
                onSave={handleSAaveTable}
            />
        </>
    );
}
