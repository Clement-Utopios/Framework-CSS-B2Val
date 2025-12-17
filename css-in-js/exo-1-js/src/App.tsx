/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react'
import './App.css'
import { ColoredFrameComponent } from './components/ColoredFrameComponent'

function App() {
  const containerStyle = css`
    display:flex;
    gap: 7px;
    margin:7px 0;
  `;

  const globalContainerStyle = css`
    padding:5px;
  `;

  return (
    <>
      <div css={globalContainerStyle}>
        <div css={containerStyle}>
          <ColoredFrameComponent color='grey'/>
          <ColoredFrameComponent color='cyan'/>
          <ColoredFrameComponent color='grey'/>
        </div>
        <div css={containerStyle}>
          <ColoredFrameComponent color='white' />
          <ColoredFrameComponent color='white' />
        </div>
        <ColoredFrameComponent color='red' />

      </div>
    </>
  )
}

export default App
