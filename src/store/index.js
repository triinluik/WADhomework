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
        setPostsList: (state, posts) => {
            state.postsList = posts
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
