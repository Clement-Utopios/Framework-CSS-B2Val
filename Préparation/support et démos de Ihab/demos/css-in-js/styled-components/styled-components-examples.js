// ============================================
// CSS-IN-JS - STYLED COMPONENTS EXAMPLES
// Formation Frameworks CSS - Utopios
// ============================================

// Installation:
// npm install styled-components
// npm install @types/styled-components --save-dev (pour TypeScript)

import styled, { css, keyframes, ThemeProvider, createGlobalStyle } from 'styled-components';

// ============================================
// 1. GLOBAL STYLES
// ============================================
export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  
  html {
    scroll-behavior: smooth;
  }
  
  body {
    font-family: 'Inter', system-ui, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.text};
    line-height: 1.6;
  }
  
  a {
    color: ${props => props.theme.colors.primary};
    text-decoration: none;
    
    &:hover {
      text-decoration: underline;
    }
  }
`;

// ============================================
// 2. THEME CONFIGURATION
// ============================================
export const lightTheme = {
  colors: {
    primary: '#6366f1',
    primaryHover: '#4f46e5',
    secondary: '#64748b',
    success: '#22c55e',
    warning: '#f59e0b',
    danger: '#ef4444',
    background: '#ffffff',
    backgroundAlt: '#f8fafc',
    text: '#1e293b',
    textMuted: '#64748b',
    border: '#e2e8f0',
  },
  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
    xxl: '3rem',
  },
  borderRadius: {
    sm: '0.375rem',
    md: '0.5rem',
    lg: '0.75rem',
    xl: '1rem',
    full: '9999px',
  },
  shadows: {
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1)',
    xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)',
  },
  transitions: {
    fast: '150ms ease',
    normal: '200ms ease',
    slow: '300ms ease',
  },
};

export const darkTheme = {
  ...lightTheme,
  colors: {
    ...lightTheme.colors,
    background: '#0f172a',
    backgroundAlt: '#1e293b',
    text: '#f8fafc',
    textMuted: '#94a3b8',
    border: '#334155',
  },
};

// ============================================
// 3. ANIMATIONS
// ============================================
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const pulse = keyframes`
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
`;

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

// ============================================
// 4. MIXINS (Helpers CSS réutilisables)
// ============================================
const flexCenter = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const absoluteFill = css`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;

const truncate = css`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

// ============================================
// 5. BUTTON COMPONENTS
// ============================================
const ButtonBase = styled.button`
  ${flexCenter}
  gap: ${props => props.theme.spacing.sm};
  padding: ${props => props.theme.spacing.sm} ${props => props.theme.spacing.lg};
  font-size: 0.9375rem;
  font-weight: 500;
  border-radius: ${props => props.theme.borderRadius.md};
  border: none;
  cursor: pointer;
  transition: all ${props => props.theme.transitions.normal};
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
  
  &:focus-visible {
    outline: 2px solid ${props => props.theme.colors.primary};
    outline-offset: 2px;
  }
`;

export const Button = styled(ButtonBase)`
  background: ${props => props.theme.colors.primary};
  color: white;
  
  &:hover:not(:disabled) {
    background: ${props => props.theme.colors.primaryHover};
    transform: translateY(-1px);
  }
  
  &:active:not(:disabled) {
    transform: translateY(0);
  }
`;

export const ButtonOutline = styled(ButtonBase)`
  background: transparent;
  color: ${props => props.theme.colors.primary};
  border: 2px solid ${props => props.theme.colors.primary};
  
  &:hover:not(:disabled) {
    background: ${props => props.theme.colors.primary};
    color: white;
  }
`;

export const ButtonGhost = styled(ButtonBase)`
  background: transparent;
  color: ${props => props.theme.colors.text};
  
  &:hover:not(:disabled) {
    background: ${props => props.theme.colors.backgroundAlt};
  }
`;

// Button sizes avec props
export const ButtonSized = styled(Button)`
  padding: ${props => {
    switch (props.size) {
      case 'sm': return `${props.theme.spacing.xs} ${props.theme.spacing.md}`;
      case 'lg': return `${props.theme.spacing.md} ${props.theme.spacing.xl}`;
      default: return `${props.theme.spacing.sm} ${props.theme.spacing.lg}`;
    }
  }};
  font-size: ${props => {
    switch (props.size) {
      case 'sm': return '0.8125rem';
      case 'lg': return '1.0625rem';
      default: return '0.9375rem';
    }
  }};
`;

// ============================================
// 6. CARD COMPONENTS
// ============================================
export const Card = styled.div`
  background: ${props => props.theme.colors.background};
  border: 1px solid ${props => props.theme.colors.border};
  border-radius: ${props => props.theme.borderRadius.lg};
  box-shadow: ${props => props.theme.shadows.sm};
  padding: ${props => props.theme.spacing.lg};
  transition: all ${props => props.theme.transitions.normal};
  animation: ${fadeIn} 0.5s ease;
  
  ${props => props.hoverable && css`
    &:hover {
      box-shadow: ${props.theme.shadows.lg};
      transform: translateY(-4px);
    }
  `}
`;

export const CardHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: ${props => props.theme.spacing.md};
  margin-bottom: ${props => props.theme.spacing.md};
  border-bottom: 1px solid ${props => props.theme.colors.border};
`;

export const CardTitle = styled.h3`
  font-size: 1.125rem;
  font-weight: 600;
  color: ${props => props.theme.colors.text};
  margin: 0;
`;

export const CardContent = styled.div`
  color: ${props => props.theme.colors.textMuted};
`;

export const CardFooter = styled.div`
  display: flex;
  align-items: center;
  gap: ${props => props.theme.spacing.md};
  padding-top: ${props => props.theme.spacing.md};
  margin-top: ${props => props.theme.spacing.md};
  border-top: 1px solid ${props => props.theme.colors.border};
`;

// ============================================
// 7. INPUT COMPONENTS
// ============================================
export const Input = styled.input`
  width: 100%;
  padding: ${props => props.theme.spacing.sm} ${props => props.theme.spacing.md};
  font-size: 0.9375rem;
  color: ${props => props.theme.colors.text};
  background: ${props => props.theme.colors.background};
  border: 1px solid ${props => props.theme.colors.border};
  border-radius: ${props => props.theme.borderRadius.md};
  transition: all ${props => props.theme.transitions.fast};
  
  &::placeholder {
    color: ${props => props.theme.colors.textMuted};
  }
  
  &:focus {
    outline: none;
    border-color: ${props => props.theme.colors.primary};
    box-shadow: 0 0 0 3px ${props => props.theme.colors.primary}20;
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
  
  ${props => props.error && css`
    border-color: ${props.theme.colors.danger};
    
    &:focus {
      border-color: ${props.theme.colors.danger};
      box-shadow: 0 0 0 3px ${props.theme.colors.danger}20;
    }
  `}
`;

export const Label = styled.label`
  display: block;
  font-size: 0.875rem;
  font-weight: 500;
  color: ${props => props.theme.colors.text};
  margin-bottom: ${props => props.theme.spacing.xs};
`;

export const FormGroup = styled.div`
  margin-bottom: ${props => props.theme.spacing.md};
`;

export const ErrorMessage = styled.span`
  display: block;
  font-size: 0.8125rem;
  color: ${props => props.theme.colors.danger};
  margin-top: ${props => props.theme.spacing.xs};
`;

// ============================================
// 8. BADGE COMPONENTS
// ============================================
const badgeVariants = {
  primary: css`
    background: ${props => props.theme.colors.primary}20;
    color: ${props => props.theme.colors.primary};
  `,
  success: css`
    background: ${props => props.theme.colors.success}20;
    color: ${props => props.theme.colors.success};
  `,
  warning: css`
    background: ${props => props.theme.colors.warning}20;
    color: ${props => props.theme.colors.warning};
  `,
  danger: css`
    background: ${props => props.theme.colors.danger}20;
    color: ${props => props.theme.colors.danger};
  `,
};

export const Badge = styled.span`
  display: inline-flex;
  align-items: center;
  padding: 0.125rem 0.5rem;
  font-size: 0.75rem;
  font-weight: 500;
  border-radius: ${props => props.theme.borderRadius.full};
  ${props => badgeVariants[props.variant || 'primary']}
`;

// ============================================
// 9. AVATAR COMPONENTS
// ============================================
export const Avatar = styled.div`
  ${flexCenter}
  width: ${props => {
    switch (props.size) {
      case 'sm': return '32px';
      case 'lg': return '48px';
      case 'xl': return '64px';
      default: return '40px';
    }
  }};
  height: ${props => {
    switch (props.size) {
      case 'sm': return '32px';
      case 'lg': return '48px';
      case 'xl': return '64px';
      default: return '40px';
    }
  }};
  border-radius: ${props => props.theme.borderRadius.full};
  background: ${props => props.theme.colors.primary};
  color: white;
  font-weight: 600;
  font-size: ${props => {
    switch (props.size) {
      case 'sm': return '0.75rem';
      case 'lg': return '1.125rem';
      case 'xl': return '1.5rem';
      default: return '0.875rem';
    }
  }};
  overflow: hidden;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

// ============================================
// 10. LOADING SPINNER
// ============================================
export const Spinner = styled.div`
  width: ${props => props.size || '24px'};
  height: ${props => props.size || '24px'};
  border: 3px solid ${props => props.theme.colors.border};
  border-top-color: ${props => props.theme.colors.primary};
  border-radius: 50%;
  animation: ${spin} 0.8s linear infinite;
`;

// ============================================
// 11. LAYOUT COMPONENTS
// ============================================
export const Container = styled.div`
  width: 100%;
  max-width: ${props => props.maxWidth || '1200px'};
  margin: 0 auto;
  padding: 0 ${props => props.theme.spacing.lg};
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(${props => props.columns || 12}, 1fr);
  gap: ${props => props.gap || props.theme.spacing.lg};
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const Flex = styled.div`
  display: flex;
  flex-direction: ${props => props.direction || 'row'};
  justify-content: ${props => props.justify || 'flex-start'};
  align-items: ${props => props.align || 'stretch'};
  gap: ${props => props.gap || '0'};
  flex-wrap: ${props => props.wrap || 'nowrap'};
`;

// ============================================
// 12. USAGE EXAMPLE (React Component)
// ============================================
/*
import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import {
  GlobalStyle,
  lightTheme,
  darkTheme,
  Container,
  Card,
  CardTitle,
  CardContent,
  Button,
  ButtonOutline,
  Input,
  Label,
  FormGroup,
  Badge,
  Avatar,
  Spinner,
  Flex,
} from './styled-components-examples';

function App() {
  const [isDark, setIsDark] = useState(false);
  
  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <GlobalStyle />
      <Container>
        <Flex justify="space-between" align="center" style={{ padding: '1rem 0' }}>
          <h1>Styled Components Demo</h1>
          <Button onClick={() => setIsDark(!isDark)}>
            {isDark ? '☀️ Light' : '🌙 Dark'}
          </Button>
        </Flex>
        
        <Card hoverable>
          <CardTitle>Welcome!</CardTitle>
          <CardContent>
            <p>This is a demo of styled-components.</p>
            <Flex gap="0.5rem" style={{ marginTop: '1rem' }}>
              <Badge variant="primary">React</Badge>
              <Badge variant="success">CSS-in-JS</Badge>
              <Badge variant="warning">Styled</Badge>
            </Flex>
          </CardContent>
        </Card>
        
        <Card style={{ marginTop: '1rem' }}>
          <FormGroup>
            <Label>Email</Label>
            <Input type="email" placeholder="your@email.com" />
          </FormGroup>
          <Flex gap="0.5rem">
            <Button>Submit</Button>
            <ButtonOutline>Cancel</ButtonOutline>
          </Flex>
        </Card>
        
        <Flex gap="1rem" align="center" style={{ marginTop: '1rem' }}>
          <Avatar size="sm">JD</Avatar>
          <Avatar>MD</Avatar>
          <Avatar size="lg">AB</Avatar>
          <Spinner />
        </Flex>
      </Container>
    </ThemeProvider>
  );
}

export default App;
*/

console.log('Styled Components Examples loaded');
console.log('Import these components in your React application');
