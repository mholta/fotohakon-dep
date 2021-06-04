export const randomMargin = (max: number, unit: string = 'rem'): string =>
  (Math.random() - 0.3) * max + unit

export const randomMargin4x = (max: number): string =>
  randomMargin(max) +
  ' ' +
  randomMargin(max) +
  ' ' +
  randomMargin(max) +
  ' ' +
  randomMargin(max)

export const randomVwMargin4x = (max: number): string =>
  randomMargin(max, 'vw') +
  ' ' +
  randomMargin(max, 'vw') +
  ' ' +
  randomMargin(max, 'vw') +
  ' ' +
  randomMargin(max, 'vw')

export const randomAlign = (): string =>
  ['center', 'flex-start', 'flex-end'][Math.round(Math.random() * 3)]

export const randomBool = (): boolean => Math.random() >= 0.5

export const randomInt = (min: number, max: number): number =>
  Math.round(min + (Math.random() - 0.4) * (max - min))
