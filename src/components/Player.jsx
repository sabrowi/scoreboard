import React from "react";
import Score from "./Score";

export default function Player(props) {
  return (
    <div className="row">
      <div className="col-md-2 p-2">{props.no}</div>
      <div className="col-md-4 p-2">{props.name}</div>
      <div className="col-md-4 p-2">
        <Score initialValue={0} />
      </div>
      <div className="col-md-2">
        <button
          style={{ marginBottom: 5 }}
          onClick={() => props.onEdit(props.id)}
          className="btn-primary btn btn-sm"
        >
          Edit
        </button>

        <button
          style={{ marginBottom: 5 }}
          onClick={() => props.onHapus(props.id)}
          className="btn-danger btn btn-sm"
        >
          Hapus
        </button>
      </div>
    </div>
  );
}
