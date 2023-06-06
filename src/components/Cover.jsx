import diary from './diary.jpg';
import { useHistory } from 'react-router-dom';
const Cover = (props) => {
    const id=props.id.id;
    const history = useHistory();
    const handleClick = () => {
        if (id) {
            history.push(`/users/${id}`);
            return;
        }
        else {
            history.push('/login');

        }
    }
    return (
        <>
            <div className="top-container">
                <h3 className="intro-line">Write down your emotions!</h3>
                <p className="intro">Welcome to Digi Diary! A safe and secure space where you can pen down your thoughts, memories,
                    and
                    experiences with the convenience of modern technology.
                    Digi Diary is your go-to platform for keeping your personal diary digitally. Start your journey of
                    self-reflection and self-expression today with Digi Diary!
                </p>
            </div>
            <div className="mid-container">
                <img src={diary} alt="diary" />
                <p>
                    At Digi Diary, we prioritize the security and privacy of your personal thoughts and memories. That's why we
                    use cutting-edge encryption technology to safeguard your data. Your entries are encrypted using
                    industry-standard encryption algorithms, ensuring that only you have access to your diary.
                </p>
                <button onClick={handleClick}>Try Now</button>
            </div>
        </>
    );
}

export default Cover;