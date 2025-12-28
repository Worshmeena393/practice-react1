import './App.css'
import avatarImage from './assets/avatar.jpg'
import Profilepage from './component/ProfilePage'

function App() {
  const user1 = {
    name: "Worshmeena Qayoumi",
    username: "@qayoumi",
    avatarImage: avatarImage,
    xp: 80,
    lastActive: "Dec 22 2025",
    streakDays: 2,
    longestStreak: 2,
    recentBadgesText: "No badges earned yet.",

    personalInfo: {
      Email: "worshmeenaqayoumi@gmail.com",
      Gender: "Female",
      Country: "Afghanistan",
      "Province or State": "Kabul",
      "Teaching Experience": "2",
      "Date Of Birth": "2/17/99",
      "Online Portfolio Link": "N/A",
      Languages: "Pashto, Farsi, English",
      Bio: "CS Student, Lifelong Learner, Passionate about Technology & Growth",
    },

    accountDetails: {
      Role: "Student",
      Status: "Active",
      Verification: "Verified",
    },
  };

  return (
    <div className='page'>
      <Profilepage User={user1}></Profilepage>
    </div>
  )
}

export default App