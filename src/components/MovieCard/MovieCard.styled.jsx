import styled from 'styled-components';

export const DivWrapper = styled.div`
  display: flex;
  margin-bottom: 15px;
  border-top: thick double #32a1ce;
  border-bottom: thick double #32a1ce;
`;
export const ImageWrapper = styled.div`
  margin-right: 20px;
`;

export const MovieHeader = styled.h2`
  margin-bottom: 20px;
`;

export const Details = styled.p`
  margin-bottom: 20px;
`;

export const GenresWrapper = styled.div`
  display: flex;
`;

export const Genres = styled.div`
  &:not(:last-child) {
    margin-right: 15px;
  }
  &:first-child {
    margin-left: 25px;
  }
`;
