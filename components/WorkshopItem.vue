<script setup>
import { computed, onBeforeUnmount, onMounted, reactive, watch } from 'vue'

const props = defineProps({
  id: {
    type: String,
    required: true,
  },
  itemId: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  epic: {
    type: String,
    required: true,
  },
  originalLabel: {
    type: String,
    default: 'Original request',
  },
  originalRequest: {
    type: String,
    default: '',
  },
})

const workshopStoragePrefix = 'turtleWishlistWorkshop:'
const storageKey = computed(() => `${workshopStoragePrefix}${props.id}`)

const state = reactive({
  reviewed: false,
  priority: '',
  effort: '',
  decision: '',
  notes: '',
})

function loadState() {
  if (typeof window === 'undefined')
    return

  const saved = window.localStorage.getItem(storageKey.value)
  if (!saved) {
    state.reviewed = false
    state.priority = ''
    state.effort = ''
    state.decision = ''
    state.notes = ''
    return
  }

  try {
    Object.assign(state, JSON.parse(saved))
  }
  catch {
    window.localStorage.removeItem(storageKey.value)
  }
}

function handleReset() {
  loadState()
}

onMounted(() => {
  loadState()
  window.addEventListener('turtle-workshop-reset', handleReset)
})

onBeforeUnmount(() => {
  if (typeof window !== 'undefined')
    window.removeEventListener('turtle-workshop-reset', handleReset)
})

watch(
  state,
  value => {
    if (typeof window === 'undefined')
      return

    window.localStorage.setItem(storageKey.value, JSON.stringify(value))
  },
  { deep: true },
)
</script>

<template>
  <details
    class="wishlist-card workshop-item"
    :data-workshop-item-id="id"
    :data-workshop-item-title="title"
    :data-workshop-epic="epic"
  >
    <summary class="wishlist-title">
      <input
        v-model="state.reviewed"
        type="checkbox"
        :aria-label="`Reviewed: ${title}`"
        @click.stop
      >
      <div>
        <strong>{{ title }}</strong>
        <span>Item ID: {{ itemId }} · Storage ID: {{ id }}</span>
      </div>
      <span class="collapse-indicator">Details</span>
    </summary>
    <div class="wishlist-details">
      <div class="request-text">
        <div class="label">{{ originalLabel }}</div>
        <blockquote>{{ originalRequest }}<slot v-if="!originalRequest" /></blockquote>
      </div>
      <div class="workshop-fields">
        <label>
          <span>Priority</span>
          <select v-model="state.priority">
            <option value="">Unselected</option>
            <option>High</option>
            <option>Medium</option>
            <option>Low</option>
          </select>
        </label>
        <label>
          <span>Effort</span>
          <select v-model="state.effort">
            <option value="">Unselected</option>
            <option>Small</option>
            <option>Medium</option>
            <option>Large</option>
          </select>
        </label>
        <label>
          <span>Decision</span>
          <select v-model="state.decision">
            <option value="">Unselected</option>
            <option>Now</option>
            <option>Later</option>
            <option>Not Planned</option>
            <option>Needs Discussion</option>
          </select>
        </label>
        <label class="notes-field">
          <span>Notes</span>
          <textarea
            v-model="state.notes"
            rows="2"
            placeholder="Workshop notes"
          />
        </label>
      </div>
    </div>
  </details>
</template>
