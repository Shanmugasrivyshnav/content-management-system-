/**
 * Content & Page API
 */

import api from "./axios";

/* ===========================
   PAGE APIs
=========================== */

/**
 * Get all pages
 */
export const getPages = async () => {
  const response = await api.get("/pages");
  return response.data;
};

/**
 * Get page by ID
 */
export const getPage = async (id) => {
  const response = await api.get(`/pages/${id}`);
  return response.data;
};

/**
 * Create page
 */
export const createPage = async (pageData) => {
  const response = await api.post("/pages", pageData);
  return response.data;
};

/**
 * Update page
 */
export const updatePage = async (id, pageData) => {
  const response = await api.put(`/pages/${id}`, pageData);
  return response.data;
};

/**
 * Delete page
 */
export const deletePage = async (id) => {
  const response = await api.delete(`/pages/${id}`);
  return response.data;
};

/**
 * Publish page
 */
export const publishPage = async (id) => {
  const response = await api.patch(`/pages/${id}/publish`);
  return response.data;
};

/**
 * Unpublish page
 */
export const unpublishPage = async (id) => {
  const response = await api.patch(`/pages/${id}/unpublish`);
  return response.data;
};

/* ===========================
   CONTENT BLOCK APIs
=========================== */

/**
 * Get all blocks for a page
 */
export const getBlocks = async (pageId) => {
  const response = await api.get(`/content/page/${pageId}`);
  return response.data;
};

/**
 * Get one block
 */
export const getBlock = async (blockId) => {
  const response = await api.get(`/content/${blockId}`);
  return response.data;
};

/**
 * Create block
 */
export const createBlock = async (blockData) => {
  const response = await api.post("/content", blockData);
  return response.data;
};

/**
 * Update block
 */
export const updateBlock = async (id, data) => {
  const response = await api.put(`/content/${id}`, data);
  return response.data;
};

/**
 * Save block
 */
export const saveBlock = async (id, data) => {
  const response = await api.put(`/content/${id}`, data);
  return response.data;
};

/**
 * Delete block
 */
export const deleteBlock = async (id) => {
  const response = await api.delete(`/content/${id}`);
  return response.data;
};
