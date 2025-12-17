/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';
import React from 'react'
import styled from 'styled-components';

type Props = {
    color: string;
    // children?: React.ReactNode;
}

export const ColoredFrameComponent: React.FC<Props> = ({ color, children }) => {

    const frameStyle = css`
        border : 1px solid black;
        background : ${color};
        text-align: center;
        width:100%;
        border-radius:5px;
    `;

    // const Frame = styled.button`
    //     border : 1px solid black;
    //     background : ${color};
    //     text-align: center;
    //     width:100%;
    //     border-radius:5px;
    // `;

    return (
        <button css={frameStyle}>-</button>
        // <Frame>{children}</Frame>
    )
}
