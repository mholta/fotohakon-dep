export const randomMargin = (max: number): string =>
  (Math.random() - 0.4) * max + 'rem'

export const randomMargin4x = (max: number): string =>
  randomMargin(max) +
  ' ' +
  randomMargin(max) +
  ' ' +
  randomMargin(max) +
  ' ' +
  randomMargin(max)

export const randomAlign = (): string =>
  ['center', 'flex-start', 'flex-end'][Math.round(Math.random() * 3)]

export const randomBool = (): boolean => Math.random() >= 0.5

export const randomInt = (min: number, max: number): number =>
  Math.round(min + (Math.random() - 0.3) * (max - min))
