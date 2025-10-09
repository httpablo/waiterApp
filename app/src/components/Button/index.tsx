import { ActivityIndicator } from "react-native";
import { Text } from "../Text";
import { Container } from "./styles";

interface ButtonProps {
    children: string;
    onPress: () => void;
    disabled?: boolean;
    loading?: boolean;
}

export function Button({ children, onPress, disabled, loading }: ButtonProps) {
    const backgroundColor = disabled ? "#999" : "#D73035";

    return (
        <Container
            onPress={onPress}
            disabled={disabled || loading}
            bgColor={backgroundColor}
        >
            {!loading && (
                <Text weight="600" color="#fff">
                    {children}
                </Text>
            )}

            {loading && <ActivityIndicator color="#fff" />}
        </Container>
    );
}
