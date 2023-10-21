import styled from '@emotion/styled';

export const PointsList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;

  font-size: ${props => props.theme.fontSizes.medium};
`;

export const PointButton = styled.button`
  padding: ${props => props.theme.spacing(1)} ${props => props.theme.spacing(3)};

  border: 1px solid ${props => props.theme.colors.accent};
  border-radius: ${props => props.theme.spacing(3)};

  transition: background-color ${props => props.theme.animation.cubicBezier},
    color ${props => props.theme.animation.cubicBezier};

  &:hover {
    background-color: ${props => props.theme.colors.accent};
    color: ${props => props.theme.colors.white};
  }
`;
