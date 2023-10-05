import { useState } from "react";
import * as adminAPI from "../../api/adminAPI";
import { MouseEv } from "../../types";
import { AiOutlineCloudUpload } from "react-icons/ai";

const URL_PHOTOS = "http://localhost:3001/uploads/";

interface Props {
    photos: string[];
    setPhotos: React.Dispatch<React.SetStateAction<string[]>>;
}

const UploadPhotos = ({ photos, setPhotos }: Props) => {
    const [uploadPhotosByLink, setUploadPhotosByLink] = useState<string>("");

    const uploadFromLink = async (event: MouseEv) => {
        try {
            event.preventDefault();

            const response = await adminAPI.uploadPhotoFromLink(
                uploadPhotosByLink
            );

            setPhotos((prev) => [...prev, response])
            setUploadPhotosByLink("");
        } catch (error) {
            console.log(error);
            throw error;
        }
    };

    return (
        <div>
            <h3 className="text-xl mb-1 mt-4 font-montserrat">
                Upload Photos From URL
            </h3>{" "}
            <div className="flex flex-col md:flex-row gap-2">
                <input
                    className="admin-input"
                    type="text"
                    placeholder="Place your link here..."
                    value={uploadPhotosByLink}
                    onChange={(ev) => setUploadPhotosByLink(ev.target.value)}
                />
                <button onClick={uploadFromLink} className="admin-button">
                    Upload
                </button>
            </div>
            <div className="grid gap-2 mt-2 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                {photos.length > 0 &&
                    photos.map((photo) => (
                        <div className="flex items-center justify-center relative" key={photo}>
                            <img
                                src={URL_PHOTOS + photo}
                                alt=""
                                className="rounded-xl aspect-square object-cover w-36"
                            />
                        </div>
                    ))}
            </div>
            <label className="flex flex-col h-32 mt-2 max-w-lg md:max-w-xs items-center justify-center cursor-pointer gap-1 border bg-transparent rounded-lg text-gray-500 text-xl">
                Upload from device
                <AiOutlineCloudUpload size={32} />
                <input type="file" multiple hidden />
            </label>
        </div>
    );
};

export default UploadPhotos;
