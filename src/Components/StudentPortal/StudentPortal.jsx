import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
//import axios from "axios";
import "./StudentPortal.css";
//import Resemble from "resemblejs";
import logo from "../Assets/unilorin_logo2.png";
import photo from "../Assets/photo.png";

function StudentPortal() {
  const universityData = {
    "Faculty of Agriculture": [
      "Department of Agricultural Economics",
      "Department of Crop Production",
      "Department of Soil Science",
    ],
    "Faculty of Arts": [
      "Department of English",
      "Department of History",
      "Department of Linguistics",
    ],
    "Faculty of Basic Medical Sciences": [
      "Department of Anatomy",
      "Department of Physiology",
      "Department of Medical Biochemistry",
    ],
    "Faculty of Clinical Sciences": [
      "Department of Medicine",
      "Department of Surgery",
      "Department of Pediatrics",
    ],
    "Faculty of Communication and Information Sciences": [
      "Department of Mass Communication",
      "Department of Library and Information Science",
      "Department of Telecommunication Science",
      "Department of Information Technology",
      "Department of Computer Science",
    ],
    "Faculty of Education": [
      "Department of Educational Management",
      "Department of Counseling Education",
      "Department of Social Studies Education",
    ],
    "Faculty of Engineering and Technology": [
      "Department of Agric and Biosystems Engineering",
      "Deprtment of Biomedical Engineering",
      "Department of Chemical Engineering",
      "Department of Civil Engineering",
      "Department of Computer Engineering",
      "Department of Electrical & Elecctronics Engineering",
      "Department of food Bioprocess Engineering",
      "Department of Mechanical Engineering",
      "Department of Water Resources and Environmental Enigneering",
    ],
    "Faculty of Environmental Sciences": [
      "Department of Architecture",
      "Department of Urban and Regional Planning",
      "Department of Estate Management",
      "Department of Quantity Surveying",
      "Department of Surveying and Geoinformatics",
    ],
    "Faculty of Law": [
      "Department of Private Law",
      "Department of Public Law",
      "Department of International Law",
    ],
    "Faculty of Life Sciences": [
      "Department of Biochemistry",
      "Department of Microbiology",
      "Department of Optometry and Vision Science",
      "Department of Plant Biology",
      "Department of Zoology",
    ],
    "Faculty of Management Sciences": [
      "Department of Accounting",
      "Department of Business Administration",
      "Department of Finance",
      "Department of Marketing",
      "Department of Industrial Relations & Personnel Management",
      "Department of Public Administration",
    ],
    "Faculty of Pharmaceutical Sciences": [
      "Department of Clinical Pharmacy and Pharmacy Practice",
      "Department of Pharmacology & Toxicology",
      "Department of Pharmaceutics & Pharmaceutical Microbology",
      "Department of Pharmaceutical & Microbology & Biotechnology",
      "Department of Pharmcognosy & Drug Develoment",
      "Department of Pharmaceutical and Medicinal Chemistry",
    ],
    "Faculty of Physical Sciences": [
      "Department of Physics",
      "Department of Chemistry",
      "Department of Geology",
      "Department of Geo-Physics",
      "Department of Industrial Chemistry",
      "Department of Mathematics",
      "Department of Statistics",
    ],
    "Faculty of Social Sciences": [
      "Department of Economics",
      "Department of Geography & Environmental Mgt.",
      "Department of Sociology",
      "Department of Psychology",
      "Department of Political Science",
    ],

    "Faculty of Veterinary Medicine": [
      "Department of Veterinary Anatomy",
      "Department of Veterinary Physiology",
      "Department of Veterinary Pathology",
    ],
  };

  useEffect(() => {
    const facultySelect = document.getElementById("facultySelect");
    const departmentSelect = document.getElementById("departmentSelect");

    // Populate faculty
    for (const faculty in universityData) {
      const option = document.createElement("option");
      option.value = faculty;
      option.textContent = faculty;
      facultySelect.appendChild(option);
    }

    // Event listener for faculty selection
    facultySelect.addEventListener("change", () => {
      const selectedFaculty = facultySelect.value;

      // Clear previous departments
      departmentSelect.innerHTML =
        '<option value="">--Select a Department--</option>';

      if (selectedFaculty) {
        // Enable department select
        departmentSelect.disabled = false;

        // Get departments for the selected faculty
        const departments = universityData[selectedFaculty];

        // Populate departments
        departments.forEach((department) => {
          const option = document.createElement("option");
          option.value = department;
          option.textContent = department;
          departmentSelect.appendChild(option);
        });
      } else {
        // Disable department select if no faculty is selected
        departmentSelect.disabled = true;
      }
    });
  }, []);

  /***........................................... */
  // Form input data
  const [formData, setFormData] = useState({
    fullName: "",
    matricNumber: "",
    department: "",
    faculty: "",
    email: "",
    password: "",
    gender: "",
    level: "",
    photo: null,
  });
  const [file, setFile] = useState(null);
  const [matricNumber, setMatricNumber] = useState();
  const [errors, setErrors] = useState({});
  const [progress, setProgress] = useState({ started: false, pc: 0 });
  const [msg, setMsg] = useState(null);
  const inputRef = useRef(null);
  const [image, setImage] = useState();

  const handleImageClick = () => {
    inputRef.current.click();
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFormData({ ...formData, photo: file });
      setErrors((prevErrors) => ({ ...prevErrors, photo: null }));
    }
    const reader = new FileReader();
    reader.onload = (e) => {
      const img = new Image();
      img.onload = () => {
        const requiredWidth = 225;
        const requiredHeight = 225;
        if (img.width !== requiredWidth || img.height !== requiredHeight) {
          setErrors((prevErrors) => ({
            ...prevErrors,
            photo: `Image dimensions should be ${requiredWidth}x${requiredHeight} pixels`,
          }));
          return;
        }
        setImage(file);
        setFormData({ ...formData, photo: file });
      };
      img.src = e.target.result;
    };
    reader.readAsDataURL(file);
  };
  /*.....................*/

  // form data validation
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const validate = () => {
    let newErrors = {};
    if (!formData.fullName) newErrors.fullName = "Full name is required";
    if (!formData.matricNumber) {
      newErrors.matricNumber = "Matric number is required";
    } else if (
      !/^[0-9]{2}\/[0-9]{2}[a-zA-Z]{2}[0-9]{3}$/.test(formData.matricNumber)
    ) {
      newErrors.matricNumber =
        "Invalid matric number format. Expected format: 20/52HL120";
    }
    if (!formData.department) newErrors.department = "Department is required";
    if (!formData.faculty) newErrors.faculty = "Faculty is required";
    // Email validation
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email address is invalid";
    }
    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
    } else if (
      !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/.test(formData.password)
    ) {
      newErrors.password =
        "Password must contain at least one uppercase letter, one lowercase letter, and one number";
    }
    if (!formData.gender) newErrors.gender = "Gender is required";
    if (!formData.level) newErrors.level = "level is required";
    if (!formData.photo) newErrors.photo = "Passport photo is required";
    return newErrors;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      console.log(formData);
    } else {
      setErrors(validationErrors);
    }
  };
  return (
    <div className="container">
      <div className="header flex flex-col items-center gap-2.25 mt-7.5">
        <img src={logo} className="logo sw-56 h-56" alt="" />
        <div className="text text-[#000080] text-center sm:text-left text-base sm:text-3xl md:text-5xl lg:text-6xl font-bold mb-8 my-6">
          Registration Form
        </div>
      </div>

      {/* The student form details */}

      {/* image upload  */}
      <div className="flex flex-col justify-center items-center mb-4 relative">
        <div
          onClick={handleImageClick}
          className="flex flex-col justify-center items-center"
        >
          {image ? (
            <img src={URL.createObjectURL(image)} alt="" className="" />
          ) : (
            <img
              src={photo}
              alt="upload"
              className="form_image w-auto lg:w-[300px] lg:h-[300px]"
            />
          )}
          <input
            type="file"
            ref={inputRef}
            onChange={handleImageChange}
            style={{ display: "none" }}
          />
        </div>
        <button className="submit mt-0" onClick={handleImageClick}>
          Upload
        </button>
        {progress.started && (
          <progress max="100" value={progress.pc}></progress>
        )}
        {msg && <span>{msg}</span>}
        {errors.photo && (
          <p className="error lg:right-0 sm:right-0">{errors.photo}</p>
        )}
      </div>
      <div className="inputs grid  sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4 my-8">
        {/*div for the firstname and lasname*/}
        <div className="input relative">
          <label htmlFor="fullName" className="">
            Fullname
          </label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="Full name"
            className="peer text-gray-900 font-semibold text-xl md:text-2xl"
          />
          {errors.fullName && <p className="error">{errors.fullName}</p>}
        </div>

        <div className="input relative">
          <img src="{}" alt="" />
          <label htmlFor="matric">Matric Number</label>
          <input
            type="text"
            name="matricNumber"
            value={formData.matricNumber}
            onChange={handleChange}
            placeholder="Matric number"
          />

          {errors.matricNumber && (
            <p className="error">{errors.matricNumber}</p>
          )}
        </div>
        {/*div for Department*/}
        {/* Div for Faculty */}
        <div className=" relative">
          <label htmlFor="facultySelect" className="label-select">
            Faculty
          </label>
          <select id="facultySelect">
            <option value="">Select a Faculty</option>
          </select>
        </div>

        {/* Div for Department */}
        <div className="relative">
          <label htmlFor="departmentSelect" className="label-select">
            Department
          </label>
          <select id="departmentSelect" disabled>
            <option value="">Select a Department</option>
          </select>
        </div>

        {/*div for email*/}
        <div className="input relative">
          <img src="" alt="" />
          <label htmlFor="fullName">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email_id"
          />

          {errors.email && <p className="error">{errors.email}</p>}
        </div>

        {/*div for password*/}
        <div className="input relative">
          <img src="" alt="" />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Password"
          />

          {errors.password && <p className="error">{errors.password}</p>}
        </div>

        <div className="input">
          <label htmlFor="gender" className=" label-select">
            Gender
          </label>

          <select
            className="form-select"
            aria-label="Select gender"
            name="gender"
            value={formData.gender}
            onChange={handleChange}
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
          {errors.gender && <p className="error">{errors.gender}</p>}
        </div>
        <div className="input ">
          <label htmlFor="level" className=" label-level">
            Level
          </label>
          <select
            className="form-select"
            aria-label="Select gender"
            name="level"
            value={formData.level}
            onChange={handleChange}
          >
            <option value="">Select Level</option>
            <option value="100">100</option>
            <option value="200">200</option>
            <option value="300">300</option>
          </select>

          {errors.level && <p className="error">{errors.level}</p>}
        </div>
      </div>

      {/* <div className="forgot-password pl-4 md:pl-16  text-[#000080] text-xl md:text-2xl pb-24">
        Forgot password?{" "}
        <span className="click-here text-[#000080] cursor-pointer">
          Click here
        </span>
      </div> */}
      <div className="flex flex-col-2 justify-center gap-8 lg:mb-20">
        <div className="submit" onClick={handleSubmit}>
          {" "}
          Register
        </div>
        <Link to="/login">
          <div className="submit">Login</div>
        </Link>
      </div>
    </div>
  );
}

export default StudentPortal;
// Responsive upload button
// function handleUpload() {
//   if (!file) {
//     setMsg("No file selected");
//     return;
//   }
//   const fd = new FormData();
//   fd.append("file", file);

//   setMsg("Uploading...");
//   setProgress((prevState) => {
//     return { ...prevState, started: true };
//   });
//   axios
//     .post("http://httpbin.org/post", fd, {
//       onUploadProgress: (progressEvent) => {
//         setProgress((prevState) => {
//           return {
//             ...prevState,
//             pc: (progressEvent.loaded / progressEvent.total) * 100,
//           };
//         });
//       },
//       headers: {
//         "Custom-Header": "value",
//       },
//     })
//     .then((res) => {
//       setMsg("Upload successful");
//       console.log(res.data);
//     })
//     .catch((err) => {
//       setMsg("Upload failed");
//       console.log(err);
//     });
// }

//  // Checking if image uploaded has a red background
//  const canvas = document.createElement("canvas");
//  const ctx = canvas.getContext("2d");
//  canvas.width = img.width;
//  canvas.height = img.height;
//  ctx.drawImage(img, 0, 0);

//  const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
//  const data = imageData.data;

//  let redCount = 0;
//  let totalCount = data.length / 4; // each pixel has 4 values (r, g, b, a)

//  for (let i = 0; i < data.length; i += 4) {
//    const r = data[i];
//    const g = data[i + 1];
//    const b = data[i + 2];

//    // Check if the pixel is predominantly red
//    if (r > 200 && g < 50 && b < 50) {
//      redCount++;
//    }
//  }

//  const redPercentage = (redCount / totalCount) * 100;
//  console.log("Red Percentage:", redPercentage);

//  const threshold = 70; // Define the threshold percentage for a red background
//  if (redPercentage > threshold) {
//    console.log("The image has a red background.");
//    setImage(file);
//    setFormData({ ...formData, photo: file });
//    setErrors((prevErrors) => ({ ...prevErrors, photo: null })); // Clear the error if valid
//  } else {
//    console.log("The image does not have a red background.");
//    setErrors((prevErrors) => ({
//      ...prevErrors,
//      photo: "The image does not have a red background.",
//    }));
//  }
// };
