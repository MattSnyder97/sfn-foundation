import React from "react";

export default function PortalPublicView() {
  return (
    <section>
      <h2 className="text-2xl font-semibold">Research Portal</h2>
      <p className="mt-2 text-gray-700">You currently do not have access to admin features. Browse public resources or request access.</p>
      {/* replace with real public UI as needed */}
      <div className="mt-4">
        <button className="px-4 py-2 border rounded">Request access</button>
      </div>
    </section>
  );
}
