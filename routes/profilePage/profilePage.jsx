
import Chat from '../../components/chat/Chat';
import List from '../../components/list/list';
import './profilePage.scss';
function ProfilePage() {
  return (
    <div className='profilePage'>
      <div className="details">
        <div className="wrapper">
          <div className="title">
            <h1 >User Information</h1>
            <button>Update Profile</button>
          </div>
          <div className="info">
            <span>
              Avtar:
              <img src="https://images.pexels.com/photos/428333/pexels-photo-428333.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
         </span>
            <span>Uaername: <b>David Grix</b></span>
            <span>E-mail: <b>davidgrix@gmail.com</b></span>
          </div>
          <div className="title">
            <h1 >My List</h1>
            <button>Create New Post</button>
          </div>
          <List/>
          <div className="title">
            <h1 >Saved List</h1>
          </div>
          <List/>
        </div>
      </div>
      <div className="chatContainer">
        <div className="wrapper">
          <Chat/>
        </div>
      </div>
    </div>
  )
}

export default ProfilePage
