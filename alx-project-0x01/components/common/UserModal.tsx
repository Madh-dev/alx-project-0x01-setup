import React, { useState } from "react";
import { UserData, UserModalProps } from "@/interfaces";

const UserModal: React.FC<UserModalProps> = ({ isOpen, onClose, onSave }) => {
  const [formData, setFormData] = useState<Partial<UserData>>({});

  if (!isOpen) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newUser: UserData = {
      id: Date.now(), // quick unique id
      name: formData.name || "",
      username: formData.username || "",
      email: formData.email || "",
      address: {
        street: "",
        suite: "",
        city: "",
        zipcode: "",
        geo: { lat: "", lng: "" },
      },
      phone: formData.phone || "",
      website: formData.website || "",
      company: {
        name: "",
        catchPhrase: "",
        bs: "",
      },
    };

    onSave(newUser);
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-xl font-semibold mb-4">Add New User</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            name="name"
            placeholder="Name"
            onChange={handleChange}
            className="w-full border rounded p-2"
          />
          <input
            name="username"
            placeholder="Username"
            onChange={handleChange}
            className="w-full border rounded p-2"
          />
          <input
            name="email"
            placeholder="Email"
            onChange={handleChange}
            className="w-full border rounded p-2"
          />
          <input
            name="phone"
            placeholder="Phone"
            onChange={handleChange}
            className="w-full border rounded p-2"
          />
          <input
            name="website"
            placeholder="Website"
            onChange={handleChange}
            className="w-full border rounded p-2"
          />
          <div className="flex justify-end gap-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-300 rounded"
            >
              Cancel
            </button>
            <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded">
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserModal;
