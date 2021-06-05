export const randomMargin = (
  max: number,
  unit: string = 'rem',
  adjust: number
): string => (Math.random() - adjust) * max + unit

export const randomMargin4x = (
  max: number,
  unit: string,
  adjust: number
): string =>
  randomMargin(max, unit, adjust) +
  ' ' +
  randomMargin(max, unit, adjust) +
  ' ' +
  randomMargin(max, unit, adjust) +
  ' ' +
  randomMargin(max, unit, adjust)

export const randomVwMargin4x = (max: number, adjust: number): string =>
  randomMargin(max, 'vw', adjust) +
  ' ' +
  randomMargin(max, 'vw', adjust) +
  ' ' +
  randomMargin(max, 'vw', adjust) +
  ' ' +
  randomMargin(max, 'vw', adjust)

export const randomAlign = (): string =>
  ['center', 'flex-start', 'flex-end'][Math.round(Math.random() * 3)]

export const randomBool = (): boolean => Math.random() >= 0.5

export const randomInt = (min: number, max: number): number =>
  Math.round(min + (Math.random() - 0.4) * (max - min))

export const isHorizontal = (width: number, height: number): boolean =>
  (width * 1.2) / height > 1
