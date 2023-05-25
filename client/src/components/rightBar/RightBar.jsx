import './rightBar.scss';

const RightBar = () => {
    return (
        <div className="rightBar">
            <div className="container">
                <div className="item">
                    <span>Suggestions For You</span>
                    <div className="user">
                        <div className="userInfo">
                            <img
                                src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600"
                                alt=""
                            />
                            <span>Jane Doe</span>
                        </div>
                        <div className="buttons">
                            <button>follow</button>
                            <button>dismiss</button>
                        </div>
                    </div>
                    <div className="user">
                        <div className="userInfo">
                            <img
                                src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600"
                                alt=""
                            />
                            <span>Jane Doe</span>
                        </div>
                        <div className="buttons">
                            <button>follow</button>
                            <button>dismiss</button>
                        </div>
                    </div>
                </div>
                <div className="item">
                    <span>Latest Activities</span>
                    <div className="user">
                        <div className="userInfo">
                            <img
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxuqprHY2pSj6-bQ2X8HmveUfc39nX9-EjWw&usqp=CAU"
                                alt=""
                            />
                            <p>
                                <span>Bảo Anh</span> changed their cover picture
                            </p>
                        </div>
                        <span>12 min ago</span>
                    </div>
                    <div className="user">
                        <div className="userInfo">
                            <img
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXusk9QavWKQyRw0yBtFUVEKxMMPAECbE42w&usqp=CAU"
                                alt=""
                            />
                            <p>
                                <span>Jane Doe</span> changed their cover picture
                            </p>
                        </div>
                        <span>1 min ago</span>
                    </div>
                    <div className="user">
                        <div className="userInfo">
                            <img
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8tYlxM6FqSAcmrpuTef-6kgsaU8XzwBk0cQ&usqp=CAU"
                                alt=""
                            />
                            <p>
                                <span>tien minh</span> changed their cover picture
                            </p>
                        </div>
                        <span>2 min ago</span>
                    </div>
                    <div className="user">
                        <div className="userInfo">
                            <img
                                src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600"
                                alt=""
                            />
                            <p>
                                <span>Jane Doe</span> changed their cover picture
                            </p>
                        </div>
                        <span>1 min ago</span>
                    </div>
                </div>
                <div className="item">
                    <span>Online Friends</span>
                    <div className="user">
                        <div className="userInfo">
                            <img
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxuqprHY2pSj6-bQ2X8HmveUfc39nX9-EjWw&usqp=CAU"
                                alt=""
                            />
                            <div className="online" />
                            <span>Bảo Anh</span>
                        </div>
                    </div>
                    <div className="user">
                        <div className="userInfo">
                            <img
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRF9w-5FeZRvEE37DhOm0hIkoWGvzryZH167w&usqp=CAU"
                                alt=""
                            />
                            <div className="online" />
                            <span>John</span>
                        </div>
                    </div>
                    <div className="user">
                        <div className="userInfo">
                            <img
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuyOjriYml14vKYjqZB4wgD5l2G1-VEnD63A&usqp=CAU"
                                alt=""
                            />
                            <div className="online" />
                            <span>Long</span>
                        </div>
                    </div>
                    <div className="user">
                        <div className="userInfo">
                            <img
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXusk9QavWKQyRw0yBtFUVEKxMMPAECbE42w&usqp=CAU"
                                alt=""
                            />
                            <div className="online" />
                            <span>Jane Doe</span>
                        </div>
                    </div>
                    <div className="user">
                        <div className="userInfo">
                            <img
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8tYlxM6FqSAcmrpuTef-6kgsaU8XzwBk0cQ&usqp=CAU"
                                alt=""
                            />
                            <div className="online" />
                            <span>tien minh</span>
                        </div>
                    </div>
                    <div className="user">
                        <div className="userInfo">
                            <img
                                src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600"
                                alt=""
                            />
                            <div className="online" />
                            <span>Huyen Pham</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RightBar;
