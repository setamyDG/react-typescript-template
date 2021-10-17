import styled from 'styled-components/macro';
import { media } from '@styles';

export default styled.main<{ headerHeight: number }>`
  margin-top: ${({ headerHeight }) => headerHeight}px;
  padding: 30px;

  ${media.phone} {
    padding: 0px;
  }
`;
