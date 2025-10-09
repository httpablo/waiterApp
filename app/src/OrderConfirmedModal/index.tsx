import { Modal } from "react-native";
import { Container, OkButton } from "./styles";
import { CheckCircle } from "../components/Icons/CheckCircle";
import { Text } from "../components/Text";

interface OrderConfirmedModalProps {
    visible: boolean;
    onOk: () => void;
}

export function OrderConfirmedModal({
    visible,
    onOk,
}: OrderConfirmedModalProps) {
    return (
        <Modal visible={visible} animationType="fade">
            <Container>
                <CheckCircle />

                <Text
                    size={20}
                    weight="600"
                    color="#fff"
                    style={{ marginTop: 12, marginBottom: 4 }}
                >
                    Pedido Confirmado
                </Text>

                <Text color="#fff" opacity={0.9}>
                    O pedido já entrou na fila de produção!
                </Text>

                <OkButton onPress={onOk}>
                    <Text color="#d73035" weight="600">
                        Ok
                    </Text>
                </OkButton>
            </Container>
        </Modal>
    );
}
