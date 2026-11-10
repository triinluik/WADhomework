import {createStore} from 'vuex'

export default createStore({
    //Vuex will then warn you when you try to modify the state outside a mutation
    strict: true,
    //State contains data shared between components
    state: {
        postsList: []
    },
    getters: {},
    // Responsible for changing the state
    mutations: {
        //Receives posts fetched from JSON and stores them in Vuex.
        //map() creates new array, while the spread operation copies each
        //post's existing properties and adds a like counter starting a 0.
        setPostsList: (state, posts) => {
            state.postsList = posts.map(post => ({...post, likes: 0}))
        },

        incrementLikes (state, postId) {
            //finds the post with a given id
            const post = state.postsList.find(p => p.id === postId)
            // if post exists
            if (post) {
                post.likes++;
            }
        },
        // Resets the like counters for all posts
        resetLikes(state) {
            // iterates over all posts stored in Vuex and sets their likes to 0
            state.postsList.forEach((post) => {
                post.likes = 0;
            })
        }
    },
    //Perform asynchronous actions like HTTP requests
    actions: {
        // Essentially the same as in HW2 -> response.json return a Promise
        // So it fetches posts from JSON and commits the result to the Vuex store
        fetchPosts({commit}) {
            fetch('/postitused.json')
                .then(response => response.json())
                .then(payload => {
                    commit('setPostsList', payload)
                })
        },
    },
    // Can divide larger stores to smaller sections <- don't need for this HW
    modules: {}
})
