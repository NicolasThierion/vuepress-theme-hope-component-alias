<!-- adapted from https://github.com/vuepress/vuepress-next/blob/main/packages/%40vuepress/theme-default/src/client/components/HomeFeatures.vue -->
<script setup lang="ts">
import { usePageFrontmatter, withBase } from "@vuepress/client";
import { isArray } from "@vuepress/shared";
import { computed } from "vue";

const frontmatter = usePageFrontmatter<any>();
const features = computed(() => {
  if (isArray(frontmatter.value.features)) {
    return frontmatter.value.features;
  }
  return [];
});
</script>

<template>
  <div v-if="features?.length" class="features">
    <!-- courses -->
    <div v-if="(features || []).length" class="feature">
      <h2>Features:</h2>
      <ul>
        <li v-for="(feature, index) in features" :key="index">
          <a :href="feature.link" v-html="course.title" target="_blank"></a>
        </li>
      </ul>
    </div>

    <!-- prerequisites -->
    <div v-if="(prerequisites || []).length" class="feature">
      <h2><i class="fa fa-tasks"></i> Prerequisites:</h2>
      <ul>
        <li v-for="(p, index) in prerequisites" :key="index" v-html="p"></li>
      </ul>
    </div>
    <!-- objectives -->
    <div v-if="(objectives || []).length" class="feature">
      <h2><i class="fa fa-bullseye"></i> Objectives:</h2>
      <ul>
        <li v-for="(o, index) in objectives" :key="index" v-html="o"></li>
      </ul>
    </div>
    <!-- techs -->
    <div v-if="(tech || []).length" class="feature">
      <h2><i class="fa fa-laptop-code"></i> Involved technologies:</h2>
      <ul style="list-style: none; display: flex; flex-flow: row wrap">
        <li v-for="(tech, index) in tech" :key="index">
          <img
            v-if="!tech.link"
            :title="tech.title"
            :src="withBase(tech.icon)"
            style="height: 2.5em; margin: 0.2em"
          />

          <a v-if="tech.link" :href="tech.link">
            <img
              :title="tech.title"
              :src="withBase(tech.icon)"
              style="height: 2.5em; margin: 0.2em"
            />
          </a>
        </li>
      </ul>
    </div>
    <!-- links -->
    <div v-if="(links || []).length" class="feature">
      <h2><i class="fa fa-link"></i> External links:</h2>
      <ul>
        <li v-for="(o, index) in links" :key="index">
          <a :href="o.link" v-html="o.title"></a>
        </li>
      </ul>
    </div>
    <!-- see also -->
    <div v-if="(seeAlso || []).length" class="feature">
      <h2><i class="fa fa-plus"></i> See also...</h2>
      <ul>
        <li v-for="(o, index) in seeAlso" :key="index">
          <a :href="o.link" v-html="o.title"></a>
        </li>
      </ul>
    </div>

    <div v-for="feature in features" :key="feature.title" class="feature">
      <h2>{{ feature.title }}</h2>
      <p>{{ feature.details }}</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@media (min-width: 1440px) {
  .home.project .feature {
    flex-basis: calc(33% - 4rem);
    text-align: start;
  }
}
</style>
