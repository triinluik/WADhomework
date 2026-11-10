<template>
    <header>
        <!-- <router-link> asendab <a href>, leht vahetub ilma uuesti laadimata -->
        <nav>
            <router-link to="/">Home</router-link>
            <router-link to="/signup">Signup</router-link>
        </nav>

        <!-- Avatarile vajutades avaneb kasutaja menüü -->
        <div class="avatar">
            <img src="images/tundmatu.jpg" alt="User profile" @click="showMenu = !showMenu">
            <div v-if="showMenu" class="dropdown">
                <p>Liisi Valdvee</p>
                <p>liisi.valdvee@ut.ee</p>
                <router-link to="/signup" @click="showMenu = false">logout</router-link>
            </div>
        </div>
    </header>
</template>

<script>
export default {
    name: 'HeaderComponent',
    data() {
        return {
            // menüü on alguses kinni
            showMenu: false
        }
    }
}
</script>