<script lang="ts">
  import * as allIonicIcons from "ionicons/icons";

  import { toastController } from "$ionic/svelte";

  let icons = Object.keys(allIonicIcons);
  let list = [];

  // we delay the full display to smoothen the rendering
  list = icons.slice(0, 100);
  setTimeout(() => {
    list = [].concat(icons);
  }, 3000);

  const iconClicked = async (icon) => {
    console.log("Icon clicked", icon);

    navigator.clipboard.writeText(
      `  import {${icon}} from "ionicons/icons"; \n <ion-icon icon={${icon}}></ion-icon>`
    );

    const toast = await toastController.create({
      color: "dark",
      duration: 3000,
      //   message: `<ion-icon style="font-size:350%" icon="${allIonicIcons[icon]}"></ion-icon> - ${icon}`,
      message: `${icon}`, // showing the icon does not work yet
      //  showCloseButton: true,
    });

    toast.present();
  };

  const getRandomColor = () => {
    const items = [
      "secondary",
      "primary",
      "danger",
      "warning",
      "dark",
      "medium",
      "success",
      "tertiary",
    ];
    return items[Math.floor(Math.random() * items.length)];
  };

  const handleInput = (event) => {
    const query = event.target.value.toLowerCase();
    if (query != "") {
      list = [];
      list = icons.filter((icon) => icon.toLowerCase().indexOf(query) > -1);
    } else {
      list = [].concat(icons);
    }

    console.log("Changing the list ", query, list);
  };
</script>

<svelte:head>
  <title>Ionic Companion - Icons</title>
</svelte:head>

<ion-header translucent="true">
  <ion-toolbar>
    <ion-title>Icons</ion-title>
    <ion-buttons slot="start">
      <ion-menu-button />
    </ion-buttons>
  </ion-toolbar>
  <ion-toolbar>
    <ion-searchbar
      animated
      debounce="1500"
      show-cancel-button="'never'"
      on:ionInput={handleInput}
    />
  </ion-toolbar>
</ion-header>

<ion-content fullscreen class="ion-padding">
  <ion-grid>
    <ion-row>
      {#each list as icon}
        <ion-col
          on:click={() => {
            iconClicked(icon);
          }}
        >
          <ion-icon icon={allIonicIcons[icon]} color={getRandomColor()} />
        </ion-col>
      {/each}
    </ion-row>
  </ion-grid>
</ion-content>

<style>
  ion-icon {
    font-size: 500%;
  }
</style>
