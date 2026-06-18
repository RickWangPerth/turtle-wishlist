<script setup>
import { wishlistEpics } from '../src/data/wishlist'

const workshopStoragePrefix = 'turtleWishlistWorkshop:'
const wishlistItems = wishlistEpics.flatMap(epic => epic.items)

function readItemState(id) {
  if (typeof window === 'undefined')
    return {}

  const saved = window.localStorage.getItem(`${workshopStoragePrefix}${id}`)
  if (!saved)
    return {}

  try {
    return JSON.parse(saved)
  }
  catch {
    return {}
  }
}

function exportWorkshopDecisions() {
  if (typeof window === 'undefined')
    return

  const decisions = wishlistItems.map(item => {
    const state = readItemState(item.id)
    return {
      id: item.id,
      title: item.title,
      epic: item.epic,
      originalRequest: item.originalRequest,
      checked: Boolean(state.reviewed),
      discussed: Boolean(state.reviewed),
      priority: state.priority || '',
      effort: state.effort || '',
      decision: state.decision || '',
      notes: state.notes || '',
    }
  })

  const payload = {
    exportedAt: new Date().toISOString(),
    source: 'Turtle Database Wishlist Review',
    decisions,
  }

  const blob = new Blob([JSON.stringify(payload, null, 2)], {
    type: 'application/json',
  })
  const url = URL.createObjectURL(blob)
  const link = document.createElement('a')
  link.href = url
  link.download = 'turtle-wishlist-workshop-decisions.json'
  link.click()
  URL.revokeObjectURL(url)
}
</script>

<template>
  <div class="workshop-data-controls">
    <span>Changes are saved locally in this browser only.</span>
    <button type="button" @click="exportWorkshopDecisions">
      Export decisions
    </button>
  </div>
</template>
