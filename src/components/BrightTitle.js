import styled from 'styled-components';

export default styled.h1`
  color: var(--color-primary);
  font-size: var(--font-fontsize);
  font-weight: bold;
  margin: 0;
  display: flex;

  padding-bottom: var(--font-pb);
  justify-content: center;


  border: var(--font-bordersize);
	background:
    radial-gradient(farthest-side at bottom right, transparent 98%, var(--color-text) 100%) top left,
    radial-gradient(farthest-side at top    right, transparent 98%, var(--color-text) 100%) bottom left,
    radial-gradient(farthest-side at bottom left , transparent 98%, var(--color-text) 100%) top right,
    radial-gradient(farthest-side at top    left , transparent 98%, var(--color-text) 100%) bottom right,
    none;


	background-size: var(--font-bordersize) var(--font-bordersize);
	background-repeat: no-repeat;
	background-origin: padding-box;
  margin: var(--font-bordersize);
	border: var(--font-bordersize) solid var(--color-text);
	border-radius: var(--font-bordersize);
`;
