import React from "react";

export default function PortalAdminView() {
  return (
    <section>
      <h2 className="text-2xl font-semibold">Research Portal — Admin</h2>
      <p className="mt-2 text-gray-700">You have access to admin features. Manage submissions, view protected data, and export reports.</p>
      {/* replace with real admin UI as needed */}
      <div className="mt-4">
        <button className="px-4 py-2 bg-blue-600 text-white rounded">Open admin dashboard</button>
      </div>
    </section>
  );
}
