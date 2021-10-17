import React, { FC } from 'react';
import { StyledFooter, Name, Year, FooterContainer } from './footer.styled';

const Footer: FC = () => {
  const year = new Date().getFullYear();

  return (
    <StyledFooter>
      <FooterContainer>
        {/* <Avatar src={photo} alt='avatar' /> */}
        <Name>Your name</Name>
        <Year>{year}</Year>
      </FooterContainer>
    </StyledFooter>
  );
};

export default Footer;
