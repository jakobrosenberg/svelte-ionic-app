<script lang="ts">
  const selectChange = (event) => {
    console.log("Select change ", event.detail);
  };
</script>

<svelte:head>
  <title>Ionic Companion - Select</title>
</svelte:head>
<ion-header translucent="true">
  <ion-toolbar>
    <ion-buttons slot="start">
      <ion-menu-button />
    </ion-buttons>
    <ion-title>Select</ion-title>
  </ion-toolbar>
</ion-header>

<ion-content fullscreen>
  <ion-list>
    <ion-item>
      <ion-label>Pet</ion-label>
      <ion-select on:ionChange={selectChange}>
        <ion-select-option value="cat">Cat</ion-select-option>
        <ion-select-option value="dog">Dog</ion-select-option>
      </ion-select>
    </ion-item>

    <ion-item>
      <ion-label>Gaming</ion-label>
      <ion-select on:ionChange={selectChange} interface="popover">
        <ion-select-option value="nes">NES</ion-select-option>
        <ion-select-option value="n64">Nintendo64</ion-select-option>
        <ion-select-option value="ps">PlayStation</ion-select-option>
        <ion-select-option value="genesis">Sega Genesis</ion-select-option>
        <ion-select-option value="saturn">Sega Saturn</ion-select-option>
        <ion-select-option value="snes">SNES</ion-select-option>
      </ion-select>
    </ion-item>

    <ion-item>
      <ion-label>Notifications</ion-label>
      <ion-select on:ionChange={selectChange} value="notifications" interface="action-sheet">
        <ion-select-option value="enable">Enable</ion-select-option>
        <ion-select-option value="mute">Mute</ion-select-option>
        <ion-select-option value="mute_week">Mute for a week</ion-select-option>
        <ion-select-option value="mute_year">Mute for a year</ion-select-option>
      </ion-select>
    </ion-item>

    <ion-item>
      <ion-label>Operating System</ion-label>
      <ion-select on:ionChange={selectChange} ok-text="Okay" cancel-text="Nah">
        <ion-select-option value="dos">DOS</ion-select-option>
        <ion-select-option value="lunix">Linux</ion-select-option>
        <ion-select-option value="mac7">Mac OS 7</ion-select-option>
        <ion-select-option value="mac8">Mac OS 8</ion-select-option>
        <ion-select-option value="win3.1">Windows 3.1</ion-select-option>
        <ion-select-option value="win95">Windows 95</ion-select-option>
        <ion-select-option value="win98">Windows 98</ion-select-option>
      </ion-select>
    </ion-item>

    <ion-item>
      <ion-label>Music</ion-label>
      <ion-select value="nirvana" on:ionChange={selectChange}>
        <ion-select-option>Alice in Chains</ion-select-option>
        <ion-select-option>Green Day</ion-select-option>
        <ion-select-option value="nirvana">Nirvana</ion-select-option>
        <ion-select-option>Pearl Jam</ion-select-option>
        <ion-select-option>Smashing Pumpkins</ion-select-option>
        <ion-select-option>Soundgarden</ion-select-option>
        <ion-select-option>Stone Temple Pilots</ion-select-option>
      </ion-select>
    </ion-item>

    <ion-item>
      <ion-label>Month</ion-label>
      <ion-select value="12" on:ionChange={selectChange}>
        <ion-select-option value="01">January</ion-select-option>
        <ion-select-option value="02">February</ion-select-option>
        <ion-select-option value="03">March</ion-select-option>
        <ion-select-option value="04">April</ion-select-option>
        <ion-select-option value="05">May</ion-select-option>
        <ion-select-option value="06">June</ion-select-option>
        <ion-select-option value="07">July</ion-select-option>
        <ion-select-option value="08">August</ion-select-option>
        <ion-select-option value="09">September</ion-select-option>
        <ion-select-option value="10">October</ion-select-option>
        <ion-select-option value="11">November</ion-select-option>
        <ion-select-option value="12">December</ion-select-option>
      </ion-select>
    </ion-item>

    <ion-item>
      <ion-label>Year</ion-label>
      <ion-select value="1994" on:ionChange={selectChange}>
        <ion-select-option>1989</ion-select-option>
        <ion-select-option>1990</ion-select-option>
        <ion-select-option>1991</ion-select-option>
        <ion-select-option>1992</ion-select-option>
        <ion-select-option>1993</ion-select-option>
        <ion-select-option value="1994">1994</ion-select-option>
        <ion-select-option>1995</ion-select-option>
        <ion-select-option>1996</ion-select-option>
        <ion-select-option>1997</ion-select-option>
        <ion-select-option>1998</ion-select-option>
        <ion-select-option>1999</ion-select-option>
      </ion-select>
    </ion-item>
  </ion-list>
</ion-content>
