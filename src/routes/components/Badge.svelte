<script>
  import IonPage from "$ionic/svelte/components/IonPage.svelte";
  import { onIonViewDidEnter } from "$ionic/svelte";

  onIonViewDidEnter("/components/Badge", () => {
    console.log("Badge:onIonViewWillEnter");
  });
</script>

<IonPage>
  <ion-header translucent="true">
    <ion-toolbar>
      <ion-buttons slot="start">
        <ion-menu-button />
      </ion-buttons>
      <ion-title>Badges</ion-title>
    </ion-toolbar>
  </ion-header>

  <ion-content fullscreen>
    <ion-list>
      <ion-list-header>Badges</ion-list-header>
      <ion-item>
        <ion-label>Followers</ion-label>
        <ion-badge slot="end">22k</ion-badge>
      </ion-item>
      <ion-item>
        <ion-label>Likes</ion-label>
        <ion-badge color="secondary" slot="end">118k</ion-badge>
      </ion-item>
      <ion-item>
        <ion-label>Stars</ion-label>
        <ion-badge color="tertiary" slot="end">34k</ion-badge>
      </ion-item>
      <ion-item>
        <ion-label>Completed</ion-label>
        <ion-badge color="success" slot="end">80</ion-badge>
      </ion-item>
      <ion-item>
        <ion-label>Warnings</ion-label>
        <ion-badge color="warning" slot="end">70</ion-badge>
      </ion-item>
      <ion-item>
        <ion-label>Notifications</ion-label>
        <ion-badge color="danger" slot="end">1000</ion-badge>
      </ion-item>
      <ion-item>
        <ion-label>Unread</ion-label>
        <ion-badge color="light" slot="end">24</ion-badge>
      </ion-item>
      <ion-item>
        <ion-label>Drafts</ion-label>
        <ion-badge color="medium" slot="end">14</ion-badge>
      </ion-item>
      <ion-item>
        <ion-label>Deleted</ion-label>
        <ion-badge color="dark" slot="end">4</ion-badge>
      </ion-item>
    </ion-list>
  </ion-content>
</IonPage>
