import React from 'react';
import { fireEvent } from '@testing-library/react';
import { render } from '../../utils/test';
import useClickAway from './useClickAway';

const func = jest.fn();

const TestComponent = () => {
  const ref = React.useRef(null);

  useClickAway({
    ref,
    onClickAway: func,
    mountListenersWhen: true,
  });

  return <div ref={ref} data-testid="test-component" />;
};

it('Should call close function when click/mouseDown/touchstart event lands outside', () => {
  const { getByTestId } = render(<TestComponent />);
  const testComponent = getByTestId('test-component');

  expect(testComponent).toBeInTheDocument();
  expect(func).not.toHaveBeenCalled();

  fireEvent.mouseDown(document.body);
  expect(func).toHaveBeenCalled();
  fireEvent.mouseDown(testComponent);
  expect(func).toHaveBeenCalled();

  fireEvent.mouseDown(document.body);
  expect(func).toHaveBeenCalledTimes(2);
  fireEvent.mouseDown(testComponent);
  expect(func).toHaveBeenCalledTimes(2);

  fireEvent.touchStart(document.body);
  expect(func).toHaveBeenCalledTimes(3);
  fireEvent.touchStart(testComponent);
  expect(func).toHaveBeenCalledTimes(3);
});
