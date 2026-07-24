import React, { useEffect, useMemo, useState, useCallback } from "react";

import styled from "styled-components";

import { Link } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";

import Sidebar from "../components/Layout/Sidebar";
import Header from "../components/Layout/Header";
import Notification from "../components/Common/Notification";

import {
  getPages,
  deletePage,
  publishPage,
  unpublishPage,
} from "../api/content";

import {
  setPages,
  setLoading,
  setError,
} from "../features/content/contentSlice";

const Layout = styled.div`
  display: flex;
`;

const Content = styled.div`
  flex: 1;
`;

const Main = styled.main`
  padding: 30px;
`;

const Card = styled.div`
  background: white;
  padding: 25px;
  border-radius: 8px;
`;

const Search = styled.input`
  width: 100%;
  padding: 12px;
  margin: 20px 0;
`;

const Button = styled.button`
  margin-right: 10px;
`;

function PageList() {
  const dispatch = useDispatch();
  const [notification, setNotification] = useState({
    message: "",
    type: "success",
  });

  const { pages, loading } = useSelector((state) => state.content);

  const [search, setSearch] = useState("");

  const loadPages = useCallback(async () => {
    try {
      dispatch(setLoading(true));

      const data = await getPages();

      dispatch(setPages(data));
    } catch (err) {
      dispatch(setError(err.message));
    } finally {
      dispatch(setLoading(false));
    }
  }, [dispatch]);

  useEffect(() => {
    loadPages();
  }, [loadPages]);

  const filteredPages = useMemo(() => {
    return pages.filter((page) =>
      page.title.toLowerCase().includes(search.toLowerCase()),
    );
  }, [pages, search]);

  const handleDelete = async (id) => {
    if (!window.confirm("Delete page?")) return;

    try {
      await deletePage(id);

      setNotification({
        message: "Page deleted successfully.",
        type: "success",
      });

      loadPages();
    } catch (err) {
      setNotification({
        message: "Failed to delete page.",
        type: "error",
      });
    }
  };

  const handlePublish = async (page) => {
    if (page.published) {
      await unpublishPage(page._id);
    } else {
      await publishPage(page._id);
    }

    loadPages();
    setNotification({
      message: page.published ? "Page unpublished." : "Page published.",
      type: "success",
    });
  };

  return (
    <Layout>
      <Notification message={notification.message} type={notification.type} />;
      <Sidebar />
      <Content>
        <Header />

        <Main>
          <Card>
            <h2>Pages</h2>

            <Search
              placeholder="Search page..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />

            {loading && <p>Loading...</p>}

            {!loading && filteredPages.length === 0 && <p>No pages found.</p>}

            {filteredPages.map((page) => (
              <div
                key={page._id}
                style={{
                  marginBottom: 25,
                  borderBottom: "1px solid #eee",
                  paddingBottom: 15,
                }}
              >
                <h3>{page.title}</h3>

                <p>Status :{page.published ? " Published" : " Draft"}</p>

                <Link to={`/pages/edit/${page._id}`}>Edit</Link>

                <Button onClick={() => handlePublish(page)}>
                  {page.published ? "Unpublish" : "Publish"}
                </Button>

                <Button onClick={() => handleDelete(page._id)}>Delete</Button>
              </div>
            ))}
          </Card>
        </Main>
      </Content>
    </Layout>
  );
}

export default PageList;
