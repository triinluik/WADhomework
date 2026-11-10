<template>
    <!-- .center paigutab vormikasti lehe keskele, .form-box teeb sellest halli kasti -->
    <main class="center">
        <section class="form-box">
            <!-- @submit.prevent: vormi saatmisel lehte uuesti ei laadita,
                 selle asemel käivitatakse meetod signup -->
            <form class="signup-form" @submit.prevent="signup">

                <!-- Email: silt ja väli samal real.
                     v-model seob välja sisu muutujaga email -->
                <div class="form-row">
                    <label for="email">Email</label>
                    <input id="email" v-model="email" type="email" placeholder="Email" required>
                </div>

                <!-- Parool: type="password" näitab tähtede asemel punkte.
                     v-model seob välja sisu muutujaga password -->
                <div class="form-row">
                    <label for="password">Password</label>
                    <input id="password" v-model="password" type="password" placeholder="Password" required>
                </div>

                <!-- Veateated: v-if näitab loendit ainult siis, kui vigu on.
                     v-for teeb iga täitmata tingimuse kohta eraldi rea -->
                <ul v-if="errors.length" class="errors">
                    <li v-for="error in errors" :key="error">
                        The password is not valid - {{ error }}
                    </li>
                </ul>

                <!-- Kui kõik tingimused on täidetud, näidatakse eduteadet -->
                <p v-if="success" class="success">Signup successful!</p>

                <!-- type="submit": nupuvajutus saadab vormi ehk käivitab signup meetodi -->
                <button type="submit">Signup</button>
            </form>
        </section>
    </main>
</template>

<script>
export default {
    name: 'SignupView',

    // Komponendi andmed. Kui need muutuvad, uuendab Vue lehte automaatselt.
    data() {
        return {
            email: '',       // emaili välja sisu
            password: '',    // parooli välja sisu
            errors: [],      // täitmata tingimuste järjend
            success: false   // kas parool vastas kõigile tingimustele
        }
    },

    methods: {
        // Kontrollib parooli kõigi juhendis toodud tingimuste järgi.
        // Tagastab järjendi tingimustest, mis jäid täitmata.
        validatePassword(password) {
            const errors = []

            // Pikkus: vähemalt 8 ja vähem kui 15 märki
            if (password.length < 8 || password.length >= 15) {
                errors.push('Must be at least 8 and less than 15 characters long')
            }
            // [A-Z] otsib vähemalt üht suurtähte, test() tagastab true või false
            if (!/[A-Z]/.test(password)) {
                errors.push('Includes at least one uppercase alphabet character')
            }
            // match() leiab kõik väiketähed (g = kõik, mitte ainult esimene).
            // Kui ühtegi pole, tagastab match() null, seega || [] annab tühja järjendi
            if ((password.match(/[a-z]/g) || []).length < 2) {
                errors.push('Includes at least two lowercase alphabet characters')
            }
            // [0-9] otsib vähemalt üht numbrit
            if (!/[0-9]/.test(password)) {
                errors.push('Includes at least one numeric value')
            }
            // ^ tähendab sõne algust, seega esimene märk peab olema suurtäht
            if (!/^[A-Z]/.test(password)) {
                errors.push('Should start with an uppercase letter')
            }
            // includes() kontrollib, kas paroolis on alakriips
            if (!password.includes('_')) {
                errors.push('Includes the character "_"')
            }

            return errors
        },

        // Käivitub nupuvajutusel: kontrollib parooli ja salvestab tulemuse.
        // Kui vigu pole, on success true ja ilmub eduteade.
        signup() {
            this.errors = this.validatePassword(this.password)
            this.success = this.errors.length === 0
        }
    }
}
</script>