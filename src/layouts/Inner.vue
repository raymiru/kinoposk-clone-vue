<template>
  <Flex col>
    <Header />
    <TopBanner />
    <router-view />
  </Flex>
</template>

<script>
import TopBanner from "../components/layout/TopBanner";
import Header from "../components/layout/Header";
import Home from "../pages/Home";
import VueDataViewer from "../vue-data-viewer/dv";
export default {
  name: "Inner",
  components: { VueDataViewer, Home, Header, TopBanner }
};
</script>

<style></style>
