
import Header from "@/components/Header";
import ProfileCard from "@/components/ProfileCard";
import ComplaintsList from "@/components/ComplaintsList";
import UserComplaints from "@/components/UserComplaints";
import NewComplaintButton from "@/components/NewComplaintButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container py-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="md:col-span-2">
            <ComplaintsList />
          </div>
          
          <div className="md:col-span-1 space-y-4">
            <ProfileCard />
            <UserComplaints />
            <NewComplaintButton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
