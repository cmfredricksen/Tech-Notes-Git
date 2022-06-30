<script>
    import {page} from "$app/stores"

    const links = [
        {
            title: "Home",
            path: "/"
        },
        {
            title: "Git Started",
            path: "/git-started"
        },
        {
            title: "GitHub Basics",
            path: "/github-basics"
        },
        {
            title: "Git Branches",
            path: "/git-branches"
        },
        {
            title: "GitHub Pages",
            path: "/github-pages"
        }
    ]
</script>

<nav>
    {#each links as {path, title}}
        <a class:active={$page.path === path} href={path}>{title}</a>
    {/each}
</nav>

<style>
    a {
        margin: 0 1rem;
    }

    .active {
        /* text-decoration: underline; */
        color: var(--clr-accent)
    }

</style>