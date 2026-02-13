import LeadershipCard from '../shared/Cards/LeadershipCard'

const LeadershipTeam = () => {
  return (
    <div className="my-20 text-center">
      <h1 className="text-4xl font-bold text-center">Our Leadership Team</h1>
      <p className="text-gray-500 text-md md:text-lg text-center mt-5">
        Meet the dedicated professionals who guide our organization.
      </p>

      <div className="grid grid-cols-2 gap-5 mx-5 my-9 md:my-15 md:mx-15 md:grid-cols-4">
        <LeadershipCard
          title="Dr. Margaret Sullivan"
          status="Chief Executive Officer"
          description="With over 30 years in healthcare administration, Dr. Sullivan leads MediCare with a vision for accessible, quality healthcare."
          img="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=face"
        />
        <LeadershipCard
          title="Dr. Robert Anderson"
          status="Chief Executive Officer"
          description="A renowned cardiologist, Dr. Anderson ensures our medical practices meet the highest standards of care."
          img="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop&crop=face"
        />
        <LeadershipCard
          title="Dr. Jennifer Park"
          status="Director of Patient Experience"
          description="Dr. Park is dedicated to creating a welcoming environment where patients feel heard and valued."
          img="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop&crop=face"
        />
        <LeadershipCard
          title="Michael Thompson"
          status="Chief Operations Officer"
          description="Michael brings 20 years of healthcare operations expertise to ensure smooth, efficient hospital operations."
          img="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face"
        />
      </div>
    </div>
  )
}

export default LeadershipTeam
