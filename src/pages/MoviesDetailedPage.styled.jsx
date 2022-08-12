import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const BackButton = styled(Link)`
  display: block;
  margin-bottom: 10px;
  font-weight: 700;
`;

export const StyledLink = styled(Link)`
  margin-bottom: 10px;
`;

export const AdditionalInfo = styled.div`
  margin-top: 15px;
  display: flex;
  flex-direction: column;
  border-bottom: thick double #32a1ce;
  &:not(:last-child) {
    margin-bottom: 15px;
  }
`;

export const Info = styled.p`
  margin-bottom: 15px;
`;
