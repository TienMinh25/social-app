import Stories from '../../components/stories/Stories';
import Posts from '../../components/posts/Posts';
import Share from '../../components/share/Share';
import './home.scss';

const Home = () => {
    return (
        <div className="home">
            <Stories />
            <Share />
            <Posts userId={JSON.parse(window.localStorage.getItem('user')).id} />
        </div>
    );
};

export default Home;
