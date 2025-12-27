import { Routes, Route } from "react-router-dom";
import ResourceList from "./resources/ResourceList";
import ResourceForm from "./resources/ResourceForm";

const FreeResourcesManagement = () => {
  return (
    <Routes>
      <Route index element={<ResourceList />} />
      <Route path="new" element={<ResourceForm />} />
      <Route path="edit/:id" element={<ResourceForm />} />
    </Routes>
  );
};

export default FreeResourcesManagement;
