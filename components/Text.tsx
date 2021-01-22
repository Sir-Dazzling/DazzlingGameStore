import React from 'react';
import styled from 'styled-components/native';

const TextStyle = ({ ...props }) =>
{
    return <Text {...props}>{props.children}</Text>
};

const Text = styled.Text`
    font-family: "Avenir Next";
    color: ${(props: any) => props.color ?? "#ffffff"};

    ${({ title, large, medium, small }: any) =>
    {
        switch (true)
        {
            case title:
                return `font-size: 32px`;

            case large:
                return `font-size: 20px`;

            case medium:
                return `font-size: 16px`;

            case small:
                return `font-size: 13px`;

            default:
                return `font-size: 14px`;
        }
    }};

    ${({ light, bold, bolder }: any) =>
    {
        switch (true)
        {
            case light:
                return `font-weight: 200`;

            case bold:
                return `font-weight: 600`;

            case bolder:
                return `font-weight: 700`;

            default:
                return `font-weight: 400`;
        }
    }};

    ${({ center, right }: any) =>
    {
        switch (true)
        {
            case center:
                return `text-align: center`;

            case right:
                return `text-align: right`;

            default:
                return `text-align: left`;
        }
    }};
`;

export default TextStyle;