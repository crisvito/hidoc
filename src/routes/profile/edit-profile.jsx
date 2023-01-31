import { Link, useNavigate } from "react-router-dom";
import { useUser } from "../../hooks/useUser";
import { kecamatan } from "../../data";
import { useState, useEffect, useContext } from "react";
import { Button } from "../../components";
import { doc, updateDoc } from "firebase/firestore";
import { db, storage } from "../../firebase";
import { AuthContext } from "../../context";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

export function EditProfile() {
  const { data } = useUser();
  const { currentUser } = useContext(AuthContext);
  const [user, setUser] = useState({
    photoURL: "",
    namaDepan: "",
    namaBelakang: "",
    alamatRumah: "",
    kecamatan: "",
  });
  const [file, setFile] = useState("");
  const [per, setPer] = useState(null);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    setUser({
      photoURL: data.photoURL || "",
      namaDepan: data.namaDepan || "",
      namaBelakang: data.namaBelakang || "",
      alamatRumah: data.alamatRumah || "",
      kecamatan: data.kecamatan || "",
    });
  }, [data]);

  useEffect(() => {
    const uploadFile = () => {
      const newName = new Date().getTime() + file.name;
      const storageRef = ref(storage, `avatar/${newName}`);
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setPer(progress);
        },
        (error) => setError(error.message),
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setUser({ ...user, photoURL: downloadURL });
          });
        }
      );
    };
    file && uploadFile();
  }, [file]);

  const handleInput = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    const userDoc = doc(db, "users", currentUser.uid);
    await updateDoc(userDoc, user);
    navigate("/profile");
  };

  return (
    <div className="bg-blue-100">
      <div className="bg-white relative shadow rounded-lg w-5/6 md:w-5/6  lg:w-4/6 xl:w-3/6 mx-auto my-28">
        <Link
          to="/profile"
          className="absolute top-5 left-5 font-bold text-blue-900"
        >
          Back
        </Link>
        <div className="flex justify-center">
          <img
            src={
              file
                ? URL.createObjectURL(file)
                : data.photoURL
                ? data.photoURL
                : "/default_profile.png"
            }
            alt={data.namaDepan}
            className="rounded-full mx-auto absolute -top-20 w-32 h-32 shadow-md border-4 border-white transition duration-200 transform hover:scale-110"
          />
        </div>

        <div className="mt-16">
          <div className="w-full biodata">
            {error && <span>{error}</span>}
            <div className="edit">
              <form onSubmit={handleUpdate}>
                <div>
                  Foto Profile :
                  <input
                    type="file"
                    name="photoURL"
                    accept=".png, .jpg, .jpeg"
                    onChange={(e) => setFile(e.target.files[0])}
                    multiple
                  />
                </div>
                <div>
                  Nama Depan :
                  <input
                    type="text"
                    name="namaDepan"
                    value={user?.namaDepan}
                    onChange={handleInput}
                    required
                  />
                </div>
                <div>
                  Nama Belakang :
                  <input
                    type="text"
                    name="namaBelakang"
                    value={user?.namaBelakang}
                    onChange={handleInput}
                    required
                  />
                </div>
                <div>
                  Alamat Rumah :
                  <input
                    type="text"
                    name="alamatRumah"
                    value={user?.alamatRumah}
                    onChange={handleInput}
                    required
                  />
                </div>
                <div>
                  Kecamatan :
                  <select
                    id="kecamatan"
                    name="kecamatan"
                    value={user?.kecamatan}
                    onChange={handleInput}
                    required
                  >
                    {kecamatan.map((k, i) => {
                      return <option key={i}>{k}</option>;
                    })}
                  </select>
                </div>

                <Button
                  type="submit"
                  disabled={per !== null && per < 100}
                  children="Update"
                  className="px-7 w-32 uppercase text-sm self-end mx-4 my-3 sm:mx-6"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
