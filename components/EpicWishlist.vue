<script setup>
import { computed } from 'vue'
import { wishlistEpics } from '../src/data/wishlist'

const props = defineProps({
  epicId: {
    type: String,
    required: true,
  },
})

const epic = computed(() => wishlistEpics.find(item => item.id === props.epicId))
</script>

<template>
  <template v-if="epic">
    <WorkshopDataControls />

    <div class="epic-summary">
      <p><strong>Focus:</strong> {{ epic.focus }}</p>
      <p><strong>Key decisions needed:</strong> {{ epic.keyDecisionsNeeded }}</p>
      <p><strong>Number of items:</strong> {{ epic.items.length }}</p>
    </div>

    <div class="workshop-item-list">
      <WorkshopItem
        v-for="item in epic.items"
        :id="item.id"
        :key="item.id"
        :item-id="item.id"
        :title="item.title"
        :epic="item.epic"
        :original-request="item.originalRequest"
      />
    </div>
  </template>
</template>
