import styled from 'styled-components/macro';

const StyledFooter = styled.footer`
  position: absolute;
  left: 0;
  bottom: 0;
  right: 0;
  border-top: 1px solid ${({ theme }) => theme.colors.gray};
`;

const FooterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column;
  padding-bottom: 20px;
`;

const Name = styled.p`
  font-size: 0.825rem;
  margin-top: 25px;
  font-weight: 300;
`;

const Year = styled.p`
  font-size: 0.825rem;
  margin-top: 25px;
`;

const Avatar = styled.img`
  border: 2px solid ${({ theme }) => theme.colors.gray};
  border-radius: 50%;
  width: 100px;
  height: 100px;
`;

export { StyledFooter, Name, Avatar, Year, FooterContainer };
