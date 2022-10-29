<script>
  import { page } from "$app/stores";

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

<nav>
  {#each links as { path, title }}
    <a class:active={$page.url.pathname === path} href={path}>{title}</a>
  {/each}
</nav>

<style>
  a {
    margin: 0 1rem;
  }

  .active {
    color: var(--clr-accent);
  }

  @media screen and (max-width: 720px) {
    nav {
      display: none;
    }

    a {
      margin: 0.1rem auto;
      width: 80vw;
      padding: 1rem 0;
      background-color: var(--clr-grey);
      text-align: center;
      font-weight: bold;
      font-size: 2rem;
    }
  }
</style>
