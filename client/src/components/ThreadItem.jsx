import { useAuth } from "../context/AuthContext";
import { RoleGate } from "./RoleGate";

export function ThreadItem({ thread }) {
  const { user } = useAuth();

  // Ownership: Logged-in user wrote this thread
  const isAuthor = user?.userId === thread.authorId;
  // Role: Logged-in user is a moderator
  const isModerator = user?.role === "moderator";

  const canEdit = isAuthor || isModerator;

  return (
    <article>
      <h3>{thread.title}</h3>
      <p>{thread.body}</p>

      {/* Render Edit/Delete only for author or moderator */}
      {canEdit && (
        <div className="controls">
          <button>Edit</button>
          <button>Delete</button>
        </div>
      )}

      {/* Render Admin Panel only for admin role */}
      <RoleGate requiredRole="admin">
        <div className="admin-controls">
          <button>Delete Site</button>
        </div>
      </RoleGate>
    </article>
  );
}