import styled from '@emotion/styled';
import { theme } from 'styles';

export const ListContacts = styled.ul`
  margin: 0px;
  padding: 0px;
`;

export const ItemContacts = styled.li`
  display: flex;
  gap: 15px;
  align-items: baseline;s
  padding: 8px;
  height: 30px;
`;

export const TextContacts = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 1.71;
  letter-spacing: 0.03em;
  color: ${theme.colors.title};
`;

export const DeleteBtn = styled.button`
  font-size: 18px;

   transition: all 0.3s ease;
  &:hover {
  box-shadow: ${theme.shadow};
 font-size:20px;
  border-radius: 5px;

`;
