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
export default {
  name: "Inner",
  components: { Home, Header, TopBanner }
};
</script>

<style></style>
