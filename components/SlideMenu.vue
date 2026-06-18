<script setup>
const base = import.meta.env.BASE_URL || '/'

const slides = [
  { no: 1, title: 'Title' },
  { no: 2, title: 'Purpose of the workshop' },
  { no: 3, title: 'Current problem' },
  { no: 4, title: 'Seven epics overview' },
  { no: 5, title: 'Turtle Identification & Tag Management' },
  { no: 6, title: 'Identification items' },
  { no: 7, title: 'Data Entry Experience & Workflow' },
  { no: 8, title: 'Data entry items' },
  { no: 9, title: 'Validation & Data Quality' },
  { no: 10, title: 'Validation items' },
  { no: 11, title: 'Data Model & Database Enhancements' },
  { no: 12, title: 'Data model items' },
  { no: 13, title: 'Reporting, Exports & Analytics' },
  { no: 14, title: 'Reporting items' },
  { no: 15, title: 'Security, Access & Governance' },
  { no: 16, title: 'Security items' },
  { no: 17, title: 'UI, Forms & General Improvements' },
  { no: 18, title: 'UI and forms items' },
  { no: 19, title: 'Bugs' },
  { no: 20, title: 'Bug review' },
  { no: 21, title: 'Final discussion' },
]

function slideHref(no) {
  return `${base}${no}`
}
</script>

<template>
  <details class="deck-menu">
    <summary aria-label="Open slide menu" title="Slide menu">
      <span></span>
      <span></span>
      <span></span>
    </summary>
    <nav aria-label="Slide menu">
      <a v-for="slide in slides" :key="slide.no" :href="slideHref(slide.no)">
        <span>{{ slide.no }}</span>
        <strong>{{ slide.title }}</strong>
      </a>
    </nav>
  </details>
</template>
