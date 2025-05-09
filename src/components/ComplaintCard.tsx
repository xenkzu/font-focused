
import { useState } from "react";

interface ComplaintCardProps {
  user: string;
  timeAgo: string;
  content: string;
  status: string[];
  upvotes: number;
  comments: number;
  imageUrl?: string;
  isHot?: boolean;
}

const ComplaintCard = ({ 
  user, 
  timeAgo, 
  content, 
  status, 
  upvotes, 
  comments, 
  imageUrl,
  isHot = false
}: ComplaintCardProps) => {
  
  const getStatusColor = (status: string) => {
    switch(status.toLowerCase()) {
      case 'urgent':
        return 'bg-status-urgent text-white';
      case 'pending':
        return 'bg-status-pending';
      case 'in progress':
        return 'bg-status-progress';
      case 'long-term':
        return 'bg-status-longterm';
      case 'resolved':
        return 'bg-status-resolved';
      case 'daily':
        return 'bg-status-daily';
      default:
        return 'bg-gray-200';
    }
  };

  return (
    <div className="complaint-card">
      <div className="flex items-center gap-3 mb-2">
        <div className="w-8 h-8 rounded-full bg-gray-200"></div>
        <div className="font-medium">{user}</div>
        <div className="text-gray-500 text-sm">{timeAgo}</div>
        {isHot && <span className="text-red-500">🔥</span>}
      </div>
      
      <div className="mb-3">
        <p className="text-lg font-medium">{content}</p>
      </div>
      
      <div className="flex flex-wrap gap-2 mb-3">
        {status.map((s, index) => (
          <span 
            key={index} 
            className={`status-tag ${getStatusColor(s)}`}
          >
            {s}
          </span>
        ))}
      </div>
      
      <div className="flex justify-between">
        <div className="flex gap-2">
          <button className="flex items-center gap-1 bg-amber-100 rounded-full py-1 px-4">
            <span className="material-icons text-sm">↑</span>
            <span>{upvotes}</span>
          </button>
          
          <button className="flex items-center gap-1 bg-gray-100 rounded-full py-1 px-4">
            <span className="material-icons text-sm">💬</span>
            <span>{comments}</span>
          </button>
          
          <button className="flex items-center gap-1 bg-gray-100 rounded-full py-1 px-4">
            <span className="material-icons text-sm">↺</span>
            <span>Repost</span>
          </button>
        </div>
        
        <div>
          <a href="#" className="text-blue-primary">View More</a>
        </div>
      </div>
      
      {imageUrl && (
        <div className="mt-3">
          <img src={imageUrl} alt="Complaint" className="w-full h-32 object-cover rounded-lg" />
        </div>
      )}
    </div>
  );
};

export default ComplaintCard;
