import "./style.css"
import { Modal, useMantineTheme } from '@mantine/core';

const ProfileModal = ({modalOpened, setModalOpened}) => {
  const theme = useMantineTheme();

  return (
    <Modal
      overlayColor={theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[2]}
      overlayOpacity={0.55}
      size='55%'
      overlayBlur={3}
      opened = {modalOpened}
      onClose = {() => {setModalOpened(false)}}
    >
      <form className="info-form">
        <h3>Your info</h3>
        <div>
            <input type="text" className="info-input" name="firstname" placeholder="First name" />
            <input type="text" className="info-input" name="lastname" placeholder="Last name" />
        </div>
        <div>
            <input type="text" className="info-input" name="worksAt" placeholder="Works at" />
        </div>
        <div>
            <input type="text" className="info-input" name="livesIn" placeholder="Lives in" />
            <input type="text" className="info-input" name="country" placeholder="Country" />
        </div>
        <div>
            <input type="text" className="info-input" name="relationStatus" placeholder="Relationship status" />
        </div>
        <div>
            <span>Profile image</span>
            <input type="file" name="profileImg" />
            <span>Cover image</span>
            <input type="file" name="coverIme" />
        </div>

        <button className="button info-button">Update</button>
      </form>
    </Modal>
  );
}


export default ProfileModal