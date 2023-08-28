<script>
import photoCuts from '@/components//ImgCropper/index'

export default {
  name: 'lab-baseinfo',
  mixins: [photoCut],
  data() {
    return {
    }
  },
  components: {
    'photo-cut': photoCuts
  },
  created() {

  },
  methods: {

  }
}
</script>
<template>
<div>
  <photo-cut></photo-cut>
</div>
</template>

<style lang="scss">
@import 'src/styles/variables'; 
</style>





