import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  pages: [],
  blocks: [],
  loading: false,
  error: null,
};

const contentSlice = createSlice({
  name: "content",

  initialState,

  reducers: {
    setLoading(state, action) {
      state.loading = action.payload;
    },

    setError(state, action) {
      state.error = action.payload;
    },

    clearError(state) {
      state.error = null;
    },

    setPages(state, action) {
      state.pages = action.payload;
    },

    addPage(state, action) {
      state.pages.push(action.payload);
    },

    updatePage(state, action) {
      state.pages = state.pages.map((page) =>
        page._id === action.payload._id ? action.payload : page,
      );
    },

    deletePage(state, action) {
      state.pages = state.pages.filter((page) => page._id !== action.payload);
    },

    setBlocks(state, action) {
      state.blocks = action.payload;
    },

    addBlock(state, action) {
      state.blocks.push(action.payload);
    },

    updatePageStatus(state, action) {
      state.pages = state.pages.map((page) =>
        page._id === action.payload._id ? action.payload : page,
      );
    },

    updateBlock(state, action) {
      state.blocks = state.blocks.map((block) =>
        block._id === action.payload._id ? action.payload : block,
      );
    },

    deleteBlock(state, action) {
      state.blocks = state.blocks.filter(
        (block) => block._id !== action.payload,
      );
    },
  },
});

export const {
  setLoading,
  setError,
  clearError,
  setPages,
  addPage,
  updatePage,
  deletePage,
  updatePageStatus,
  setBlocks,
  addBlock,
  updateBlock,
  deleteBlock,
} = contentSlice.actions;
export default contentSlice.reducer;
