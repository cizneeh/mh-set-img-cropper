/*
 * Render given url as an HTMLImageEmenet.
 * resolves to null if loading fails.
 */
export function renderToImage(
  imageUrl: string,
): Promise<HTMLImageElement | null> {
  const img = new Image()
  img.src = imageUrl

  return new Promise((resolve) => {
    img.addEventListener('load', () => {
      resolve(img)
    })
    img.addEventListener('error', (err) => {
      console.error(err)
      resolve(null)
    })
  })
}
