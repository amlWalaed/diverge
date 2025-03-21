<script setup lang="ts">
import { cn } from '@/utils'
import type { RouterLinkProps } from 'vue-router'
import { RouterLink } from 'vue-router'
import { Primitive } from 'reka-ui'
import { buttonVariants, buttonIconVariants, type ButtonProps } from '.'

defineOptions({
  inheritAttrs: false,
})
const props = withDefaults(defineProps<Partial<ButtonProps & { to?: RouterLinkProps['to'] }>>(), {
  as: 'button',
  type: 'button',
  loadingIcon: 'i-app-loading',
})

const slots = useSlots()
const isString = (value: any): value is string => typeof value === 'string'
const isDisabled = computed(() => props.disabled || props.loading)
const isLink = computed(
  () => (isString(props.as) && props.as?.toLowerCase() === 'link') || props.to,
)

const LinkWithAsProps = computed(() =>
  h(RouterLink, { as: props.linkAs as string, to: props.to } as RouterLinkProps, {
    default: slots?.default,
  }),
)

const resolvedAs = computed(() =>
  isLink.value && props.as !== 'a' ? LinkWithAsProps.value : props.as,
)

const isLeading = computed(() => {
  return (props.icon && props.leading) || (props.icon && !props.trailing) || props.leadingIcon
})

const isTrailing = computed(() => {
  return (props.icon && props.trailing) || props.trailingIcon
})
const isTrailingOnly = computed(() => isTrailing.value && !isLeading.value)
const hasIcon = computed(() => {
  return isTrailing.value || isLeading.value
})

const iconOnly = computed(() => {
  return hasIcon.value && !props.label?.length && !slots?.default
})

const leadingIconName = computed(() => {
  return props.loading ? props.loadingIcon : props.leadingIcon || props.icon
})

const trailingIconName = computed(() => {
  return props.loading && isTrailingOnly.value
    ? props.loadingIcon
    : props.trailingIcon || props.icon
})

const leadingIconClass = computed(() => {
  return buttonIconVariants({ size: props.size })
})

const trailingIconClass = computed(() => {
  return buttonIconVariants({ size: props.size })
})
</script>

<template>
  <Primitive
    :aria-disabled="isDisabled"
    :aria-busy="loading"
    :disabled="isDisabled"
    :type="type"
    :as="resolvedAs"
    :to="props.to"
    :as-child="props.asChild"
    :class="
      cn(buttonVariants({ variant, size, color, roundness }), block && 'flex w-full', props.class)
    "
    v-bind="$attrs"
  >
    <div v-if="props.loading && !hasIcon" class="absolute inset-0 grid place-items-center">
      <span class="i-app-loading-dots h-3 w-1/2 max-w-[90%]" />
    </div>
    <span
      v-if="(isLeading && leadingIconName) || $slots.leading"
      :class="cn('inline-flex items-center', leadingIconWrapperClass)"
    >
      <slot name="leading" :disabled="props.disabled" :loading="loading">
        <span :class="cn(leadingIconClass, leadingIconName)" aria-hidden="true" />
      </slot>
    </span>

    <span
      v-if="label || $slots.default"
      class="inline-flex items-center"
      :class="[props.loading && !hasIcon && 'invisible']"
    >
      <slot>
        <span
          v-if="label"
          :class="
            cn('first-letter:capitalize', {
              'line-clamp-1 break-all text-left': truncate,
            })
          "
        >
          {{ label }}
        </span>
      </slot>
    </span>
    <span
      v-if="(isTrailing && trailingIconName) || $slots.trailing"
      :class="cn('inline-flex items-center', trailingIconWrapperClass)"
    >
      <slot name="trailing" :disabled="props.disabled" :loading="loading">
        <span :class="cn(trailingIconClass, trailingIconName)" aria-hidden="true" />
      </slot>
    </span>
  </Primitive>
</template>
