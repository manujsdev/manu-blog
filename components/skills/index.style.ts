import styled from 'styled-components';

export const ToolboxWrapper = styled.div`
  border: ${({ theme }: any) => `1px solid ${theme.box}`};
  border-radius: 0.56em;
  transition: box-shadow 0.2s ease, border 0.2s ease;
  width: 12rem;
  height: 12rem;
  background-color: ${({ theme }: any) => theme.bodyBg};
  box-shadow: ${({ theme }: any) => `0 0 35px 0 ${theme.boxShadow}`};

  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  &:hover {
    transition: box-shadow 0.2s ease;
  }
`;

export const SkillWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 50px;
`;

export const Icon = styled.span`
  font-size: 4em;
`;
