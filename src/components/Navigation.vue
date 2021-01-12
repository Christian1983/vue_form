<template lang='pug'>
  .navigation
    .nav
        a(href='/', style="font-size: 16px") CrawlerTV
    .nav
        a(href='/movies') CrawlerTV
    .nav
        a(href='/movies') CrawlerTV
</template>

<script>
export default {
    name: 'Navigation'
}
</script>

<style>
    .navigation {
        display: flex;
        width: 100%;
        min-height: 60px;
        box-shadow: 0 .5rem 1rem rgba(255,255,255, .5);
        background: black
    }

    .nav {
        margin-left: .5rem;
        margin-right: 1.5rem;
    }

    a {
        text-decoration: none;
        color: white;
        text-shadow: 2px rgba(255,255,255,.5);
    }
</style>