<script lang="ts">
  // import { fromFetch } from "rxjs/fetch";
  import { goto } from "@roxi/routify";
  import { getIonicMenu } from "$ionic/svelte";

  import * as allIonicIcons from "ionicons/icons";

  import { routes } from "../../.routify/routes";

  let hideMenu = true; // a hack because the menu shows before the splash (in Chrome on Windows)

  export let side = "start";

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

  const excludedPaths = ["Splash"];

  // let's use the generated routes for making the menu items
  // and skip a few ones for the menu

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  let menuItems: Array<{ url: string; label: string; icon: any }> = routes
    .filter((route) => route.path.includes("components"))
    .filter((route) => {
      let found = false;
      excludedPaths.forEach((exclude) => {
        found = found || route.path.includes(exclude);
      });
      return !found;
    })
    .map((route) => {
      let label = "";
      if (route.path.includes("tabs")) {
        label = "Tab";
      } else {
        label = route.shortPath.replace("/components/", "");
      }
      return {
        url: route.path,
        label: capitalizeFirstLetter(label),
        icon: allIonicIcons["home"],
      };
    })
    .sort(function (a, b) {
      var nameA = a.label.toUpperCase(); // ignore upper and lowercase
      var nameB = b.label.toUpperCase(); // ignore upper and lowercase
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }

      // names must be equal
      return 0;
    });

  // Randomize the icons
  const icons = Object.keys(allIonicIcons);
  menuItems.map((menuItem) => {
    const iconForMenu = icons[Math.floor(Math.random() * icons.length)];
    menuItem.icon = allIonicIcons[iconForMenu];
  });
  menuItems = [...menuItems];

  const closeAndNavigate = (url) => {
    console.log("Navigate url", url);

    // path.set(url);
    $goto(url);

    getIonicMenu("mainmenu")
      .close(true)
      .then(() => {});
  };

  const goToReview = () => {
    //  path.set("/RateMe");
    getIonicMenu("mainmenu")
      .close(true)
      .then(() => {});
  };

  // hack because of visibility of menu in Chrome/Windows
  setTimeout(() => {
    hideMenu = false;
  }, 100);
</script>

<ion-menu {side} content-id="main" menu-id="mainmenu" class:menuhide={hideMenu}>
  {#if menuItems.length > 0}
    <ion-header>
      <ion-toolbar translucent="true">
        <ion-title>Menu</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-list>
        {#each menuItems as menuItem, i}
          <ion-item
            on:click={() => {
              closeAndNavigate(menuItem.url);
            }}
          >
            <ion-icon icon={menuItem.icon} slot="start" color={getRandomColor()} />
            <ion-label>{menuItem.label}</ion-label>
          </ion-item>
        {/each}
        <ion-item />
        <ion-item
          on:click={() => {
            window.open("https://github.com/Tommertom/svelte-ionic-app", "_blank");
          }}
        >
          <ion-icon icon={allIonicIcons["star"]} slot="start" />
          <ion-label>Go to GitHub for this app</ion-label>
        </ion-item>
        <ion-item
          on:click={() => {
            window.open(
              "https://forum.ionicframework.com/t/ionicsvelte-all-of-ionics-ui-in-one-svelte-app",
              "_blank"
            );
          }}
        >
          <ion-icon icon={allIonicIcons["star"]} slot="start" />
          <ion-label>Go to Ionic Forum</ion-label>
        </ion-item>
      </ion-list>
    </ion-content>
  {/if}
</ion-menu>

<style>
  ion-item {
    cursor: pointer;
  }

  .menuhide {
    display: none;
  }
</style>
