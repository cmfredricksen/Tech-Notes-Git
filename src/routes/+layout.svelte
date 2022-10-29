<script>
  import "../global.css";
  import Header from "$lib/header.svelte";
  import Footer from "$lib/footer.svelte";
  import { toggle } from "../stores/toggle";
  import DropdownMenu from "$lib/components/dropdown-menu.svelte";

  $toggle = false;
</script>

<Header>

</Header>


<div class="wrapper">
  <button on:click={() => toggle.set(!$toggle)} class="menu-button">&equiv; Menu</button>
  {#if $toggle}
    <DropdownMenu />
  {/if}
  <slot />
</div>

<Footer />

<style>
  .wrapper {
    width: 60vw;
    margin: 2rem auto;
  
  }

  .menu-button {
    width: 100%;
    background-color: var(--clr-black);
    padding: .5rem 1rem;
    margin: .5rem auto;
    display: none;
    font-size: 1.5rem;
    border-radius: .5rem;
    color: var(--clr-white);
    border: 1px solid var(--clr-accent);
  }

  .menu-button:hover {
    color: var(--clr-accent);
  }

  @media only screen and (max-width: 720px) {
    .wrapper {
      width: 90vw;
      margin: 1rem auto;
    }

    .menu-button {
      display: block;
    }
  }
</style>