import React from 'react';
import { Editor } from '@tinymce/tinymce-react';

export default function App() {
  return (
    <Editor
      apiKey='htikybx3c83n6555xr2r1xyn0oyimp2ojy73e5odrw79c2hi'
      init={{
        plugins: 'anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount',
        toolbar: 'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table | align lineheight | numlist bullist indent outdent | emoticons charmap | removeformat',
      }}
      initialValue="Welcome to TinyMCE!"
    />
  );
}