"use client";

import React from 'react';
import dynamic from 'next/dynamic'
const SimpleMDE = dynamic(() => import('react-simplemde-editor'), { ssr: false })
import "easymde/dist/easymde.min.css";

const NewIssuePage = () => {
  return (
    <div className="max-w-xl space-y-5">
      <div className="flex flex-col gap-y-5">
        <input type="text" placeholder="Title" className="input input-bordered w-full" />
        <SimpleMDE
          className="textarea textarea-bordered"
          placeholder="Description"
          options={{spellChecker: false}}
        >
        </SimpleMDE>
        <button className="btn btn-primary max-w-fit">Submit New Issue</button>
      </div>
    </div>
  )
}

export default NewIssuePage
