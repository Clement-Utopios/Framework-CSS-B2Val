// ============================================
// CSS-IN-JS - EMOTION EXAMPLES
// Formation Frameworks CSS - Utopios
// ============================================

// Installation:
// npm install @emotion/react @emotion/styled

/** @jsxImportSource @emotion/react */
import { css, keyframes, Global } from '@emotion/react';
import styled from '@emotion/styled';

// ============================================
// 1. THEME CONFIGURATION
// ============================================
export const theme = {
  colors: {
    primary: '#6366f1',
    primaryDark: '#4f46e5',
    secondary: '#64748b',
    success: '#22c55e',
    warning: '#f59e0b',
    danger: '#ef4444',
    background: '#ffffff',
    surface: '#f8fafc',
    text: '#1e293b',
    textMuted: '#64748b',
    border: '#e2e8f0',
  },
  space: [0, 4, 8, 16, 24, 32, 48, 64],
  radii: {
    sm: '4px',
    md: '8px',
    lg: '12px',
    xl: '16px',
    full: '9999px',
  },
  shadows: {
    sm: '0 1px 2px rgba(0,0,0,0.05)',
    md: '0 4px 6px rgba(0,0,0,0.1)',
    lg: '0 10px 15px rgba(0,0,0,0.1)',
  },
  fonts: {
    body: "'Inter', system-ui, sans-serif",
    heading: "'Poppins', sans-serif",
  },
  fontSizes: {
    xs: '0.75rem',
    sm: '0.875rem',
    md: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
    '2xl': '1.5rem',
    '3xl': '1.875rem',
    '4xl': '2.25rem',
  },
  fontWeights: {
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },
  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
  },
};

// ============================================
// 2. GLOBAL STYLES
// ============================================
export const globalStyles = css`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    scroll-behavior: smooth;
    font-size: 16px;
  }

  body {
    font-family: ${theme.fonts.body};
    background: ${theme.colors.background};
    color: ${theme.colors.text};
    line-height: 1.6;
    -webkit-font-smoothing: antialiased;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${theme.fonts.heading};
    font-weight: ${theme.fontWeights.semibold};
    line-height: 1.3;
  }

  a {
    color: ${theme.colors.primary};
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }

  ::selection {
    background: ${theme.colors.primary}30;
    color: ${theme.colors.text};
  }
`;

// ============================================
// 3. CSS PROP STYLES (Inline Emotion CSS)
// ============================================

// Style objects réutilisables avec css prop
export const containerStyles = css`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${theme.space[4]}px;
`;

export const cardStyles = css`
  background: ${theme.colors.background};
  border: 1px solid ${theme.colors.border};
  border-radius: ${theme.radii.lg};
  padding: ${theme.space[5]}px;
  box-shadow: ${theme.shadows.sm};
  transition: all 0.2s ease;
  
  &:hover {
    box-shadow: ${theme.shadows.md};
  }
`;

export const buttonBaseStyles = css`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 10px 20px;
  font-size: ${theme.fontSizes.sm};
  font-weight: ${theme.fontWeights.medium};
  border-radius: ${theme.radii.md};
  border: none;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
  
  &:focus-visible {
    outline: 2px solid ${theme.colors.primary};
    outline-offset: 2px;
  }
`;

export const primaryButtonStyles = css`
  ${buttonBaseStyles}
  background: ${theme.colors.primary};
  color: white;
  
  &:hover:not(:disabled) {
    background: ${theme.colors.primaryDark};
    transform: translateY(-1px);
  }
`;

export const outlineButtonStyles = css`
  ${buttonBaseStyles}
  background: transparent;
  color: ${theme.colors.primary};
  border: 2px solid ${theme.colors.primary};
  
  &:hover:not(:disabled) {
    background: ${theme.colors.primary};
    color: white;
  }
`;

export const inputStyles = css`
  width: 100%;
  padding: 10px 16px;
  font-size: ${theme.fontSizes.sm};
  color: ${theme.colors.text};
  background: ${theme.colors.background};
  border: 1px solid ${theme.colors.border};
  border-radius: ${theme.radii.md};
  transition: all 0.15s ease;
  
  &::placeholder {
    color: ${theme.colors.textMuted};
  }
  
  &:focus {
    outline: none;
    border-color: ${theme.colors.primary};
    box-shadow: 0 0 0 3px ${theme.colors.primary}20;
  }
`;

// ============================================
// 4. STYLED COMPONENTS (Emotion)
// ============================================

// Container
export const Container = styled.div`
  width: 100%;
  max-width: ${props => props.maxWidth || '1200px'};
  margin: 0 auto;
  padding: 0 ${theme.space[4]}px;
`;

// Button avec variants
export const Button = styled.button`
  ${buttonBaseStyles}
  
  ${props => {
    switch (props.variant) {
      case 'outline':
        return css`
          background: transparent;
          color: ${theme.colors.primary};
          border: 2px solid ${theme.colors.primary};
          &:hover:not(:disabled) {
            background: ${theme.colors.primary};
            color: white;
          }
        `;
      case 'ghost':
        return css`
          background: transparent;
          color: ${theme.colors.text};
          &:hover:not(:disabled) {
            background: ${theme.colors.surface};
          }
        `;
      case 'danger':
        return css`
          background: ${theme.colors.danger};
          color: white;
          &:hover:not(:disabled) {
            background: #dc2626;
          }
        `;
      default:
        return css`
          background: ${theme.colors.primary};
          color: white;
          &:hover:not(:disabled) {
            background: ${theme.colors.primaryDark};
            transform: translateY(-1px);
          }
        `;
    }
  }}
  
  ${props => props.size === 'sm' && css`
    padding: 6px 12px;
    font-size: ${theme.fontSizes.xs};
  `}
  
  ${props => props.size === 'lg' && css`
    padding: 14px 28px;
    font-size: ${theme.fontSizes.md};
  `}
  
  ${props => props.fullWidth && css`
    width: 100%;
  `}
`;

// Card
export const Card = styled.div`
  background: ${theme.colors.background};
  border: 1px solid ${theme.colors.border};
  border-radius: ${theme.radii.lg};
  padding: ${theme.space[5]}px;
  box-shadow: ${theme.shadows.sm};
  transition: all 0.2s ease;
  
  ${props => props.hoverable && css`
    &:hover {
      box-shadow: ${theme.shadows.lg};
      transform: translateY(-4px);
    }
  `}
  
  ${props => props.flat && css`
    box-shadow: none;
    border: none;
    background: ${theme.colors.surface};
  `}
`;

export const CardHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: ${theme.space[3]}px;
  margin-bottom: ${theme.space[3]}px;
  border-bottom: 1px solid ${theme.colors.border};
`;

export const CardTitle = styled.h3`
  font-size: ${theme.fontSizes.lg};
  font-weight: ${theme.fontWeights.semibold};
  color: ${theme.colors.text};
  margin: 0;
`;

// Input
export const Input = styled.input`
  ${inputStyles}
  
  ${props => props.error && css`
    border-color: ${theme.colors.danger};
    &:focus {
      border-color: ${theme.colors.danger};
      box-shadow: 0 0 0 3px ${theme.colors.danger}20;
    }
  `}
  
  ${props => props.size === 'sm' && css`
    padding: 6px 12px;
    font-size: ${theme.fontSizes.xs};
  `}
  
  ${props => props.size === 'lg' && css`
    padding: 14px 20px;
    font-size: ${theme.fontSizes.md};
  `}
`;

// Badge
export const Badge = styled.span`
  display: inline-flex;
  align-items: center;
  padding: 2px 10px;
  font-size: ${theme.fontSizes.xs};
  font-weight: ${theme.fontWeights.medium};
  border-radius: ${theme.radii.full};
  
  ${props => {
    const color = theme.colors[props.color] || theme.colors.primary;
    return css`
      background: ${color}20;
      color: ${color};
    `;
  }}
`;

// Avatar
export const Avatar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${props => props.size || '40px'};
  height: ${props => props.size || '40px'};
  border-radius: ${theme.radii.full};
  background: ${theme.colors.primary};
  color: white;
  font-weight: ${theme.fontWeights.semibold};
  font-size: ${props => {
    const size = parseInt(props.size) || 40;
    return `${size * 0.4}px`;
  }};
  overflow: hidden;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

// Flex utility
export const Flex = styled.div`
  display: flex;
  flex-direction: ${props => props.direction || 'row'};
  justify-content: ${props => props.justify || 'flex-start'};
  align-items: ${props => props.align || 'stretch'};
  gap: ${props => props.gap || '0'};
  flex-wrap: ${props => props.wrap ? 'wrap' : 'nowrap'};
`;

// Grid utility
export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(${props => props.columns || 3}, 1fr);
  gap: ${props => props.gap || `${theme.space[4]}px`};
  
  @media (max-width: ${theme.breakpoints.md}) {
    grid-template-columns: repeat(${props => Math.min(props.columns || 3, 2)}, 1fr);
  }
  
  @media (max-width: ${theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
  }
`;

// ============================================
// 5. ANIMATIONS
// ============================================
export const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const slideIn = keyframes`
  from {
    transform: translateX(-20px);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

export const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

// Spinner component
export const Spinner = styled.div`
  width: ${props => props.size || '24px'};
  height: ${props => props.size || '24px'};
  border: 3px solid ${theme.colors.border};
  border-top-color: ${theme.colors.primary};
  border-radius: 50%;
  animation: ${spin} 0.8s linear infinite;
`;

// Animated container
export const AnimatedCard = styled(Card)`
  animation: ${fadeIn} 0.5s ease;
  animation-delay: ${props => props.delay || '0s'};
  animation-fill-mode: both;
`;

// ============================================
// 6. USAGE EXAMPLE
// ============================================
/*
// In your React component (App.jsx):

/** @jsxImportSource @emotion/react *\/
import { Global, ThemeProvider } from '@emotion/react';
import {
  globalStyles,
  theme,
  Container,
  Card,
  CardTitle,
  Button,
  Input,
  Badge,
  Avatar,
  Flex,
  Grid,
  Spinner,
  AnimatedCard,
} from './emotion-examples';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Global styles={globalStyles} />
      
      <Container>
        <Flex justify="space-between" align="center" css={{ padding: '20px 0' }}>
          <h1>Emotion CSS-in-JS Demo</h1>
          <Button>Get Started</Button>
        </Flex>
        
        <Grid columns={3} gap="24px">
          <AnimatedCard hoverable delay="0s">
            <CardTitle>Card 1</CardTitle>
            <p>Content with animation</p>
            <Flex gap="8px" css={{ marginTop: '16px' }}>
              <Badge color="primary">React</Badge>
              <Badge color="success">Emotion</Badge>
            </Flex>
          </AnimatedCard>
          
          <AnimatedCard hoverable delay="0.1s">
            <CardTitle>Card 2</CardTitle>
            <Input placeholder="Type something..." />
            <Button variant="outline" fullWidth css={{ marginTop: '12px' }}>
              Submit
            </Button>
          </AnimatedCard>
          
          <AnimatedCard hoverable delay="0.2s">
            <CardTitle>Card 3</CardTitle>
            <Flex gap="8px" align="center">
              <Avatar size="32px">JD</Avatar>
              <span>John Doe</span>
              <Spinner size="16px" />
            </Flex>
          </AnimatedCard>
        </Grid>
      </Container>
    </ThemeProvider>
  );
}

export default App;
*/

console.log('Emotion Examples loaded');
console.log('Import these components in your React application');
console.log('Remember to add /** @jsxImportSource @emotion/react */ at the top of your file');
