<template>
    <div>
        <div>Setup Comparisions</div>
        <div>
            <button @click="changeText">Change Text</button>
            <div v-if="fname">Name: {{ fullName }}</div>
            <div>Message: {{ displayMessage }}</div>
        </div>
        <Show></Show>
    </div>
</template>

<!--<script>-->
<!--// OPTIONS API-->
<!--import Show from "./Show.vue"-->

<!--export default {-->
<!--    props: {-->
<!--        message: String,-->
<!--    },-->
<!--    components: {-->
<!--        Show-->
<!--    },-->
<!--    data() {-->
<!--        return {-->
<!--            fname: 'Rushabh',-->
<!--            lname: 'Buch',-->
<!--            displayMessage: this.message-->
<!--        }-->
<!--    },-->
<!--    computed: {-->
<!--        fullName() {-->
<!--            return this.fname + " " + this.lname;-->
<!--        }-->
<!--    },-->
<!--    methods: {-->
<!--        changeText() {-->
<!--            if (this.fname && this.lname) {-->
<!--                this.fname = null;-->
<!--                this.lname = null;-->
<!--            } else {-->
<!--                this.fname = 'Rushabh';-->
<!--                this.lname = 'Buch';-->
<!--            }-->
<!--        },-->
<!--        changeMessage() {-->
<!--            if (!this.fname) {-->
<!--                this.displayMessage = 'Welcome to the Options Api'-->
<!--            } else {-->
<!--                this.displayMessage = this.message-->
<!--            }-->
<!--        }-->
<!--    },-->
<!--    watch: {-->
<!--        fname: function () {-->
<!--            this.changeMessage()-->
<!--        }-->
<!--    }-->
<!--}-->
<!--</script>-->


<!--<script>-->

<!--// COMPOSITION API-->
<!--import {computed, defineComponent, ref, watch} from "vue";-->
<!--import Show from './Show.vue'-->
<!--export default defineComponent({-->
<!--    props: {-->
<!--        message: String,-->
<!--    },-->
<!--    components:{-->
<!--        Show-->
<!--    },-->
<!--    setup(props) {-->
<!--        const fname = ref('Rushabh');-->
<!--        const lname = ref('Buch');-->
<!--        const displayMessage = ref(props.message);-->

<!--        const fullName = computed(() => fname.value + " " + lname.value);-->

<!--        function changeText() {-->
<!--            if (fname.value && lname.value) {-->
<!--                fname.value = null;-->
<!--                lname.value = null;-->
<!--            } else {-->
<!--                fname.value = 'Rushabh';-->
<!--                lname.value = 'Buch';-->
<!--            }-->
<!--        }-->

<!--        function changeMessage() {-->
<!--            if (!fname.value) {-->
<!--                displayMessage.value = 'Welcome to the Composition Api'-->
<!--            } else {-->
<!--                displayMessage.value = props.message-->
<!--            }-->
<!--        }-->

<!--        watch(fname, () => {-->
<!--            changeMessage();-->
<!--        })-->

<!--        return {fname, lname, displayMessage, changeText}-->
<!--    }-->
<!--})-->
<!--</script>-->

<script>
export default {
    layouts: {}
}
</script>

<script setup>

// SETUP API
import {computed, ref, watch} from "vue";
import Show from './Show.vue';

const props = defineProps({
    message: String,
})

const fname = ref('Rushabh');
const lname = ref('Buch');
const displayMessage = ref(props.message);

const fullName = computed(() => fname.value + " " + lname.value);

function changeText() {
    if (fname.value && lname.value) {
        fname.value = null;
        lname.value = null;
    } else {
        fname.value = 'Rushabh';
        lname.value = 'Buch';
    }
}

function changeMessage() {
    if (!fname.value) {
        displayMessage.value = 'Welcome to the Setup Api'
    } else {
        displayMessage.value = props.message
    }
}

watch(fname, () => {
    changeMessage();
})
</script>


<!--<script>-->
<!--export default {-->
<!--    pprops: {-->
<!--        'fname': String,-->
<!--        'lname': String-->
<!--    },-->
<!--}-->
<!--</script>-->

<!--<script setup>-->
<!--defineProps({-->
<!--    'message': String-->
<!--})-->
<!--</script>-->
