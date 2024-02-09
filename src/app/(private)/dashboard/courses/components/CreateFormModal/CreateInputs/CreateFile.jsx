"use client"
import {FaCloudArrowUp} from "react-icons/fa6";
import {Button} from "@mui/material";
import {styled} from '@mui/material/styles';
import {useRef, useState} from "react";
import {MdDelete} from "react-icons/md";

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});
export default function CreateFile({register}) {
  const [fileName, setFileName] = useState('');
  const [fileUrl, setFileUrl] = useState(null);
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFileName(file.name);
      setFileUrl(URL.createObjectURL(file));
    }
  };
  return (
    <div>
      <Button className={"max-w-[200px] overflow-hidden "} component="label" variant="contained"
              startIcon={<FaCloudArrowUp/>}>
        {fileName ? "Image uploaded" : 'Choose file'}
        <VisuallyHiddenInput type="file" onChange={handleFileChange}
                             name="image" id="image"
                             {...register('image')}
        />
      </Button>
      <p> Note: Image is not required
      </p>
      {fileUrl &&
        <div className={" p-2 flex flex-col gap-1"}>
          <img className={"max-w-[200px] max-h-[200px]"} src={fileUrl} alt={fileName}/>
          <Button variant="outlined" startIcon={<MdDelete/>} className={"w-fit"} color={"error"}
                  onClick={
                    () => {
                      setFileUrl(null)
                      setFileName('')
                    }
                  }
          >
            Delete
          </Button>
        </div>
      }
    </div>
  )
}