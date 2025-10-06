import { Text } from "../Text";
import { Container } from "./styles";

interface ButtonProps {
    children: string;
    onPress: () => void;
    disabled?: boolean;
}

export function Button({ children, onPress, disabled }: ButtonProps) {
    const backgroundColor = disabled ? "#999" : "#D73035";

    return (
        <Container
            onPress={onPress}
            disabled={disabled}
            bgColor={backgroundColor}
        >
            <Text weight="600" color="#fff">
                {children}
            </Text>
        </Container>
    );
}
