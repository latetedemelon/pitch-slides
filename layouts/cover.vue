<template>
<div class="slidev-layout cover">
  <div class="content">
    <h1><slot /></h1>
    <div class="subtitle">
      <slot name="subtitle" />
    </div>
  </div>

  <img class="logo" src="/bchydro-logo.svg" alt="BC Hydro" />
  <div class="bch-footer">
    P.I.T.C.H. – Portfolio Investment Tracker & Control Hub
  </div>
</div>
</template>

<style scoped>
.cover {
background: white;
}
.content {
margin-top: 10vh;
max-width: 80%;
}
h1 {
font-size: 2.4em;
line-height: 1.1;
}
.subtitle {
margin-top: 1rem;
font-size: 1.2em;
color: rgba(62,57,53,0.8);
}
.logo {
position: absolute;
left: 36px;
top: 28px;
width: 170px;
}
</style>
