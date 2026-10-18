import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter, useLocation } from 'react-router-dom';
import Home from './Home';

jest.mock('swiper/react', () => ({
  Swiper: ({ children }) => <div>{children}</div>,
  SwiperSlide: ({ children }) => <div>{children}</div>,
}), { virtual: true });
jest.mock('swiper/modules', () => ({ Autoplay: {}, Pagination: {}, Navigation: {} }), { virtual: true });
jest.mock('swiper/css', () => ({}), { virtual: true });
jest.mock('swiper/css/pagination', () => ({}), { virtual: true });
jest.mock('swiper/css/navigation', () => ({}), { virtual: true });
function Destination() {
  const location = useLocation();
  return <output data-testid="destination">{location.pathname}{location.hash}</output>;
}
afterEach(() => localStorage.clear());
test.each([
  ['View Exhibition', '/exhibition'], ['Book Tickets', '/ticket'],
  ['현재 전시', '/exhibition'], ['지점안내', '/location'],
  ['예매하기', '/ticket'], ['운영시간', '/location#hours'],
  ['오시는 길', '/location#directions'], ['관람 안내', '/ticket'],
  ['전체보기', '/exhibition'], ['전시 도시 보기', '/location'],
])('%s navigates to %s', (label, destination) => {
  render(<MemoryRouter><Home /><Destination /></MemoryRouter>);
  fireEvent.click(screen.getByRole('link', { name: label }));
  expect(screen.getByTestId('destination').textContent).toBe(destination);
});
test('each exhibition links to its own detail route', () => {
  render(<MemoryRouter><Home /><Destination /></MemoryRouter>);
  screen.getAllByRole('link', { name: 'View Details' }).forEach((link, index) => {
    fireEvent.click(link);
    expect(screen.getByTestId('destination').textContent).toBe(`/exhibition/${index + 1}`);
  });
});
test('hide today dismisses popup across remounts', () => {
  const view = render(<MemoryRouter><Home /></MemoryRouter>);
  fireEvent.click(screen.getByRole('button', { name: '오늘 하루 보지 않기' }));
  view.unmount();
  render(<MemoryRouter><Home /></MemoryRouter>);
  expect(screen.queryByAltText('부산 지역주민 특별 할인')).toBeNull();
});
