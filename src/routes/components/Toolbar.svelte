<script lang="ts">
  const clickAction = (event) => {
    console.log("You clicked me!!", event);
  };
</script>

<ion-header translucent="true">
  <ion-toolbar>
    <ion-buttons slot="start">
      <ion-menu-button />
    </ion-buttons>
    <ion-buttons slot="secondary">
      <ion-button on:click={clickAction}>
        <ion-icon slot="icon-only" name="logo-ionic" />
      </ion-button>
    </ion-buttons>

    <ion-title>Header</ion-title>

    <ion-buttons slot="primary">
      <ion-button on:click={clickAction}>
        <ion-icon slot="icon-only" name="star" />
      </ion-button>
    </ion-buttons>
  </ion-toolbar>
</ion-header>

<ion-content fullscreen>
  <ion-toolbar>
    <ion-title>Default</ion-title>
  </ion-toolbar>

  <ion-toolbar color="primary">
    <ion-title>Primary</ion-title>
  </ion-toolbar>

  <ion-toolbar color="secondary">
    <ion-title>Secondary</ion-title>
  </ion-toolbar>

  <ion-toolbar color="tertiary">
    <ion-title>Tertiary</ion-title>
  </ion-toolbar>

  <ion-toolbar color="success">
    <ion-title>Success</ion-title>
  </ion-toolbar>

  <ion-toolbar color="warning">
    <ion-title>Warning</ion-title>
  </ion-toolbar>

  <ion-toolbar color="danger">
    <ion-title>Danger</ion-title>
  </ion-toolbar>

  <ion-toolbar>
    <ion-buttons slot="secondary">
      <ion-button on:click={clickAction}>Messages (1)</ion-button>
    </ion-buttons>

    <ion-title>Buttons</ion-title>

    <ion-buttons slot="primary">
      <ion-button on:click={clickAction}>Log Out</ion-button>
    </ion-buttons>
  </ion-toolbar>
</ion-content>

<ion-footer>
  <ion-toolbar>
    <ion-buttons slot="secondary">
      <ion-button on:click={clickAction}>
        <ion-icon slot="icon-only" name="finger-print" />
      </ion-button>
    </ion-buttons>

    <ion-title>Footer</ion-title>

    <ion-buttons slot="primary">
      <ion-button on:click={clickAction}>
        <ion-icon slot="icon-only" name="more" />
      </ion-button>
    </ion-buttons>
  </ion-toolbar>
</ion-footer>
