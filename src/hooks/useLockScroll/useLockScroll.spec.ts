import { renderHook } from '@testing-library/react-hooks';
import useLockScroll from './useLockScroll';

it('Should lock body overflow', () => {
  renderHook(() => useLockScroll({ lockWhen: true }));

  expect(document.body).toHaveStyle({ overflow: 'hidden' });
});

it('Should not lock body overflow', () => {
  renderHook(() => useLockScroll({ lockWhen: false }));

  expect(document.body).toHaveStyle({ overflow: '' });
});
