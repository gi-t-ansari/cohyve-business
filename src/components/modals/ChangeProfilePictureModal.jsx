import React, { useRef, useState } from "react";
import ModalLayout from "./ModalLayout";
import ReactCrop, {
  centerCrop,
  convertToPixelCrop,
  makeAspectCrop,
} from "react-image-crop";
import { Box, Button } from "@mui/material";

const MIN_DIMENSION = 180;
const ASPECT_RATIO = 1;

const ChangeProfilePictureModal = ({ open, onClose, setProfilePictureSrc }) => {
  const imageRef = useRef(null);

  const [imageSrc, setImageSrc] = useState("");
  const [crop, setCrop] = useState();
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [fileName, setFileName] = useState("");

  const getInputImage = (e) => {
    const file = e.target.files?.[0];
    setFileName(file?.name);
    setIsLoading(false);

    if (!file) {
      return;
    }

    const fileSizeInMB = file.size / (1024 * 1024);
    if (fileSizeInMB > 2) {
      setError("File size must be less than 2MB");
      return;
    }

    const reader = new FileReader();
    reader.addEventListener("load", () => {
      const imageElement = new Image();
      const imageUrl = reader.result?.toString() || "";
      imageElement.src = imageUrl;
      // console.log("ImageURl", imageUrl);
      imageElement.addEventListener("load", (e) => {
        if (error) setError("");
        const { naturalWidth, naturalHeight } = e.currentTarget;
        if (naturalHeight < MIN_DIMENSION || naturalWidth < MIN_DIMENSION) {
          setError("Image must be at least 180 x 180 pixels");
          return setImageSrc("");
        }
      });
      setImageSrc(imageUrl);
    });

    reader.readAsDataURL(file);
  };

  const onImageLoad = (e) => {
    const { width, height } = e.currentTarget;
    const imageWidthInPercent = (MIN_DIMENSION / width) * 100;

    const crop = makeAspectCrop(
      {
        unit: "%",
        width: imageWidthInPercent,
      },
      ASPECT_RATIO,
      width,
      height
    );

    const centeredCrop = centerCrop(crop, width, height);

    setCrop(centeredCrop);
  };

  const handleChangeProfilePicture = () => {
    if (imageRef) {
      setIsLoading(true);
    }
    const img = imageRef.current;
    const pixelCrop = convertToPixelCrop(crop, img.width, img.height);
    const pixelRatio = window.devicePixelRatio;
    const scaleX = img.naturalWidth / img.width;
    const scaleY = img.naturalHeight / img.height;

    const canvas = document.createElement("canvas");
    canvas.width = Math.floor(pixelCrop.width * scaleX * pixelRatio);
    canvas.height = Math.floor(pixelCrop.height * scaleY * pixelRatio);
    const ctx = canvas.getContext("2d");

    ctx.scale(pixelRatio, pixelRatio);
    ctx.imageSmoothingQuality = "high";
    ctx.save();

    const cropX = pixelCrop.x * scaleX;
    const cropY = pixelCrop.y * scaleY;

    ctx.translate(-cropX, -cropY);
    ctx.drawImage(
      img,
      0,
      0,
      img.naturalWidth,
      img.naturalHeight,
      0,
      0,
      img.naturalWidth,
      img.naturalHeight
    );

    // Convert canvas data to blob
    canvas.toBlob((blob) => {
      if (!blob) {
        console.error("Failed to convert canvas data to blob");
        setIsLoading(false);
        return;
      }

      // Convert blob to a temporary URL
      const croppedImageUrl = URL.createObjectURL(blob);

      // Update state with the cropped image URL
      // Set this as the source for the cropped image
      setIsUploading(true);
      setTimeout(() => {
        setProfilePictureSrc(croppedImageUrl);

        // Resetting states and closing the modal
        onClose();
        setImageSrc("");
        setError("");
        setFileName("");
        setIsUploading(false);
        setIsLoading(false);
      }, 5000);
    }, "image/jpeg");
  };

  const closeModal = () => {
    onClose();
    setImageSrc("");
    setError("");
    setFileName("");
    setProfilePictureSrc(null);
  };

  return (
    <ModalLayout open={open} onClose={closeModal}>
      <Box
        sx={{
          overflowY: "auto",
          padding: { md: "30px 50px 15px", xs: "20px" },
          maxHeight: "90vh",
        }}
        className="custom-scrollbar scrollbar-sm"
      >
        {/* <div> */}
        <input
          type="file"
          accept="image/*"
          name="profile"
          id="profile"
          onChange={getInputImage}
          hidden
          aria-hidden
        />
        {/* <Tooltip title="Select Picture" arrow>
              <InsertPhotoIcon
                fontSize="large"
                sx={{ cursor: "pointer" }}
                onClick={() => document.getElementById("profile").click()}
              />
            </Tooltip> */}
        {/* </div> */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            border: "2px dashed",
            // borderColor: darkMode ? "#ffffff30" : "#00000030",
            width: "100%",
            borderRadius: 1,
            padding: { md: "20px 0px", xs: "10px 0px" },
            cursor: "pointer",
            // ":hover": { borderColor: darkMode ? "#ffffff60" : "#00000060" },
            transition: "0.3s",
          }}
          onClick={() => document.getElementById("profile").click()}
        >
          {/* <AddCircleOutline fontSize="large" sx={{ opacity: "40%" }} /> */}
          <p style={{ opacity: "50%" }}>
            {fileName && !error ? fileName : "Select a Photo"}
          </p>
          {error && (
            <span
              style={{
                display: "block",
                color: "#dc2626",
                fontSize: "12px",
              }}
            >
              {error}
            </span>
          )}
        </Box>
        <Box
          sx={{
            margin: imageSrc ? "15px 0px" : "30px 0px 0px",
          }}
        >
          {imageSrc && (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: "20px",
              }}
            >
              <ReactCrop
                crop={crop}
                circularCrop
                keepSelection
                aspect={ASPECT_RATIO}
                minWidth={MIN_DIMENSION}
                onChange={(pixelCrop, percentCrop) => setCrop(percentCrop)}
              >
                <img
                  ref={imageRef}
                  id="profileImg"
                  src={imageSrc}
                  alt="Profile Photo"
                  onLoad={onImageLoad}
                  style={{ maxHeight: "50vh" }}
                />
              </ReactCrop>
              <div>
                {!isLoading || !isUploading ? (
                  <Button
                    onClick={handleChangeProfilePicture}
                    variant="contained"
                    disabled={isLoading}
                  >
                    Upload
                  </Button>
                ) : (
                  <>Uploading ....</>
                )}
              </div>
            </div>
          )}
        </Box>
      </Box>
    </ModalLayout>
  );
};

export default ChangeProfilePictureModal;
