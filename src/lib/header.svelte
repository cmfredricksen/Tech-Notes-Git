<script>
  import Nav from "./nav.svelte"
  import DropDown from "./components/drop-down.svelte";
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

  @media only screen and (max-width: 720px) {
    header {
      flex-direction: column;
      padding: 0;
      justify-content: baseline;
      align-items: center;
    }
  }

</style>
