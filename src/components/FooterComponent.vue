<template>
    <footer>
        <p>&copy; {{ year }} PostIt. All rights reserved.</p>
        <p>Contact: liisi.valdvee@ut.ee</p>
    </footer>
</template>

<script>
export default {
    name: 'FooterComponent',
    data() {
        return {
            // aasta võetakse kuupäevast, et see ei vananeks
            year: new Date().getFullYear()
        }
    }
}
</script>