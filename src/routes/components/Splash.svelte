<script lang="ts">
  import { scale } from "svelte/transition";
  import { elasticInOut } from "svelte/easing";

  import { goto } from "@roxi/routify";
  import { prefetch } from "@roxi/routify";

  import { onMount } from "svelte";

  prefetch("/components/Slides", {});

  let splitpane;
  onMount(() => {
    splitpane = document.querySelector("ion-split-pane");
    splitpane.disabled = true;
  });

  function navigate(url) {
    console.log("Navigate url", url);
    $goto(url);
  }

  setTimeout(() => {
    splitpane.disabled = false;
    navigate("/components/Slides");
  }, 4000);
</script>

<ion-content>
  <br />
  <br />
  <br />
  <br />

  <div class="ion-text-center">
    <img
      src="/assets/img/great-success.png"
      alt="Great success"
      in:scale={{ duration: 1900, easing: elasticInOut }}
    />

    <div in:scale={{ delay: 400, duration: 1900, easing: elasticInOut }}>Great success!</div>
  </div>
</ion-content>

<style>
  img {
    width: 60%;
  }
</style>
