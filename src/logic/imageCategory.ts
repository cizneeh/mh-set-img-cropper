export type ImageCategory = 'skills'
// | 'skills_list'
// | 'armor_head'
// | 'armor_chest'
// | 'armor_arms'
// | 'armor_waist'
// | 'armor_legs'
// | 'charm'

export type Area = {
  sx: number
  sy: number
  sWidth: number
  sHeight: number
}

type ImageMap = {
  [category in ImageCategory]: Area
}

export const ImageMap = {
  skills: {
    sx: 1520,
    sy: 260,
    sWidth: 360,
    sHeight: 610,
  },
} as const satisfies ImageMap

export const getCropParams = (category: ImageCategory) => {
  return ImageMap[category]
}
