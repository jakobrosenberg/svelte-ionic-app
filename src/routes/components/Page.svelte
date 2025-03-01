<script lang="ts">
  import IonPage from "$ionic/svelte/components/IonPage.svelte";

  import {
    onIonViewWillEnter as onIonViewWillEnterFn,
    onIonViewDidEnter as onIonViewDidEnterFn,
    onIonViewWillLeave as onIonViewWillLeaveFn,
    onIonViewDidLeave as onIonViewDidLeaveFn,
  } from "$ionic/svelte";

  const onIonViewWillEnter = () => {
    console.log("Page:onIonViewWillEnter");
  };

  const onIonViewDidEnter = () => {
    console.log("Page:onIonViewDidEnter");
  };

  const onIonViewWillLeave = () => {
    console.log("Page:onIonViewWillLeave");
  };

  const onIonViewDidLeave = () => {
    console.log("Page:onIonViewDidLeave");
  };

  const codeSnippet = `
  // IonSvelte code - 1 line
  let prevNode = null

  /**  @param {LayoutOrDecorator} node */
  function setComponent(node) {
    // IonSvelte code - if statement
    if (node.isPage) {
      onIonViewWillEnterStore.set(node.path)
      onIonViewWillLeaveStore.set(prevNode?.path)
    }

    // original code in Route.svelte
    let PendingComponent = node.component()
    if (PendingComponent instanceof Promise)
      PendingComponent.then(onComponentLoaded)
    else onComponentLoaded(PendingComponent)

    // IonSvelte code - if statement
    if (node.isPage) {
      onIonViewDidLeaveStore.set(prevNode?.path)
      onIonViewDidEnterStore.set(node.path)
      prevNode = node
    }
  `;

  const ionPageSyntax = `<IonPage
  route="/components/Page"
  onIonViewWillEnter={onIonViewWillEnter}
  onIonViewDidEnter={onIonViewDidEnter}
  onIonViewWillLeave={onIonViewWillLeave}
  onIonViewDidLeave={onIonViewDidLeave}>`;

  onIonViewWillEnterFn("/components/Page", () => {
    console.log("Page:the on-function as onIonViewWillEnter hook");
  });

  onIonViewDidEnterFn("/components/Page", () => {
    console.log("Page:the on-function as onIonViewDidEnter hook");
  });

  onIonViewWillLeaveFn("/components/Page", () => {
    console.log("Page:the on-function as onIonViewWillLeave hook");
  });

  onIonViewDidLeaveFn("/components/Page", () => {
    console.log("Page:the on-function as onIonViewDidLeave hook");
  });
</script>

<svelte:head>
  <title>Ionic Companion - Page</title>
</svelte:head>

<IonPage
  route="/components/Page"
  {onIonViewWillEnter}
  {onIonViewDidEnter}
  {onIonViewWillLeave}
  {onIonViewDidLeave}
>
  <ion-header translucent="true">
    <ion-toolbar>
      <ion-buttons slot="start">
        <ion-menu-button />
      </ion-buttons>
      <ion-title>Page</ion-title>
    </ion-toolbar>
  </ion-header>

  <ion-content fullscreen>
    <ion-card>
      This intends to show the working of the IonPage component. This holds the lifecycle hooks:
      <br />
      <pre>
  ionViewWillEnter
  ionViewDidEnter
  ionViewWillLeave
  ionViewDidLeave
</pre>

      Syntax:
      <pre>
  {ionPageSyntax}
</pre>

      Unfortunately (for now) this IonPage implementation requires that your tell it its
      corresponding route, in order for it to know which events belongs to that specific page.
      <br /><br />
      It's work in progess to figure out of we can derive the route to this component automatically.
      <br /><br />
      Secondly, it might be that the events are not fire in the proper place by the router. For instance,
      will they fire after completion of the animation? Not now!
      <br /><br />
      Thirdly, the animations are not triggered after a second load - this is also an issue to resolve.
    </ion-card>

    <ion-card>
      To get this working, I had to change Route.svelte from the roxi/routify library. Which of
      course, is not ideal. But, looking at the vue/react implementation of routing, I see there is
      lots of coding going on to make it work.
      <br />
      So likely there needs to be a custom Router and Route component deployed with the future IonicSvelte
      library.
      <br />
      Code inserted:
      <pre>
  {codeSnippet}
</pre>
    </ion-card>
  </ion-content>
</IonPage>
