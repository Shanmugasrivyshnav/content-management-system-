import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import Sidebar from "../components/Layout/Sidebar";
import Header from "../components/Layout/Header";
import api from "../api/axios";

const Layout = styled.div`
  display: flex;
  min-height: 100vh;
`;

const Content = styled.div`
  flex: 1;
  background: #f5f5f5;
`;

const Main = styled.main`
  padding: 30px;
`;

const Card = styled.div`
  max-width: 700px;
  background: white;
  padding: 30px;
  border-radius: 8px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Input = styled.input`
  padding: 12px;
  font-size: 16px;
`;

const TextArea = styled.textarea`
  padding: 12px;
  font-size: 16px;
  min-height: 120px;
`;

const Button = styled.button`
  padding: 12px;
  background: #2563eb;
  color: white;
  border: none;
  cursor: pointer;
  border-radius: 5px;

  &:hover {
    background: #1d4ed8;
  }
`;

const Error = styled.p`
  color: red;
`;

function PageForm() {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [description, setDescription] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title.trim()) {
      setError("Page title is required.");
      return;
    }

    try {
      setLoading(true);
      setError("");

      await api.post("/pages", {
        title,
        slug:
          slug ||
          title
            .toLowerCase()
            .replace(/\s+/g, "-")
            .replace(/[^\w-]/g, ""),
        description,
      });

      alert("Page created successfully.");

      navigate("/pages");
    } catch (err) {
      console.error(err);

      setError(err.response?.data?.message || "Unable to create page.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout>
      <Sidebar />

      <Content>
        <Header />

        <Main>
          <Card>
            <h2>Create Page</h2>

            <br />

            <Form onSubmit={handleSubmit}>
              <Input
                type="text"
                placeholder="Page Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />

              <Input
                type="text"
                placeholder="Slug (optional)"
                value={slug}
                onChange={(e) => setSlug(e.target.value)}
              />

              <TextArea
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />

              {error && <Error>{error}</Error>}

              <Button type="submit" disabled={loading}>
                {loading ? "Creating..." : "Create Page"}
              </Button>
            </Form>
          </Card>
        </Main>
      </Content>
    </Layout>
  );
}

export default PageForm;
