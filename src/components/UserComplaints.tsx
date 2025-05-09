
const COMPLAINTS = [
  { type: "Water Drainage", time: "3hrs ago" },
  { type: "Pipeline", time: "4days ago" }
];

interface ComplaintSummaryProps {
  title: string;
  complaints: Array<{ type: string; time: string }>;
}

const ComplaintSummary = ({ title, complaints }: ComplaintSummaryProps) => {
  return (
    <div className="border border-gray-200 rounded-lg p-4 mb-4">
      <h2 className="text-xl font-bold mb-2 font-space">{title}</h2>
      {complaints.map((complaint, index) => (
        <div key={index} className="flex justify-between py-1 font-sanchez">
          <span>{complaint.type}</span>
          <span className="text-right">{complaint.time}</span>
        </div>
      ))}
    </div>
  );
};

const UserComplaints = () => {
  return (
    <>
      <ComplaintSummary title="Your Complaints" complaints={COMPLAINTS} />
      <ComplaintSummary title="Urgent Problems" complaints={COMPLAINTS} />
    </>
  );
};

export default UserComplaints;
