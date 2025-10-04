import { useViewportSize } from '../../hooks/useViewportSize';

function Task4() {
  const { height, width } = useViewportSize(100);

  return (
    <>
      Width: {width}, height: {height}
    </>
  );
}

export default Task4;