import { action, computed, createStore, thunk } from "easy-peasy";
import axios from "axios";
import api from "./api/url";


export default createStore({
    posts: [],
    setPosts: action((state, payload) => {
        state.posts = payload;
    }),
    postTitle: '',
    setPostTitle: action((state, payload) => {
        state.postTitle = payload;
    }),
    postBody: '',
    setPostBody: action((state, payload) => {
        state.postBody = payload;
    }),
    editTitle: '',
    setEditTitle: action((state, payload) => {
        state.editTitle = payload;
    }),
    editBody: '',
    setEditBody: action((state, payload) => {
        state.editBody = payload;
    }),
    search: '',
    setSearch: action((state, payload) => {
        state.search = payload;
    }),
    searchResult: [],
    setSearchResult: action((state, payload) => {
        state.searchResult = payload;
    }),
    postCount: computed((state) => state.posts.length),
    getPostById: computed((state) => {
        return (id) => state.posts.find(post => (post.id).toString() === id);
    }),
    savePost: thunk(async (actions, newPost, helpers) => {
        const { posts } = helpers.getState();
        try {
            const response = await axios.post(api, newPost)
            actions.setPosts([...posts, response.data]);
            actions.setPostTitle('');
            actions.setPostBody("");
        } catch (err) {
            console.log(`Error: ${err.message}`);
        }
         
    }),
    deletePost: thunk(async (actions, id, helpers) => {
        const { posts } = helpers.getState();
        try {
            await axios.delete(`${api}/${id}`);
            actions.setPosts(posts.filter(post => post.id !== id));
          } catch (err) {
            console.log(`Error: ${err.message}`);
          }
    }),
    editPost: thunk(async (actions, updatedPost, helpers) => {
        const { posts } = helpers.getState();
        const { id } = updatedPost;
        try {
            const response = await axios.put(`${api}/${id}`, updatedPost);
            actions.setPosts(posts.map(post => post.id === id ? { ...response.data } : post));
            actions.setEditTitle('')
            actions.setEditBody('')
          } catch (err) {
            console.log(`Error: ${err.message}`);
          }

    })
})









