import styled from "styled-components/native";

interface ContainerProps {
    bgColor: string;
}

export const Container = styled.TouchableOpacity<ContainerProps>`
    background: ${(props: { bgColor: any }) => props.bgColor};
    border-radius: 48px;
    padding: 14px 24px;
    align-items: center;
    justify-content: center;
`;
