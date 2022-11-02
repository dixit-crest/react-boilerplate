import React, { useState } from "react";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { api } from "../../utils";
import { FaEdit, FaTrash } from "react-icons/fa";
const ListNotes = () => {
  const [isRequestLoading, setIsRequestLoading] = useState(false);
  const [notes, setNotes] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState("");

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) =>
    isEditing ? updateNote(editId, data) : addNote(data);

  const addNote = async (payload) => {
    try {
      const response = await api.post("/notes", payload);
      fetchNotes();
      reset();
    } catch (error) {
      console.log(error.message);
      toast.error(error?.response?.data?.message || error.message);
    } finally {
      setIsRequestLoading(false);
    }
  };

  const updateNote = async (id, payload) => {
    try {
      const response = await api.put("/notes/" + id, payload);
      fetchNotes();
      reset();
      setIsEditing(false);
      setEditId("");
    } catch (error) {
      console.log(error.message);
      toast.error(error?.response?.data?.message || error.message);
    } finally {
      setIsRequestLoading(false);
    }
  };

  const fetchNotes = async () => {
    try {
      const response = await api.get("/notes");
      setNotes(response.data.data);
    } catch (error) {
      console.log(error.message);
      toast.error(error?.response?.data?.message || error.message);
    } finally {
      setIsRequestLoading(false);
    }
  };

  const fetchNote = async (id) => {
    try {
      const response = await api.get("/notes/" + id);
      setValue("title", response.data.data.title);
      setValue("content", response.data.data.content);
    } catch (error) {
      console.log(error.message);
      toast.error(error?.response?.data?.message || error.message);
    } finally {
      setIsRequestLoading(false);
    }
  };

  const deleteNote = async (id) => {
    try {
      const response = await api.delete("/notes/" + id);
      fetchNotes();
    } catch (error) {
      console.log(error.message);
      toast.error(error?.response?.data?.message || error.message);
    } finally {
      setIsRequestLoading(false);
    }
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  const handleEdit = (id) => {
    setIsEditing(true);
    fetchNote(id);
    setEditId(id);
  };

  return (
    <div className="row align-items-start w-100 p-4">
      <div className="col-12 col-sm-6">
        {notes.length === 0 ? (
          <div className="d-flex p-5 justify-content-center align-items-center bg-white mt-5">
            <h4>No notes available.</h4>
          </div>
        ) : (
          <ul className="list-group mt-5">
            {notes.map((_) => (
              <li className="list-group-item">
                <div className="d-flex justify-content-between">
                  <h6>{_.title}</h6>
                  <div className="d-flex gap-2">
                    {/* there is fall back `_.id` because this boilerplate is built with
                        2 backends, 1 with mysql db and other one with mongodb. 
                    */}
                    <FaEdit
                      role="button"
                      onClick={() => handleEdit(_._id || _.id)}
                    />
                    <FaTrash
                      role="button"
                      className="text-danger curser-pointer"
                      onClick={() => deleteNote(_._id || _.id)}
                    />
                  </div>
                </div>
                <p>{_.content}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="col-12 col-sm-6 mt-4">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">
              Title
            </label>
            <input
              {...register("title", {
                required: "Title is required",
              })}
              type="text"
              class="form-control"
              placeholder="Title of the note"
            />
            <small class="text-danger">{errors?.title?.message}</small>
          </div>
          <div class="mb-3">
            <label for="exampleFormControlTextarea1" class="form-label">
              Content
            </label>
            <textarea
              class="form-control"
              rows="3"
              {...register("content", {
                required: "Content is required",
              })}
              placeholder="Content of the note"
            />
            <small class="text-danger">{errors?.content?.message}</small>
          </div>
          <div className="d-flex justify-content-end gap-2">
            {isEditing && (
              <button
                type="button"
                onClick={() => {
                  setIsEditing(false);
                  setEditId("")
                  reset();
                }}
                className="btn btn-secondary"
              >
                Cancel
              </button>
            )}

            <button
              type="submit"
              disabled={isRequestLoading}
              className="btn btn-primary"
            >
              {isEditing ? "Update" : "Add"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ListNotes;
