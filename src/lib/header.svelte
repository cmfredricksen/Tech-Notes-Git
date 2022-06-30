<script>
  import Nav from "./nav.svelte"
</script>
<header>
    <h1>Tech Notes</h1>
    <h3>Git & GitHub for Beginners</h3>
    <Nav />
</header>

<style>
  header {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    padding: 1rem 1rem 2rem;
    border-bottom: 2px solid var(--clr-grey);
  }

  h3 {
    color: var(--clr-accent);
  }

</style>
