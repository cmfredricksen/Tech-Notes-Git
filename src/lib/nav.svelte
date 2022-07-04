<script>
    import {page} from "$app/stores"
import { getRawBody } from "@sveltejs/kit/node";
import { query_selector_all } from "svelte/internal";

    export const links = [
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
<button>&hellip;</button>

<div class="drop-down">
    {#each links as {path, title}}
        <a href={path}>{title}</a>
    {/each}
</div>

<style>
    a {
        margin: 0 1rem;
    }

    .active {
        /* text-decoration: underline; */
        color: var(--clr-accent)
    }

    button {
        display: none;
        /* padding: 1rem; */
        font-weight: bold;
        font-size: 3rem;
        background: var(--clr-black);
        color: var(--clr-white);
        box-shadow: none;
        border: none;
    }

    button:hover {
        color: var(--clr-accent);
    }

    .drop-down {
        display: none;
    }

    @media screen and (max-width: 720px) {
        nav {
            display: none;
        }

        a {
            margin: .1rem auto;
            width: 80vw;
            padding: 1rem 0;
            background-color: var(--clr-grey);
            text-align: center;
            font-weight: bold;
            font-size: 2rem;
        }

        button {
            display: block;
        }

        .drop-down {
            display:none;
            flex-direction: column;
            
        }

    }

</style>