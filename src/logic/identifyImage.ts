import { type Entry, ImageCategory } from './imageCategory'
import { exhaustiveCheck } from './utils/exhaustiveCheck'

/**
 * Determine image category based on the pixel data
 * TODO: handle resolution other than 1920x1080
 */
export function identifyImage(img: ImageData, entry: Entry): ImageCategory {
  switch (entry) {
    case 'Rise': {
      const res = identifyRiseImage(img)
      console.info(`Identified as ${res}`)
      return res
    }
    case 'World':
      throw new Error('Not implemented')
    default:
      exhaustiveCheck(entry)
  }
}

// 画像の解像度
const resolution = { width: 1920, height: 1080 }

function getPixel(img: ImageData, { x, y }: Coordinate): Pixel {
  const pixels = img.data
  const index = (resolution.width * (y - 1) + x) * 4
  const pixel = {
    r: pixels[index],
    g: pixels[index + 1],
    b: pixels[index + 2],
  }
  console.info(`x: ${x}, y:${y}`)
  console.dir(pixel, { depth: null })
  return pixel
}
function identifyRiseImage(img: ImageData): ImageCategory {
  for (const category of ImageCategory) {
    const pixel = getPixel(img, RiseImgCategoryProps[category].coordinate)
    if (checkColor(pixel, RiseImgCategoryProps[category].color)) return category
  }
  // TODO: unknown作る
  throw new Error('No category found')
}

type CategoryProps = {
  [category in ImageCategory]: {
    coordinate: Coordinate
    color: Pixel
  }
}

// TODO: type it
const RiseImgCategoryProps: CategoryProps = {
  skills: {
    coordinate: { x: 1584, y: 320 },
    color: {
      r: 61,
      g: 168,
      b: 255,
    },
  },
  // TODO: 選択カラーのブレを考慮する
  armor_head: {
    coordinate: { x: 1161, y: 351 },
    color: {
      r: 156,
      g: 128,
      b: 83,
    },
  },
  armor_chest: {
    coordinate: { x: 1161, y: 436 },
    color: {
      r: 119,
      g: 99,
      b: 69,
    },
  },
  armor_arms: {
    coordinate: { x: 1161, y: 521 },
    color: {
      r: 119,
      g: 99,
      b: 69,
    },
  },
  armor_waist: {
    coordinate: { x: 1161, y: 606 },
    color: {
      r: 119,
      g: 99,
      b: 69,
    },
  },
  armor_legs: {
    coordinate: { x: 1161, y: 691 },
    color: {
      r: 142,
      g: 117,
      b: 77,
    },
  },
  charm: {
    coordinate: { x: 1532, y: 319 },
    color: {
      r: 255,
      g: 255,
      b: 255,
    },
  },
} as const

type Pixel = {
  r: number
  g: number
  b: number
}

type Coordinate = {
  x: number
  y: number
}

// TODOL: rewrite
/** check if given pixel satisfy the threshold condition (AND) */
function checkColor(pixel: Pixel, threshold: Pixel): boolean {
  return (
    // prettier-ignore
    pixel.r >= threshold.r - 10 &&
    pixel.r <= threshold.r + 10 &&
    pixel.g >= threshold.g - 10 &&
    pixel.g <= threshold.g + 10 &&
    pixel.b >= threshold.b - 10 &&
    pixel.b <= threshold.b + 10
  )
}
)
}
  )
}
  )
}
  )
}
  )
}
  )
}
  )
}
  )
}
  )
}
