
import ComplaintCard from "./ComplaintCard";

const COMPLAINTS_DATA = [
  {
    id: 1,
    user: "Yash Kaul",
    timeAgo: "2d ago",
    content: "Dirty water plagues Nanjappa Road residents as BWSSB fails to resolve decade-old contamination issues.",
    status: ["Pending", "Urgent"],
    upvotes: 359,
    comments: 37,
    imageUrl: "https://images.unsplash.com/photo-1612096536102-930957a466e5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80",
    isHot: true
  },
  {
    id: 2,
    user: "Saanvi Karka",
    timeAgo: "2d ago",
    content: "Faridabad, India open garbage disposal is huge problem here, however no one pay attention to it.",
    status: ["In Progress", "Long-Term"],
    upvotes: 63,
    comments: 37,
    imageUrl: "https://images.unsplash.com/photo-1604187351574-c75ca79f5807?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
  },
  {
    id: 3,
    user: "Riya raj",
    timeAgo: "2d ago",
    content: "Residents Struggle with Frequent Power Cuts, Urge Immediate Action. Unresolved Electricity Outages Disrupt Daily Life in Local Neighborhood.",
    status: ["Resolved", "Daily"],
    upvotes: 21,
    comments: 37,
    imageUrl: ""
  }
];

const ComplaintsList = () => {
  return (
    <div className="border border-gray-200 rounded-lg p-4 mb-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Complaints</h2>
        <div className="flex gap-2">
          <button className="bg-gray-100 px-3 py-1 rounded flex items-center gap-1">
            Urgency <span>▼</span>
          </button>
          <button className="bg-gray-100 px-3 py-1 rounded flex items-center gap-1">
            Type <span>▼</span>
          </button>
        </div>
      </div>
      
      <div className="space-y-4">
        {COMPLAINTS_DATA.map(complaint => (
          <ComplaintCard 
            key={complaint.id}
            user={complaint.user}
            timeAgo={complaint.timeAgo}
            content={complaint.content}
            status={complaint.status}
            upvotes={complaint.upvotes}
            comments={complaint.comments}
            imageUrl={complaint.imageUrl}
            isHot={complaint.isHot}
          />
        ))}
      </div>
    </div>
  );
};

export default ComplaintsList;
