import styled from 'styled-components';
import { Link } from 'react-router-dom';

// Layout stays in CSS; reusable navigation UI owns its styles here.
const NavigationLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  text-decoration: none;
  color: inherit;
  &:focus-visible { outline: 2px solid var(--point); outline-offset: 4px; }
`;

export const HeroLink = styled(NavigationLink)`
  width: 170px;
  height: 54px;

  border: 1px solid var(--primary);

  font-family: 'Inter', sans-serif;
  font-size: 16px;
  font-weight: 500;

  cursor: pointer;
  &:first-child {
    background: var(--primary);
    color: var(--secondary);
  }
  &:last-child {
    background: var(--secondary);
    color: var(--primary);
  }
  &:last-child:hover {
    background: var(--point);
    color: var(--primary);
    font-weight: 300;
  }
  &:first-child:hover {
    background: var(--point);
    color: var(--primary);
    font-weight: 300;
  }
`;

export const QuickLink = styled(NavigationLink)`
  height: 180px;

  border: 0;
  border-radius: 8px;

  background: var(--primary);
  color: var(--secondary);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  gap: 18px;

  font-family: 'IBM Plex Sans KR', sans-serif;

  cursor: pointer;
  transition: 0.3s;
  &:hover {
    background: var(--point);
    color: var(--primary);
  }
  & .material-symbols-outlined {
    font-size: 38px;

    font-variation-settings:
    'FILL' 0,
    'wght' 300,
    'GRAD' 0,
    'opsz' 24;
  }
  &:focus-visible {
    background: var(--point);
    color: var(--primary);

    outline: 2px solid var(--primary);
    outline-offset: 3px;
  }
`;

export const ViewAllLink = styled(NavigationLink)`
  position: absolute;

  right: 0;
  bottom: 2px;

  border: 0;
  padding: 0;

  background: transparent;

  display: flex;
  align-items: center;

  gap: 4px;

  font-family: 'IBM Plex Sans KR', sans-serif;
  font-size: 15px;
  font-weight: 500;

  cursor: pointer;
  & .material-symbols-outlined {
    font-size: 20px;
  }
`;

export const DetailLink = styled(NavigationLink)`
  width: 100%;
  height: 54px;

  margin-top: 18px;

  border: 0;

  background: var(--primary);
  color: var(--secondary);

  font-family: 'Inter', sans-serif;
  font-size: 16px;
  font-weight: 500;

  cursor: pointer;

  transition: 0.3s;
  &:hover {
    background: var(--point);
    color: var(--primary);
  }
`;

export const LocationLink = styled(NavigationLink)`
  width: 150px;
  height: 50px;

  margin-top: 28px;

  border: 0;
  border-radius: 6px;

  background: var(--point);
  color: var(--primary);

  font-family: 'IBM Plex Sans KR', sans-serif;
  font-size: 15px;
  font-weight: 500;

  cursor: pointer;
  &:hover {
    background: var(--primary);
    color: var(--secondary);

    font-weight: 300;
  }
`;

export const InstagramLink = styled(NavigationLink)`
  width: 300px;
  height: 54px;

  margin: 30px auto 0;

  border: 0;
  border-radius: 6px;

  background: var(--primary);
  color: var(--secondary);

  display: flex;
  align-items: center;
  justify-content: center;

  gap: 8px;

  font-family: 'Inter', sans-serif;
  font-size: 16px;
  font-weight: 500;

  cursor: pointer;

  transition: 0.3s;
  & .material-symbols-outlined {
    font-size: 24px;

    font-variation-settings:
    'FILL' 0,
    'wght' 300,
    'GRAD' 0,
    'opsz' 24;
  }
  &:hover {
    background: var(--point);
    color: var(--primary);
  }
`;

