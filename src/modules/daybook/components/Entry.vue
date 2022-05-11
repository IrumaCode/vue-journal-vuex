<template>
  <div class=" entry-container mb-3 pointer p-2"
        @click="$router.push({ name: 'entry-view', params: { id: '10' } })"
        >
      <!-- Title -->
      <div class="entry-title d-flex">
          <span class="text-success fs-5 fw-bold">9</span>
          <span class="mx-1 fs-5">Mayo</span>
          <span class="mx-2 fw-light">2022, Lunes</span>
      </div>

      <div class="entry-description">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem magni veritatis perspiciatis dolor ab, qui eum doloremque eos dignissimos? Voluptate?
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.entry-container {
    border-bottom: 1px solid #2c3e50;
    transition: .2s all ease-in;

    &:hover {
        background-color: lighten($color: grey, $amount: 45);
        transition: .2s all ease-in;
    }

    .entry-description {
        font-size: 12px;
    }
}

</style>