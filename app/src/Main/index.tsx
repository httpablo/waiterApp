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

export function Main() {
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
                    <Button
                        onPress={() => alert("Novo pedido")}
                        disabled
                    >
                        Novo Pedido
                    </Button>
                </FooterConatiner>
            </Footer>
        </>
    );
}
