import { cva, type VariantProps } from 'class-variance-authority'
import type { ClassValue } from 'clsx'
import { type PrimitiveProps } from 'reka-ui'
import type { Component, HTMLAttributes } from 'vue'

export { default as Button } from './Button.vue'

export const buttonVariants = cva('btn group/btn ', {
  variants: {
    size: {
      default: 'h-[2.25rem] p-2 text-sm',
      sm: 'h-8 px-3 text-xs',
      lg: 'h-10 px-8',
      icon: 'items-center size-[2.25rem] p-0.5',
      'icon-sm': 'items-center size-[1.5rem] p-0.5',
    },
    color: {
      primary: ['btn-primary'],
      secondary: ['btn-secondary'],
      success: ['btn-success'],
      destructive: ['btn-destructive'],
      warning: ['btn-warning'],
      inverse: ['btn-inverse'],
    },
    variant: {
      default: 'bg-primary text-white  hover:bg-primary-900',
      solid: ' btn-solid',
      outline: 'btn-outline',
      ghost: 'btn-ghost',
      soft: 'btn-soft',
      link: 'btn-link',
    },
    roundness: {
      full: 'rounded-full',
      circle: 'rounded-full aspect-square',
      none: 'rounded-none',
      sm: 'rounded-sm',
      base: 'rounded',
      md: 'rounded-md',
      lg: 'rounded-lg',
      xl: 'rounded-xl',
      '2xl': 'rounded-2xl',
      '3xl': 'rounded-3xl',
    },
  },
  defaultVariants: {
    variant: 'solid',
    color: 'primary',
    size: 'default',
    roundness: 'base',
  },
})

export const buttonIconVariants = cva('shrink-0', {
  variants: {
    size: {
      default: 'size-5',
      sm: 'size-3',
      lg: 'size-6',
      icon: 'size-5',
      'icon-sm': 'size-4',
    },
  },
  defaultVariants: {
    size: 'default',
  },
})
export type ButtonVariants = VariantProps<typeof buttonVariants>

export interface ButtonProps {
  as: PrimitiveProps['as'] | Component | 'link'
  asChild: PrimitiveProps['asChild']
  variant?: ButtonVariants['variant']
  color?: ButtonVariants['color']
  size?: ButtonVariants['size']
  roundness?: ButtonVariants['roundness']
  class?: HTMLAttributes['class']
  type: 'button' | 'submit' | 'reset'
  linkAs: PrimitiveProps['as'] | Component
  loading: boolean
  disabled: boolean
  label: string
  truncate: boolean
  block: boolean
  loadingIcon: string
  icon: ClassValue
  trailing: boolean
  leading: boolean
  leadingIcon: ClassValue
  leadingIconWrapperClass: ClassValue
  trailingIcon: ClassValue
  trailingIconWrapperClass: ClassValue
}
