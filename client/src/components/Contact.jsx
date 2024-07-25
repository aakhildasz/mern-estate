import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Contact({ listing }) {
  const [landlord, setLandlord] = useState(null);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const fetchListing = async () => {
      try {
        const res = await fetch(`/api/user/${listing.userRef}`);
        const data = await res.json();
        setLandlord(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchListing();
  }, [listing.userRef]);

  const onChange = async (e) => {
    setMessage(e.target.value);
  };

  return (
    <div>
      {landlord && (
        <div className="flex flex-col gap-3">
          <p>
            Contact <span className="font-semibold">{landlord.username}</span>{" "}
            for{" "}
            <span className="font-semibold">{listing.name.toLowerCase()}</span>
          </p>
          <textarea
            name="message"
            id="message"
            type="text"
            placeholder="Enter your message here..."
            className="border w-full p-3 rounded-lg"
            value={message}
            onChange={onChange}
            required
          />
          <Link
            to={`mailto:${landlord.email}?subject=Regarding ${listing.name}$body=${message}`}
            className="bg-slate-700 text-center text-white rounded-lg uppercase p-3 hover:opacity-95"
          >
            Send Message
          </Link>
        </div>
      )}
    </div>
  );
}
