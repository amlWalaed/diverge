import { twMerge } from 'tailwind-merge'
import { type ClassValue, clsx } from 'clsx'

export const simulateLatency = () =>
  new Promise((resolve) => setTimeout(resolve, Math.floor(Math.random() * (800 - 300 + 1)) + 300))

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
export const isString = (value: unknown): value is string => {
  return typeof value === 'string'
}
