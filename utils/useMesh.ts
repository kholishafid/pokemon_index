/**
 * Mesh background dengan background-image.
 * @return {string} background-image value
 */
function useBackgroundMesh(): string {
  const randomize = (): number => Math.floor(Math.random() * 100);
  return `radial-gradient(at ${randomize()}% ${randomize()}%,
    hsla(192, 68%, 79%, 1) 0px, transparent 50%),
    radial-gradient(at ${randomize()}% ${randomize()}%,
    hsla(57, 96%, 75%, 1) 0px, transparent 50%),
    radial-gradient(at ${randomize()}% ${randomize()}%,
    hsla(95, 98%, 77%, 1) 0px, transparent 50%)`;
}

export { useBackgroundMesh };
