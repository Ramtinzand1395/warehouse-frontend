import React, { useCallback, useState } from "react";
import {
  useDropzone,
  DropzoneRootProps,
  DropzoneInputProps,
} from "react-dropzone";
import { BsTrash, BsTextCenter, BsFilePdf } from "react-icons/bs";
import { MdPreview } from "react-icons/md";

const UploadButton: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    const newFile = acceptedFiles[0];

    // Read the file and set the preview
    const reader = new FileReader();
    reader.onloadend = () => {
      setPreview(reader.result as string);
    };
    reader.readAsDataURL(newFile);

    setFile(newFile);
  }, []);

  const onDelete = () => {
    setFile(null);
    setPreview(null);
  };

  const {
    getRootProps,
    getInputProps,
    isDragActive,
  }: {
    getRootProps: (props?: DropzoneRootProps) => DropzoneRootProps;
    getInputProps: (props?: DropzoneInputProps) => DropzoneInputProps;
    isDragActive: boolean;
  } = useDropzone({ onDrop });

  return (
    <div>
      {!file ? (
        <div
          {...getRootProps()}
          className={`upload-btn ${isDragActive ? "active" : ""}`}
        >
          <input {...getInputProps()} />
          {!file ? (
            <p>Drag your file here or click to select a file</p>
          ) : (
            <p>delete and add new file</p>
          )}
        </div>
      ) : (
        <div className="file-preview flex flex-col justify-center items-center">
          {typeof preview === "string" && (
            <img src={preview} className="w-full h-full" alt="File Preview" />
          )}
          <div className="w-full flex items-center justify-around">
            <button
              onClick={onDelete}
              className="delete-btn flex items-center text-white bg-red-500 py-1 px-5 rounded-lg m-2 hover:bg-red-700 hover:scale-110 transition ease-in-out duration-200"
            >
              <BsTrash className="mr-2"/>
              Delete
            </button>
            <button
              onClick={onDelete}
              className="delete-btn flex items-center text-white bg-blue-500 w-32 py-1 px-5 rounded-lg my-2 hover:bg-blue-700 hover:scale-110 transition ease-in-out duration-200 "
            >
              <BsTextCenter className="mr-2" />
              Text
            </button>
            <button
              onClick={onDelete}
              className="delete-btn flex items-center text-white bg-blue-500 w-32 py-1 px-5 rounded-lg my-2 hover:bg-blue-700 hover:scale-110 transition ease-in-out duration-200"
            >
              <BsFilePdf className="mr-2" />
              PDF
            </button>
            <button
              onClick={onDelete}
              className="delete-btn flex items-center text-white bg-blue-500 w-32 py-1 px-5 rounded-lg my-2 hover:bg-blue-700 hover:scale-110 transition ease-in-out duration-200"
            >
              <MdPreview className="mr-2" />
              Review
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default UploadButton;
