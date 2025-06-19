import {
  FaCheck,
  FaTimes,
  FaUsers,
  FaUserCheck,
  FaUserTimes,
} from "react-icons/fa";

interface Invite {
  id: number;
  created_at: string;
  is_accepted: boolean;
  name: string;
}

interface InviteListProps {
  invites: Invite[];
}

export default function InviteList({ invites }: InviteListProps) {
  const acceptedInvites = invites.filter((invite) => invite.is_accepted);
  const declinedInvites = invites.filter((invite) => !invite.is_accepted);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <div className="max-w-4xl mx-auto p-6  min-h-screen">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-[#74bd91] mb-2">
          RSVP Responses
        </h1>
        <p className="text-[#74bd91]">VIP Invitations</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Accepted Invites */}
        <div className="small-box rounded-lg shadow-lg overflow-hidden">
          <div className="bg-[#74bd91] text-white px-6 py-4 flex items-center gap-3">
            <FaUserCheck className="text-xl" />
            <h3 className="text-xl">Confirmed ({acceptedInvites.length})</h3>
          </div>
          <div className="p-6">
            {acceptedInvites.length === 0 ? (
              <div className="text-center text-gray-500 py-8">
                <FaUsers className="text-4xl mx-auto mb-3 text-gray-300" />
                <p>No confirmations yet</p>
              </div>
            ) : (
              <div className="space-y-3">
                {acceptedInvites.map((invite) => (
                  <div
                    key={invite.id}
                    className="flex items-center justify-between p-3 bg-green-50 rounded-lg border border-green-200"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-[#74bd91] rounded-full flex items-center justify-center">
                        <FaCheck className="text-white text-sm" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-800">
                          {invite.name}
                        </p>
                        <p className="text-xs text-gray-500">
                          {formatDate(invite.created_at)}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Declined Invites */}
        <div className="small-box rounded-lg shadow-lg overflow-hidden">
          <div className="bg-[#ef434d] text-white px-6 py-4 flex items-center gap-3">
            <FaUserTimes className="text-xl" />
            <h3 className="text-xl font-semibold">
              Declined ({declinedInvites.length})
            </h3>
          </div>
          <div className="p-6">
            {declinedInvites.length === 0 ? (
              <div className="text-center text-gray-500 py-8">
                <FaUsers className="text-4xl mx-auto mb-3 text-gray-300" />
                <p>No declines yet</p>
              </div>
            ) : (
              <div className="space-y-3">
                {declinedInvites.map((invite) => (
                  <div
                    key={invite.id}
                    className="flex items-center justify-between p-3 bg-red-50 rounded-lg border border-red-200"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-[#ef434d] rounded-full flex items-center justify-center">
                        <FaTimes className="text-white text-sm" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-800">
                          {invite.name}
                        </p>
                        <p className="text-xs text-gray-500">
                          {formatDate(invite.created_at)}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Summary Stats */}
      <div className="mt-8 small-box rounded-lg shadow-lg p-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div>
            <div className="text-3xl font-bold text-white">
              {invites.length}
            </div>
            <div className="text-white">Total Responses</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-green-600">
              {acceptedInvites.length}
            </div>
            <div className="text-white">Confirmed</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-[#ef434d]">
              {declinedInvites.length}
            </div>
            <div className="text-white">Declined</div>
          </div>
        </div>
      </div>
    </div>
  );
}
