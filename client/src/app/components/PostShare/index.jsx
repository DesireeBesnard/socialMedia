import "./style.css"
import { useState, useRef } from "react";
import { AiOutlinePicture, AiOutlinePlayCircle, AiOutlineCalendar, AiOutlineClose } from "react-icons/ai";
import { BiMap } from "react-icons/bi";
import React from "react";

const PostShare = () => {
    const [image, setImage] = useState(null)
    const imageRef = useRef()

    const onImageChange = e => {
        if (e.target.files && e.target.files[0]) {
            let img = e.target.files[0]
            setImage({
                image: URL.createObjectURL(img)
            })
        }
    }

    return (
        <div className="postshare">
            <img src="img/profileImg.jpg" alt="post author" />
            <div>
                <input type="text" name="" placeholder="What's happening" />
                <div className="post-options">
                    <div className="option" onClick={() => imageRef.current.click()}>
                        <AiOutlinePicture size={25} />
                        <span>Photo</span>
                    </div>
                    <div className="option">
                        <AiOutlinePlayCircle size={25} />
                        <span>Video</span>
                    </div>
                    <div className="option">
                        <BiMap size={25} />
                        <span>Location</span>
                    </div>
                    <div className="option">
                        < AiOutlineCalendar size={25} />
                        <span>Schedule</span>
                    </div>
                    <button className="button ps-button">
                        Share
                    </button>
                    <div className="fileInput">
                        <input type="file" name="myImage" ref={imageRef} onChange={onImageChange} />
                    </div>
                </div>
                {image && (
                    <div className="previewimage">
                        < AiOutlineClose onClick={()=> setImage(null)}/>
                        <img src={image.image} alt="preview" />
                    </div>
                )}
            </div>
        </div>
    )
}

export default PostShare