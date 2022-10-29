<script>
  import { toggle } from "../../stores/toggle";

  export const links = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "Git Started",
      path: "/git-started",
    },
    {
      title: "GitHub Basics",
      path: "/github-basics",
    },
    {
      title: "Git Branches",
      path: "/git-branches",
    },
    {
      title: "GitHub Pages",
      path: "/github-pages",
    },
  ];
</script>

<div class="overlay" on:click={() => toggle.set(false)} on:keypress>
  <nav>
    {#each links as { title, path }}
      <a href={path}>{title}</a>
    {/each}
  </nav>
</div>

<style>
  .overlay {
    width: 90vw;
    background-color: var(--clr-black);
    margin: -0 auto;
    display: grid;
  }

  nav {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: 90%;
  }

  a {
    margin: 0.25rem;
    padding: 0.5rem;
    font-size: 2rem;
  }
</style>
