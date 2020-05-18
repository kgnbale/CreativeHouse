<template>
  <div class='job-latest' >
    <div class='job-latest-container'>
       <div class='job-latest-title'>
         <span class='latest-title'>{{job.title}}</span>
         <span class='five-pointed-star'></span>
       </div>
       <div class='job-latest-address'>
          <span>
            <i></i>
            {{job.address}}
          </span>
          <span>
            <i></i>

          </span>
       </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'job-latest',
  props: {
    job: {
      type: Object,
      required: true
    }
  }

}
</script>
<style lang="less" scoped>

</style>
