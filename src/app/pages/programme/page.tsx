"use client";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

import "./CreateProgrammePage.css"; // Import your CSS or styling file

interface Programme {
  title: string;
  description: string;
  portraitImgUrl: string;
  portraitImg: File | null;
  landscapeImgUrl: string;
  landscapeImg: File | null;
  themes: string[];
}

const CreateProgrammePage = () => {
  const [programme, setProgramme] = useState<Programme>({
    title: "",
    description: "",
    portraitImgUrl: "",
    portraitImg: null,
    landscapeImgUrl: "",
    landscapeImg: null,
    themes: [],
  });

  const availableThemes = [
    // Engineering Themes
    "Workshop",
    "Seminar",
    "Lecture",
    "Hackathon",
    "Project Exhibition",
    "Tech Talk",

    // Cultural Themes
    "Music Concert",
    "Dance Performance",
    "Art Exhibition",
    "Drama and Theatre",
    // Non-Technical Themes
    "Sports Event",
  ];

  const handleThemeChange = (theme: string) => {
    if (programme.themes.includes(theme)) {
      setProgramme(prev => ({
        ...prev,
        themes: prev.themes.filter(
          (selectedTheme) => selectedTheme !== theme
        ),
      }));
    } else {
      setProgramme(prev => ({ 
        ...prev, 
        themes: [...prev.themes, theme] 
      }));
    }
  };

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setProgramme(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const uploadImage = async (image: File) => {
    try {
      const formData = new FormData();
      formData.append("myimage", image);
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_API}/image/uploadimage`,
        {
          method: "POST",
          body: formData,
        }
      );

      if (response.ok) {
        const data = await response.json();
        console.log("Image uploaded successfully:", data);
        return data.imageUrl;
      } else {
        console.error("Failed to upload the image.");
        return null;
      }
    } catch (error) {
      console.error("Error:", error);
      return null;
    }
  };

  const handleCreateProgramme = async () => {
    try {
      if (
        programme.title === "" ||
        programme.description === "" ||
        programme.themes.length === 0
      ) {
        toast.error("Please fill all the fields", {
          position: toast.POSITION.TOP_CENTER,
        });
        return;
      }

      let portraitImgUrl = programme.portraitImgUrl;
      let landscapeImgUrl = programme.landscapeImgUrl;

      if (programme.portraitImg) {
        portraitImgUrl = await uploadImage(programme.portraitImg);
        if (!portraitImgUrl) {
          toast.error("Portrait Image upload failed", {
            position: toast.POSITION.TOP_CENTER,
          });
          return;
        }
      }
      if (programme.landscapeImg) {
        landscapeImgUrl = await uploadImage(programme.landscapeImg);
        if (!landscapeImgUrl) {
          toast.error("Landscape Image upload failed", {
            position: toast.POSITION.TOP_CENTER,
          });
          return;
        }
      }

      const newProgramme = { ...programme, portraitImgUrl, landscapeImgUrl };

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_API}/programme/createprogramme`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newProgramme),
          credentials: "include",
        }
      );

      if (response.ok) {
        const data = await response.json();
        console.log("Programme creation successful", data);

        toast.success("Programme Created Successfully", {
          position: toast.POSITION.TOP_CENTER,
        });
      } else {
        console.error("Programme creation failed", response.statusText);
        toast.error("Programme Creation Failed", {
          position: toast.POSITION.TOP_CENTER,
        });
      }
    } catch (error) {
      console.error("An error occurred during programme creation", error);
    }
  };

  return (
    <div className="create-programme-container">
      <div className="header">
        <h1>Create Programme</h1>
        <p>Fill in the details to create a new programme</p>
      </div>
      <div className="form-container">
        <div className="form-group">
          <label>Title:</label>
          <input
            type="text"
            name="title"
            placeholder="Title"
            value={programme.title}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label>Description:</label>
          <textarea
            name="description"
            placeholder="Description"
            value={programme.description}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label>Portrait Image:</label>
          <input
            type="file"
            accept="image/*"
            onChange={(event) => {
              if (event.target.files && event.target.files.length > 0) {
                setProgramme(prev => ({
                  ...prev,
                  portraitImg: event.target.files[0],
                }));
              }
            }}
          />
        </div>
        <div className="form-group">
          <label>Landscape Image:</label>
          <input
            type="file"
            accept="image/*"
            onChange={(event) => {
              if (event.target.files && event.target.files.length > 0) {
                setProgramme(prev => ({
                  ...prev,
                  landscapeImg: event.target.files[0],
                }));
              }
            }}
          />
        </div>
        <div className="form-group">
          <label>Select Themes:</label>
          <div className="theme-checkboxes">
            {availableThemes.map((theme, index) => (
              <label key={theme}>
                <input
                  type="checkbox"
                  name="themes"
                  checked={programme.themes.includes(theme)}
                  onChange={() => handleThemeChange(theme)}
                />
                <span>{theme}</span>
              </label>
            ))}
          </div>
        </div>
      </div>
      <div className="button-container">
        <button onClick={handleCreateProgramme}>Create Programme</button>
      </div>
    </div>
  );
};

export default CreateProgrammePage;
