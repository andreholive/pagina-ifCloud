import styled from 'styled-components';

const DroppableLayer = styled.div.attrs(({ disabled, ...props }) => ({
  ...props,
  onDragOver: event => event.preventDefault(),
  onDrop: event => {
    if (disabled || !event.dataTransfer.getData('component')) return;
    const component = JSON.parse(event.dataTransfer.getData('component'));
    props.handleDeviceDrop(event, component);
  },
}))`
  width: 100vw;
  height: 100vh;
`;

export default DroppableLayer;