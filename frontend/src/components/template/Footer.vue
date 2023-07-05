<template>
  <footer class="footer">
    <span>Copyright <strong> Cod3r</strong></span>
  </footer>
</template>

<script>
export default {
    name: 'Footer'
}
</script>

<style>
    .footer{
        grid-area: footer;
        background-color: #DDD;
        color: #333;

        display: flex;
        align-items: center;
        justify-content: end;
        padding-right: 10px;
    }
</style>