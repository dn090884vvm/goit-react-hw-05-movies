import { Outlet } from 'react-router-dom';
import { Header, Container } from './MainBar.styled';
import Navigation from 'components/Navigation/Navigation';
import { Suspense } from 'react';

export default function MainBar() {
  return (
    <div>
      <Container>
        <Header>
          <Navigation />
        </Header>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </Container>
    </div>
  );
}
