/** check if given width and height is 16:9 aspect ratio */
export function isWide(width: number, height: number) {
  // TODO: これでいいんか？
  return width / height === 16 / 9
}

// function gcd(a: number, b: number) {
//   if (b == 0) return a
//   return gcd(b, a % b)
// }
