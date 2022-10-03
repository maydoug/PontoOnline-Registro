<template>
  <div id="app">

    <ParteSuperior />
    <CorpoApp />

  </div>
</template>

<script>
  import './styles/global.css';
  import ParteSuperior from './components/ParteSuperior';
  import CorpoApp from './pages/CorpoApp'

export default {
  name: 'App',
  components: {
    ParteSuperior,
    CorpoApp
}
}
</script>