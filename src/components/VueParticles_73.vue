<template>
    <div>
      ============================73、vue-particles(粒子背景)插件的使用 =========================
      <!--
      vue-particles 是什么？

        它是一个粒子背景插件。
      -->
      <vue-particles
        color="#dedede"
        :particleOpacity="0.7"
        :particlesNumber="80"
        shapeType="circle"
        :particleSize="4"
        linesColor="#dedede"
        :linesWidth="1"
        :lineLinked="true"
        :lineOpacity="0.4"
        :linesDistance="150"
        :moveSpeed="3"
        :hoverEffect="true"
        hoverMode="grab"
        :clickEffect="true"
        clickMode="push"
        class="particles"
      >
      </vue-particles>
    </div>
</template>

<script>
    export default {
        name: "VueParticles_73"
    }
</script>

<style scoped>

  .particles {
    width: 100%;
    height: 100%;
    background-color: #2d3a4b;
  }

</style>
