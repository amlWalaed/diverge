<script setup lang="ts">
import { type HTMLAttributes, computed } from "vue";
import TableRow from "./TableRow.vue";
import TableCell from "./TableCell.vue";
import { cn } from "@/utils";

const props = withDefaults(
	defineProps<{
		class?: HTMLAttributes["class"];
		description?: string;
		message?: string;
		colspan?: number;
	}>(),
	{
		colspan: 1,
	}
);

const delegatedProps = computed(() => {
	const { class: _, ...delegated } = props;

	return delegated;
});
</script>

<template>
	<TableRow :hoverable="false">
		<TableCell
			:class="cn('text-foreground whitespace-nowrap p-4 align-middle text-sm', props.class)"
			v-bind="delegatedProps">
			<div class="flex items-center justify-center py-10">
				<slot>
					<Empty
						:message="message"
						:description="description" />
				</slot>
			</div>
		</TableCell>
	</TableRow>
</template>
