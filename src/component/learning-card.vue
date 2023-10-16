<template>
    <span class="fa-stack fa-4x">
        <img :src="img_src" :alt="img_alt" style="width: 80px" />
    </span>

    <div>
        <h4 class="my-3"> {{card_title}} <span class="my-2" v-if="readed"><img src="@/assets/img/read.svg" style="width:24px;"></span></h4> 
    </div>

    <p class="text-muted">
        {{card_text}}
    </p>

    <button class="btn btn-primary">click here to learn more</button>
</template>

<script setup>

const props = defineProps({ img_src: String,
                            img_alt: String,
                            card_text: String,
                            card_title: String,
                            readed: Boolean })
</script>

<style>
.fa-stack {
  width: 2em;
  height: 2em;
  background: #ffc800;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
}
</style>