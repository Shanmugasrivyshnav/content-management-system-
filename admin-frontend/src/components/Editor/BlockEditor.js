import React from "react";

import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Table from "@tiptap/extension-table";
import TableRow from "@tiptap/extension-table-row";
import TableCell from "@tiptap/extension-table-cell";
import TableHeader from "@tiptap/extension-table-header";
import Placeholder from "@tiptap/extension-placeholder";

function BlockEditor({ content, onUpdate }) {
  const editor = useEditor({
    extensions: [
      StarterKit,

      Table.configure({
        resizable: true,
      }),

      TableRow,
      TableCell,
      TableHeader,

      Placeholder.configure({
        placeholder: "Write something...",
      }),
    ],

    content,

    onBlur: ({ editor }) => {
      onUpdate(editor.getJSON());
    },
  });

  return <EditorContent editor={editor} />;
}

export default BlockEditor;
