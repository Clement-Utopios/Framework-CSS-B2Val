/** @jsxImportSource @emotion/react */

import React from 'react'
import styled from 'styled-components';
import { css } from '@emotion/react'

type ButtonProps = {
    value: string;
    color?: string;
}

export const ButtonComponent: React.FC<ButtonProps> = ({ value, color }) => {
    // const Button = styled.button`
    //     padding: 10px 15px;
    //     background-color: ${color ?? "blue"};
    //     color:white;
    //     font-size:15px;
    //     cursor: pointer;
    //     border: none;
    //     border-radius:5px;

    //     &:hover {
    //         opacity:0.5;
    //     }
    // `;

    const buttonStyle = css`
        padding: 10px 15px;
        background-color: ${color ?? "blue"};
        color:white;
        font-size:15px;
        cursor: pointer;
        border: none;
        border-radius:5px;

        &:hover {
            opacity:0.1;
        }
    `;

    return (
    // <Button>{value}</Button>

    <button css={buttonStyle}>{value}</button>

  )
}
