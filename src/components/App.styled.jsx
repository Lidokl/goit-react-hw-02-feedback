import styled from 'styled-components';

export const SectionTitle = styled.section`
  font-weight: 700;
  font-size: 24px;
  display: flex;
  flex-direction: column;
  padding: 20px 0 0 0;
`;

export const ButtonList = styled.ul`
  display: inline-flex;
  margin-top: 24px;
`;

export const Button = styled.button`
  padding: 1px 5px;
  text-transform: capitalize;
  font-size: 12px;
  font-weight: 600;
  margin: 3px;
  border: 1px solid #6e6e6e6c;
  border-radius: 5px;
`;

export const StatListItem = styled.li`
  text-transform: capitalize;
  margin: 3px;
  &:first-of-type {
    margin-top: 24px;
  }
`;

export const Msg = styled.p`
  margin-top: 24px;
`;