<script setup lang="ts" generic="TData">
import { FlexRender, type Row } from "@tanstack/vue-table";
import { alignVariants } from ".";

const props = defineProps<{
	row: Row<TData>;
}>();
const defaultAlignedCenterColumns = ["actions", "is_active", "status"];
</script>

<template>
	<TableCell
		v-for="cell in row.getVisibleCells()"
		:key="cell.id"
		:data-pinned="cell.column.getIsPinned()"
		:class="[
			{
				sticky: cell.column.getIsPinned(),
				'start-0': cell.column.getIsPinned() === 'left',
				'end-0': cell.column.getIsPinned() === 'right',
			},
			cell.column.columnDef.id && defaultAlignedCenterColumns.includes(cell.column.columnDef.id) && 'text-center',
			cell.column.columnDef.meta?.align && alignVariants[cell.column.columnDef.meta?.align],
			cell.column.columnDef.meta?.cellClass,
		]">
		<FlexRender
			:render="cell.column.columnDef.cell"
			:props="cell.getContext()" />
	</TableCell>
</template>

<style></style>
