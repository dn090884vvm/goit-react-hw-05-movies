import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledMovieList = styled(Link)`
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    color: #2196f3;
  }
`;
