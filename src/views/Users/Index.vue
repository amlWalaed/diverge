<script setup lang="ts">
type Model = User
const columnHelper = createColumnHelper<Model>()
const columns = [
  columnHelper.accessor('name', {
    header: 'Name',
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor('name', {
    header: 'Name',
    cell: (info) => info.getValue(),
  }),
]
</script>
<template>
  <div class="bg-background">
    <Button :label="'aml walaed'" :loading="false" />
    <DataTable :data="[]" :columns="columns" />
  </div>
</template>
